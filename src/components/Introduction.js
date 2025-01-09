import React from 'react';
import vitor from './../assets/vitor.png';
function Introduction() {
     return (
          <>
               <main class="py-16 grid grid-cols-custom-layout max-[800px]:grid-cols-2 items-center justify-stretch max-[250px]:grid-cols-1 max-md:gap-x-9  max-smartphone:text-center">
                    <img id='foto' src={vitor} alt="Vitor" className="w-64 max-smallscreen:hidden max-[250px]:hidden" />
                    <div className="flex flex-col  gap-2  leading-3  max-smartphone:p-2 min-[400px]:pl-2">
                         <p className="text-lg mb-2 font-semibold  max-smallscreen:text-2xl ">Olá, Eu Sou!</p>
                         <h1 className="text-8xl max-sm:text-7xl max-smartphone:text-5xl text-crocoGreen font-bold">
                              Vitor Henrique
                         </h1>
                         <h1 className="font-bold text-6xl max-sm:text-5xl max-smartphone:2xl:">
                              Desenvolvedor<br></br>Web
                         </h1>
                    </div>
               </main>
          </>
     );
}

export default Introduction;
