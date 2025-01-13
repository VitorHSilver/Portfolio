import logoLight from './../assets/Portfólio.svg';
import logoDark from './../assets/Portfólio2.svg';
import mobile from './../assets/mobile.svg';
import close from './../assets/clone.svg';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
function NavBar() {
     const { theme } = useContext(ThemeContext);
     const handleScroll = (event, id) => {
          event.preventDefault();
          const element = document.getElementById(id);
          if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
          }
     };
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     const toggleMobileMenu = () => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
     };

     return (
          <div className="font-semibold mt-10 mb-14 max-smartphone:mb-4 max-smallscreen:mb-4 max-smartphone:p-8 max-sm:mr-8">
               <span className="flex justify-end mb-2">
                    <ThemeToggle />
               </span>
               <div className="flex items-center justify-between max-[250px]:pr-2 max-[300px]:w-full ">
                    <img
                         src={theme === 'light' ? logoLight : logoDark}
                         alt="logo"
                         className="mb-2 max-[400px]:justify-self-center"
                    />

                    <button
                         className="block md:hidden p-2 rounded-md focus:outline-none dark:bg-white"
                         onClick={toggleMobileMenu}
                    >
                         <img
                              className="w-6 h-6"
                              src={isMobileMenuOpen ? close : mobile}
                              alt={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                         />
                    </button>
                    <ul
                         id="list"
                         className="hidden  md:flex font-medium gap-4 text-lg max-[600px]:flex-col max-[400px]:m-auto justify-start max-sm:pb-4 max-[300px]:text-sm max-[300px]:pt-4 mb-4 max-smartphone:text-center max-sm:items-center max-lg:m-auto relative"
                    >
                         <li>
                              <a
                                   href="#experience"
                                   onClick={(e) => handleScroll(e, 'experience')}
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition ease-in hover:scale-110 max-smartphone:text-xl"
                                   style={{ '--current': 'var(--hover-color)' }}
                              >
                                   Experiência
                              </a>
                         </li>
                         <li>
                              <a
                                   href="#experience"
                                   onClick={(e) => handleScroll(e, 'experience')}
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition ease-in hover:scale-110 max-smartphone:text-xl"
                                   style={{ '--current': 'var(--hover-color)' }}
                              >
                                   Formação
                              </a>
                         </li>
                         <li>
                              <a
                                   href="#projects"
                                   onClick={(e) => handleScroll(e, 'projects')}
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition ease-in hover:scale-110 max-smartphone:text-xl"
                                   style={{ '--current': 'var(--hover-color)' }}
                              >
                                   Projetos
                              </a>
                         </li>
                         <li>
                              <a
                                   href="#contact"
                                   onClick={(e) => handleScroll(e, 'contact')}
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition ease-in hover:scale-110 max-smartphone:text-xl"
                                   style={{ '--current': 'var(--hover-color)' }}
                              >
                                   Contato
                              </a>
                         </li>
                    </ul>

                    {isMobileMenuOpen && (
                         <ul className="md:hidden flex flex-col items-center gap-4 mt-4">
                              <li>
                                   <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>
                                        Experiência
                                   </a>
                              </li>
                              <li>
                                   <a href="#formation" onClick={(e) => handleScroll(e, 'formation')}>
                                        Formação
                                   </a>
                              </li>
                              <li>
                                   <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
                                        Projetos
                                   </a>
                              </li>
                              <li>
                                   <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                                        Contato
                                   </a>
                              </li>
                         </ul>
                    )}
               </div>
          </div>
     );
}

export default NavBar;
