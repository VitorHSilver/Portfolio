import React from 'react';
import MultipleItems from './MultipleItems';

function Project() {
     return (
          <section id="projects" className="flex flex-col items-center py-20 max-smallscreen:mt-4">
               <h2 className="text-9xl font-semibold text-gray-300 mb-12 max-smartphone:mb-[0rem] max-md:text-7xl max-sm:text-6xl max-smartphone:text-4xl  max-sm:mb-0 max-md:mt-20  max-smallscreen:text-6xl">
                    Projetos
               </h2>
               <div>
                    <div className=" max-w-2xl mt-6 py-28 max-smallscreen:py-10 max-sm:mt-0 max-smallscreen:p-10 max-md:p-10">
                         <MultipleItems />
                    </div>
               </div>
          </section>
     );
}
export default Project;
