import React from 'react';
import vitor from './../assets/vitor.png';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
function Introduction() {
     return (
          <>
               <main class="py-16 grid grid-cols-custom-layout max-[800px]:grid-cols-2 items-center justify-stretch max-[250px]:grid-cols-1 max-md:gap-x-9  max-smartphone:text-center max-smartphone:p-10 ">
                    <motion.img
                         id="foto"
                         src={vitor}
                         alt="Vitor"
                         className="w-64 max-smallscreen:hidden max-[250px]:hidden "
                         initial={{ opacity: 0, x: -100 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 1 }}
                    />
                    <div className="flex flex-col  gap-2  leading-3  max-smartphone:p-2 min-[400px]:pl-2 max-md:pr-4">
                         <p className="text-lg mb-2 font-semibold  max-smallscreen:text-2xl ">Olá, Eu Sou!</p>
                         <h1 className="text-8xl max-md:text-6xl max-smartphone:text-5xl text-crocoGreen font-bold dark:text-[#39515C]">
                              Vitor Henrique
                         </h1>
                         <h1 className="font-bold text-6xl max-md:text-4xl max-smartphone:text-2xl">
                              <TypingAnimation text="Desenvolvedor Web" interval={150} />
                         </h1>
                    </div>
               </main>
          </>
     );
}

export default Introduction;
