import React from 'react';
import vitor from './vitor.png';
function Introduction() {
     return (
          <>
               <main class=" grid grid-cols-custom-layout items-center">
                    <img src={vitor} alt="Vitor" className="w-64" />
                    <div className="flex flex-col  gap-2  leading-3  max-smartphone:p-2 ">
                         <p className="text-sm font-semibold">Olá, Eu Sou!</p>
                         <h1 className="text-7xl text-crocoGreen font-bold max-smartphone:text-2xl">Vitor Henrique</h1>
                         <h1 className="font-bold text-6xl max-smartphone:text-2xl">
                              Desenvolvedor<br></br>Back-End
                         </h1>
                         <p className="text-gray-400 text-lg">Santo André</p>
                    </div>
               </main>
          </>
     );
}

export default Introduction;
