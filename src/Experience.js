function Experience() {
     return (
          <section
               aria-label="#experiencia"
               id="#experiencia"
               className="grid-cols-custom-layout mt-64 max-smartphone:mt-24  relative mb-40  max-smallscreen:mt-24  "
          >
               <h2 className="text-9xl font-semibold text-gray-300 mb-56 max-smallscreen:mb-[30rem] max-md:text-8xl max-sm:text-7xl max-smartphone:text-4xl max-smallscreen:text-2xl ">
                    Experiência
               </h2>
               <div className="w-1/2 flex text-right mb-60  absolute right-4 top-40 max-md:w-full max-md:text-left max-md:pl-4 max-sm:w-full max-sm:top-32 max">
                    <p className="leading-relaxed max-w-prose relative mb-4 mt-6 max-smallscreen:text-sm max-smallscreen:leading-relaxed ">
                         Minha experiência inclui o desenvolvimento de aplicações no back-end utilizando tecnologias
                         como
                         <strong> PHP</strong>,<strong> Laravel </strong> e <strong>Node.js</strong>. No front-end,
                         trabalhei com <strong> JavaScript</strong>, <strong> Vue.js</strong> e
                         <strong> Tailwind CSS</strong>. Além disso, tive a oportunidade de trabalhar com
                         <strong> Power BI</strong>, onde desenvolvi e mantive relatórios e dashboards interativos.
                    </p>
               </div>
               <span className="inline-block mt-8 text-sm text-gray-500  max-smartphone:mt-96 max-smartphone:mt">2024</span>
               <div className="bg-slate-100 max-smallscreen:bg-transparent max-smallscreen:shadow-none grid grid-cols-2 p-6 shadow-lg max-lg:w-full mr-1 absolute max-md:w-full pl-10 max-smartphone:grid-cols-1 max-md:gap-4 ">
                    <h3 className="text-2xl font-semibold">Exata Tech</h3>
                    <span className="block text-sm font-semibold text-gray-900 mb-4 mt-1">
                         Estagiário em desenvolvimento web
                    </span>
                    <p className="text-gray-600 mb-4 max-smallscreen:text-sm max-smallscreen:leading-relaxed  ">
                         Entre minhas principais realizações, desenvolvi um monitor de rede para acompanhar as conexões
                         das aplicações, o que contribuiu para a otimização e manutenção dos sistemas.
                    </p>

                    <ul id="thumb-grid" className="grid grid-cols-3 justify-items-center gap-2 shadow-md  text-sm text-gray-900 bg-slate-200/40 max-smartphone:shadow-none max-smartphone:bg-transparent p-3 rounded max-smallscreen:text-xs  ">
                         <li className="bg-gray-300/50 text-black  py-1 w-28 rounded-md text-center max-smartphone:bg-transparent">HTML/CSS</li>
                         <li className="bg-gray-300/50 text-black  py-1 w-28 rounded-md text-center max-smartphone:bg-transparent">JavaScript</li>
                         <li className="bg-gray-300/50 text-black  py-1 w-28 rounded-md text-center max-smartphone:bg-transparent">Vue.js</li>
                         <li className="bg-gray-300/50 text-black  py-1 w-28 rounded-md text-center max-smartphone:bg-transparent">Node.js</li>
                         <li className="bg-gray-300/50 text-black  py-1 w-28 rounded-md text-center max-smartphone:bg-transparent">PHP</li>
                         <li className="bg-gray-300/50 text-black  py-1 w-28 rounded-md text-center max-smartphone:bg-transparent">Laravel</li>
                         <li className="bg-gray-300/50 text-black  py-1 w-28 rounded-md text-center max-smartphone:bg-transparent">MySQL</li>
                         <li className="bg-gray-300/50 text-black  py-1 w-28 rounded-md text-center max-smartphone:bg-transparent">Power BI</li>
                         <li className="bg-gray-300/50 text-black  py-1 w-28 rounded-md text-center max-smartphone:bg-transparent">Git</li>
                    </ul>
               </div>
          </section>
     );
}
export default Experience;
