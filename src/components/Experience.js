import React from 'react';

const skills = [
     {
          name: 'HTML/CSS',
          style: 'bg-gray-300/50 text-black font-semibold py-1 w-28 rounded-md text-center max-smartphone:bg-transparent shadow-sm shadow-slate-50/50  hover:shadow-gray-900 transition duration-1000 ease-out',
          svg: require('./../assets/html-5-logo-svgrepo-com.svg').default,
     },
     {
          name: 'JavaScript',
          style: 'bg-gray-300/50 text-black font-semibold py-1 w-28 rounded-md text-center max-smartphone:bg-transparent shadow-sm shadow-slate-50/50  hover:shadow-gray-900 transition duration-1000 ease-out',
          svg: require('./../assets/javascript-svgrepo-com.svg').default,
     },
     {
          name: 'Vue.js',
          style: 'bg-gray-300/50 text-black font-semibold py-1 w-28 rounded-md text-center max-smartphone:bg-transparent shadow-sm shadow-slate-50/50  hover:shadow-gray-900 transition duration-1000 ease-out',
          svg: require('./../assets/vuejs.svg').default,
     },
     {
          name: 'Node.js',
          style: 'bg-gray-300/50 text-black font-semibold py-1 w-28 rounded-md text-center max-smartphone:bg-transparent shadow-sm shadow-slate-50/50  hover:shadow-gray-900 transition duration-1000 ease-out',
          svg: require('./../assets/nodejs.svg').default,
     },
     {
          name: 'PHP',
          style: 'bg-gray-300/50 text-black font-semibold py-1 w-28 rounded-md text-center max-smartphone:bg-transparent shadow-sm shadow-slate-50/50  hover:shadow-gray-900 transition duration-1000 ease-out',
          svg: require('./../assets/php.svg').default,
     },
     {
          name: 'Laravel',
          style: 'bg-gray-300/50 text-black font-semibold py-1 w-28 rounded-md text-center max-smartphone:bg-transparent shadow-sm shadow-slate-50/50  hover:shadow-gray-900 transition duration-1000 ease-out',
          svg: require('./../assets/laravel.svg').default,
     },
     {
          name: 'MySQL',
          style: 'bg-gray-300/50 text-black font-semibold py-1 w-28 rounded-md text-center max-smartphone:bg-transparent shadow-sm shadow-slate-50/50  hover:shadow-gray-900 transition duration-1000 ease-out',
          svg: require('./../assets/mysql.svg').default,
     },
     {
          name: 'Power BI',
          style: 'bg-gray-300/50 text-black font-semibold py-1 w-28 rounded-md text-center max-smartphone:bg-transparent shadow-sm shadow-slate-50/50  hover:shadow-gray-900 transition duration-1000 ease-out',
          svg: require('./../assets/powerbi.svg').default,
     },
     {
          name: 'Git',
          style: 'bg-gray-300/50 text-black font-semibold py-1 w-28 rounded-md text-center max-smartphone:bg-transparent shadow-sm shadow-slate-50/50  hover:shadow-gray-900 transition duration-1000 ease-out',
          svg: require('./../assets/git.svg').default,
     },
];
function experience() {
     return (
          <section
               aria-label="#experiencia"
               id="experiencia"
               className="grid-cols-custom-layout max-smartphone:mt-24  relative  max-smallscreen:mt-24 py-32"
          >
               <h2 className="text-9xl font-semibold text-gray-300 mb-56 max-smallscreen:mb-[30rem] max-md:text-8xl max-sm:text-7xl max-smartphone:text-4xl max-smallscreen:text-2xl">
                    Experiência
               </h2>
               <div className="w-1/2 flex text-right mb-60 absolute right-4 top-40 max-md:w-full max-md:text-left max-md:pl-4 max-sm:w-full max-sm:top-32 max">
                    <p className="leading-relaxed max-w-prose relative  mt-32 max-smallscreen:text-sm max-smallscreen:leading-relaxed subpixel-antialiased ">
                         Minha experiência inclui o desenvolvimento de aplicações no back-end utilizando tecnologias
                         como
                         <strong> PHP</strong>,<strong> Laravel </strong> e <strong>Node.js</strong>. No front-end,
                         trabalhei com <strong> JavaScript</strong>, <strong> Vue.js</strong> e
                         <strong> Tailwind CSS</strong>. Além disso, tive a oportunidade de trabalhar com
                         <strong> Power BI</strong>, onde desenvolvi e mantive relatórios e dashboards interativos.
                    </p>
               </div>
               <span className="inline-block mt-8 text-sm text-gray-500  max-smartphone:mt-96 max-smartphone:mt">
                    2024
               </span>
               <div className="max-smallscreen:bg-transparent max-smallscreen:shadow-none grid grid-cols-2 p-6 shadow-lg max-lg:w-full mr-1 gap-x-1 absolute max-md:w-full pl-10 max-smartphone:grid-cols-1 max-md:gap-4">
                    <h3 className="text-2xl font-semibold">Exata Tech</h3>
                    <span className="block text-sm font-semibold text-gray-900 mb-4 mt-1 uppercase text-center">
                         Estagiário em desenvolvimento web
                    </span>
                    <p className="text-gray-600 mb-4 max-smallscreen:text-sm max-smallscreen:leading-relaxed">
                         Entre minhas principais realizações, desenvolvi um monitor de rede para acompanhar as conexões
                         das aplicações, o que contribuiu para a otimização e manutenção dos sistemas.
                    </p>

                    <ul
                         id="thumb-grid"
                         className="grid grid-cols-3 justify-items-center gap-2 text-sm text-gray-900 max-smartphone:bg-transparent p-3 rounded max-smallscreen:text-xs "
                    >
                         {skills.map((skill, index) => (
                              <li key={index} className={skill.style}>
                                   {skill.svg && <img src={skill.svg} alt={skill.name} className="w-6 h-6 mx-auto " />}
                                   {skill.name}
                              </li>
                         ))}
                    </ul>
               </div>
          </section>
     );
}
export default experience;
