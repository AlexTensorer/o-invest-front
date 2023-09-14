import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";
import NumberDisplay from "../Number/NumberDisplay";
import MainNumberDisplay from "../Number/MainNumberDisplay";
import SubNumberDisplay from "../Number/SubNumberDisplay";

const CardGlobalPortfolio = ({ portfolio }) => {
  console.log("portfolio dans cardglobal", portfolio)
  
  const containerStyle = {
    background: 'linear-gradient(107deg, rgba(8,11,41,1) 34%, rgba(26,28,96,1) 85%)',
    display: 'flex',
    flexDirection: 'column',
  };


  return (
    <div style={containerStyle} className=" border border-indigo-900 hover:border-dotted p-10 rounded-2xl shadow-lg">
      <div className="text-2xl text-white font-bold mb-4">Valorisation Globale</div>
        <div className="list-disc py-4 text-lg text-white"><MainNumberDisplay value={parseFloat(portfolio.portfolioValuation).toFixed(2)} /></div>
        <div className="list-disc text-lg text-white">ROI: {portfolio.portfolioROIPercent ? <NumberPourcentDisplay value={portfolio.portfolioROIPercent}  /> : <NumberPourcentDisplay value={0}  />}</div>
        <div className="list-disc text-lg text-white">Profit ou Perte : <NumberDisplay value={portfolio.profitAndLossRounded} /></div>
    </div>
  );
};

export default CardGlobalPortfolio;