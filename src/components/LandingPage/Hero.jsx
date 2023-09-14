import React from 'react';

function Hero() {
  return (
    <>
    <div className="container mx-auto my-16 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      
        <img src="public/oinvestlog.png" className='w-250' alt="" />
        <div>
        <p className="text-white font-thin md:text-2xl mt-12 mx-14 md:ml-14 mb-10 md:text-left">
        O'Invest vous accompagne vers le sommet, vous permettant d'atteindre vos objectifs financiers en toute simplicité
        </p>
        </div>
        <div>
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-4 ml-14 mb-12 rounded">
          Créez votre compte
          </button>
        </div>
  

        
      </div>

      {/* Right Col */}
      <div className="w-full xl:w-3/5 p-12 overflow-hidden">
        <img
          className="mx-auto mb-4 w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 shadow-lg shadow-indigo-500"
          src="public/portfolioview.png"
          alt="app-dashboard-oinvest"
        />
      </div>
      
    </div>
   
    <div>
      
     </div>
     </>
  );
}

export default Hero;
