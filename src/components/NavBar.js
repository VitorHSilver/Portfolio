import logo from './../assets/Portfólio.svg';
function NavBar() {
     const handleScroll = (event, id) => {
          event.preventDefault();
          const element = document.getElementById(id);
          if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
          }
     };

     return (
          <div className="font-semibold mt-10 mb-28 max-smartphone:mb-8 max-smallscreen:mb-4 ">
               <div className="flex items-center justify-between max-md:flex-col max-[250px]:pr-2">
                    <img src={logo} alt="logo" className="mb-2" />
                    <ul className="flex font-medium gap-4 text-lg max-sm:flex-col max-sm:pb-4 max-[300px]:text-sm max-[300px]:pt-4 mb-4 ">
                         <li>
                              <a
                                   href="#experiencia"
                                   onClick={(e) => handleScroll(e, 'experiencia')}
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[#495D3A] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition ease-in hover:scale-110"
                              >
                                   Experiência
                              </a>
                         </li>
                         <li>
                              <a
                                   href="#formacao"
                                   onClick={(e) => handleScroll(e, 'formacao')}
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[#495D3A] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition ease-in hover:scale-110"
                              >
                                   Formação
                              </a>
                         </li>
                         <li>
                              <a
                                   href="#projects"
                                   onClick={(e) => handleScroll(e, 'projects')}
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[#495D3A] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition ease-in hover:scale-110"
                              >
                                   Projetos
                              </a>
                         </li>
                         <li>
                              <a
                                   href="#contact"
                                   onClick={(e) => handleScroll(e, 'contact')}
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[#495D3A] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition ease-in hover:scale-110"
                              >
                                   Contato
                              </a>
                         </li>
                    </ul>
               </div>
          </div>
     );
}

export default NavBar;
