import React from 'react';
import NumberAnimation from './NumberAnimation';
import { useInView } from 'react-intersection-observer';

function Formation() {
     const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
     });
     return (
          <section
               id="formation"
               className="bg-black dark:bg-gray-100/80 w-full mt-80 py-14 text-gray-100/25 max-sm:mt-[40rem] max-sm:py-0 max-smartphone:mt-[32rem] max-smallscreen:py-0 max-lg:mt-[32rem] max-smallscreen:mt-[20rem]  max-smartphone:p-6 max-md:w-full"
          >
               <div className="p-8">
                    <h2 className="text-9xl max-sm:text-7xl max-smallscreen:text-6xl font-semibold mb-12  max-sm:mt-24  max-smallscreen:mb-[4rem] dark:text-gray-950">
                         Formação
                    </h2>
                    <div className="flex justify-end mt-4">
                         <p className="text-gray-100/75 tracking-wider subpixel-antialiased pr-2  leading-normal mt-12 max-sm:mt-4 text-lg dark:text-gray-900 dark:text-gray-400/50">
                              Minha formação acadêmica foi o <strong>Tecnólogo</strong> feito na <br></br>Universidade
                              Municipal de São Caetano do Sul (<strong>USCS</strong>). <br></br>
                              Além disso me mantenho sempre atualizado com cursos intensivos online.
                         </p>
                    </div>
                    <div className="flex justify-around mt-24 max-lg:gap-1 max-sm:gap-2  max-[smartphone]:gap-1 max-smartphone:grid max-md:">
                         <div
                              id="bloco1"
                              className="grid gap-y-4 bg-bgBlack dark:bg-gray-300/10 rounded-lg p-3 text-center max-sm:border border-gray-50/10 max-md:border max-sm:shadow-none  shadow-sm shadow-slate-50/50 hover:shadow-emerald-300 transition duration-1000 ease-in dark:hover:shadow-black  dark:border  dark:border-gray-400"
                         >
                              <h4
                                   id="bloco1-item"
                                   className="uppercase text-xs text-start text-gray-100/25 dark:text-gray-950/45 dark:font-bold"
                              >
                                   Tecnólogo
                              </h4>
                              <p className="text-gray-100 max-smartphone:text-xl dark:text-gray-900/80 dark:font-bold dark:tracking-tight">
                                   Análise e desenvolvimento de sistemas
                              </p>
                              <p className="text-gray-100/50 dark:text-gray-900/70">
                                   Universidade Municipal de São Caetano do Sul <br></br> (USCS)
                              </p>
                              <p className="text-gray-100/50 text-sm text-end dark:text-gray-950/45 dark:font-bold">
                                   2024
                              </p>
                         </div>

                         <div
                              id="bloco2"
                              className="grid gap-y-4 dark:bg-gray-300/10 bg-bgBlack rounded-lg p-3 text-center max-sm:border border-gray-50/10 max-md:border max-sm:shadow-none  max-smartphone:mt-4 shadow-sm shadow-slate-50/50  hover:shadow-emerald-300  dark:hover:shadow-black  dark:border  dark:border-gray-400 transition duration-1000 ease-in"
                         >
                              <h4
                                   id="bloco2-item"
                                   className="uppercase text-xs text-start text-gray-100/25 dark:text-gray-950/45 dark:font-bold"
                              >
                                   Técnico
                              </h4>
                              <p className="text-gray-100 max-smartphone:text-xl dark:text-gray-900/80 dark:font-bold">
                                   Técnico em informática
                              </p>
                              <p className="text-gray-100/50 dark:text-gray-900/70">
                                   Serviço Nacional de Aprendizagem Comercial<br></br> (SENAC)
                              </p>
                              <p className="text-gray-100/50 text-sm text-end dark:text-gray-950/45 dark:font-bold">
                                   2022
                              </p>
                         </div>
                    </div>
                    <div className="mt-24">
                         <h3 className="text-gray-100/50 text-5xl font-semibold text-center max-sm:mb-10 max-smallscreen:text-4xl max-sm:text-4xl dark:text-gray-950">
                              Cursos
                         </h3>
                         <div ref={ref} className="flex flex-col items-center mt-8 text-center ">
                              <div className="grid grid-cols-2 gap-4 w-3/4">
                                   <p className="text-gray-100 max-smartphone:text-start max-md:text-start max-sm:text-base dark:text-gray-500/50">
                                        UX Design & UI Design
                                   </p>
                                   <p className="max-smartphone:text-end max-sm:text-sm inline-flex items-center justify-center dark:text-gray-950 dark:font-medium">
                                        {inView && <NumberAnimation n={34} />}h
                                   </p>
                              </div>
                              <div className="grid grid-cols-2 gap-4 w-3/4 mt-4 max-sm:mb-24">
                                   <p className="text-gray-100 max-smartphone:text-start max-md:text-start max-sm:text-base dark:text-gray-500/50">
                                        AWS Academy Cloud Foundations
                                   </p>
                                   <p className="max-smartphone:text-end max-sm:text-sm inline-flex items-center justify-center dark:text-gray-950 dark:font-medium">
                                        {inView && <NumberAnimation n={20} />}h
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Formation;
