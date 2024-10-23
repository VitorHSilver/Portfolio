function Experience() {
     return (
          <section aria-label="#experiencia" id="#experiencia" className="grid-cols-2 mt-64 relative">
               <h2 className="text-9xl font-semibold text-gray-300 mb-56 max-sm:text-6xl max-smallscreen:text-5xl">Experiência</h2>
               <div className="w-1/2 flex text-right mb-60 absolute right-4 top-40 max-md:w-full max-md:text-left max-md:pl-4 max-sm:w-full max-sm:top-32">
                    <p className="leading-relaxed max-w-prose relative mb-4">
                         Minha experiência inclui o desenvolvimento de aplicações no back-end utilizando tecnologias
                         como
                         <strong> PHP</strong>,<strong> Laravel </strong> e <strong>Node.js</strong>. No front-end,
                         trabalhei com <strong> JavaScript</strong>, <strong> Vue.js</strong> e
                         <strong> Tailwind CSS</strong>. Além disso, tive a oportunidade de trabalhar com
                         <strong> Power BI</strong>, onde desenvolvi e mantive relatórios e dashboards interativos.
                    </p>
               </div>
               <span className="inline-block mt-8 text-sm text-gray-500 max-smartphone:mt-24">2024</span>
               <div className="bg-slate-100 grid grid-cols-2 p-6   shadow-lg max-lg:w-1/2 absolute max-md:w-full pl-10 max-smartphone:grid-cols-1 max-md:gap-4">
                    <h3 className="text-2xl font-semibold">Exata Tech</h3>
                    <span className="block text-sm font-semibold text-gray-900 mb-4 mt-1">
                         Estagiário em desenvolvimento web
                    </span>
                    <p className="text-gray-600 mb-4 ">
                         Entre minhas principais realizações, desenvolvi um monitor de rede para acompanhar as conexões
                         das aplicações, o que contribuiu para a otimização e manutenção dos sistemas.
                    </p>

                    <ul className="grid grid-cols-3 gap-2 text-sm text-gray-700 max-md:grid-cols-2 ">
                         <li>HTML/CSS</li>
                         <li>JavaScript</li>
                         <li>Vue.js</li>
                         <li>Node.js</li>
                         <li>PHP</li>
                         <li>Laravel</li>
                         <li>MySQL</li>
                         <li>Power BI</li>
                         <li>Git</li>
                    </ul>
               </div>
          </section>
     );
}
export default Experience;
