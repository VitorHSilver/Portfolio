function NavBar() {
     return (
          <div className="font-semibold mt-10 ">
               <div className="flex items-center justify-between max-md:flex-col ">
                    <img src="./Portifolio.svg" alt="logo" className="mb-2" />
                    <ul className="flex font-medium gap-4 text-lg max-sm:flex-col max-sm:pb-4 max-[300px]:text-sm max-[300px]:pt-4 mb-4">
                         <li>
                              <a
                                   href="#experiencia"
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[#495D3A] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 " 
                              >
                                   Experiência
                              </a>
                         </li>
                         <li>
                              <a
                                   href="#formacao"
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[#495D3A] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                              >
                                   Formação
                              </a>
                         </li>
                         <li>
                              <a
                                   href="#contato"
                                   className="relative inline-block px-2 py-2 no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[#495D3A] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
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
