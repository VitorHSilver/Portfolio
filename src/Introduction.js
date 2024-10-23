import React from 'react';
import vitor from './vitor.png';
function Introduction() {
     return (
          <>
               <main class=" grid grid-cols-custom-layout max-[800px]:grid-cols-2 items-center justify-stretch">
                    <img src={vitor} alt="Vitor" className="w-64 max-smallscreen:hidden max-[250px]:hidden" />
                    <div className="flex flex-col  gap-2  leading-3  max-smartphone:p-2 min-[400px]:pl-2  ">
                         <p className="text-base font-semibold lg:text-lg md:text-sm sm:text-2x1 ">Olá, Eu Sou!</p>
                         <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-crocoGreen font-bold max-smartphone:text-2xl max-smallscreen:text-1xl ">
                              Vitor Henrique
                         </h1>
                         <h1 className="font-bold text-3xl sm:text-3xl md:text-5xl lg:text-6xl max-smartphone:text-2xl">
                              Desenvolvedor<br></br>Back-End
                         </h1>
                         <p className="text-gray-300 text-lg max-smallscreen:text-sm max-smartphone:text-base lg:text-xl">
                              Santo André
                         </p>
                    </div>
               </main>
          </>
     );
}

export default Introduction;
