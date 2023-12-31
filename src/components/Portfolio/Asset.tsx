import AddAssetButton from "../AddAssetButton";
import DeleteAsset from "../../components/Delete/DeleteAsset"; 
import './Asset.css';
import NumberDisplay from "../Number/NumberDisplay";
import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";

const Asset = ({ userPortfolioAssets, averagePrices, portfolioId, handleAddAsset, handleDeleteAsset, valeurLatente , note}) => {
  const containerCardStyle = {
    background: 'linear-gradient(107deg, rgba(8,11,41,1) 34%, rgba(26,28,96,1) 85%)',
    display: 'flex flex-wrap justify-center gap-10',
    flexDirection: 'column',
  };

  const tableContainerStyle = {
    maxHeight: '400px',
    overflowY: 'auto',
  };

  // Props passé au composant 
  const handleDeleteAssetClick = (assetId) => {
    handleDeleteAsset(assetId);
  }

  return (
    <div style={containerCardStyle} className="h-full mb-5 rounded-2xl shadow border border-indigo-900 p-5">
      <div className="flex justify-between">
        <h3 className="text-lg text-white font-semibold mb-4">Actifs du portefeuille</h3>
        <p>
          <AddAssetButton onModalClose={() => {}} portfolioId={portfolioId} handleAddAsset={handleAddAsset} />
        </p>
      </div>
  
      <div style={tableContainerStyle}>
        <table className="w-full">
          <thead>
            <tr className="text-white bg-opacity-0">
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Prix actuel</th>
              <th className="px-4 py-2">Quantité</th>
              <th className="px-4 py-2">Prix moyen d'achat</th>
              <th className="px-4 py-2">Valeur</th>
              <th className="px-4 py-2">Valeur latente</th>
              <th className="px-4 py-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {userPortfolioAssets.map((asset, index) => {
              console.log(" aaasssseeeett", asset)
              const averagePrice = averagePrices[asset.symbol] || 0;
              return (
                <tr key={asset.id} className="">
                  <td className="text-white text-center p-5">{asset.name}</td>
                  <td className="text-white text-center p-5">{asset.historicPrice.toFixed(2)}</td>
                  <td className="text-white text-center p-5">{asset.remainingQuantity}</td>
                  <td className="text-white text-center p-5">{averagePrice}</td>
                  <td className="text-white text-center p-5">{(asset.historicPrice * asset.remainingQuantity).toFixed(2)}</td>
                  <td className="text-white text-center p-5">
                    {valeurLatente[index] ? (
                      <>
                        <NumberDisplay value={valeurLatente[index].assetProfitLoss.toFixed(2)} /> | {" "}
                        <NumberPourcentDisplay value={valeurLatente[index].assetROIPercent.toFixed(2)} />
                      </>
                    ) : (
                      "Indisponible"
                    )}
                  </td>
                  <td className="text-white text-center p-5">
                    {note[index] ? (
                      
                      note[index].note
                    ) : (
                      "Aucune note"
                    )}
                  </td>
                  <td className="text-white text-center  p-5">
                    <DeleteAsset
                      assetSymbol={asset.symbol}
                      assetQuantity={asset.remainingQuantity}
                      portfolioId={portfolioId} 
                      handleDelete={handleDeleteAssetClick}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};

export default Asset;
