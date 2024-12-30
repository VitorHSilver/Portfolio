import React from 'react';

function Formation() {
     return (
          <section
               id="formacao"
               className="bg-black w-full mt-80 py-14 text-gray-100/25 max-sm:mt-[30rem] max-sm:py-0 "
          >
               <div className="p-8">
                    <h2 className="font-bold text-9xl mb-12 max-smallscreen:mb-[30rem] max-md:text-6xl max-sm:text-5xl max-sm:mt-24 max-smartphone:text-4xl max-smallscreen:text-2xl">
                         Formação
                    </h2>
                    <div className="flex justify-end mt-4">
                         <p className="text-gray-50 tracking-wider subpixel-antialiased pr-2 leading-normal mt-12  max-sm:mt-4">
                              Minha formação acadêmica foi o <strong>Tecnólogo</strong> feito na <br></br>Universidade
                              Municipal de São Caetano do Sul (<strong>USCS</strong>). <br></br>
                              Além disso me mantenho sempre atualizado com cursos intensivos online.
                         </p>
                    </div>
                    <div className="flex justify-around mt-24 max-lg:gap-1 max-sm:gap-2  max-smartphone:gap-1 max-smartphone:grid">
                         <div className="grid bg-bgBlack p-3 text-center border-crocoGreen max-md:border max-sm:border rounded-lg">
                              <h4 className="uppercase text-center text-gray-100/25">Tecnólogo</h4>
                              <p className="text-gray-100">Análise e desenvolvimento de sistemas</p>
                              <p className="text-gray-100/50">
                                   Universidade Municipal de São Caetano do Sul <br></br> (USCS)
                              </p>
                         </div>

                         <div className="grid gap-y-4 bg-bgBlack rounded-lg p-3 text-center max-sm:border border-crocoGreen max-md:border max-sm:shadow-lg shadow-gray-100/50 max-smartphone:mt-4">
                              <h4 className="uppercase text-center text-gray-100/25">Técnico</h4>
                              <p className="text-gray-100">Técnico em informática</p>
                              <p className="text-gray-100/50">
                                   Serviço Nacional de Aprendizagem Comercial<br></br> (SENAC)
                              </p>
                         </div>
                    </div>
                    <div className="mt-24">
                         <h3 className="text-gray-100/50 text-3xl font-semibold text-center max-sm:mb-10 ">Cursos</h3>
                         <div className="flex flex-col items-center mt-8 text-center">
                              <div className="grid grid-cols-2 gap-4 w-3/4">
                                   <p className="text-gray-100">UX Design & UI Design</p>
                                   <p>34h</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4 w-3/4 mt-4 max-sm:mb-24">
                                   <p className="text-gray-100">AWS Academy Cloud Foundations</p>
                                   <p>20h</p>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Formation;
