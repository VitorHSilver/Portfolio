import React from 'react';
import git from './../assets/github-logo.png';
import linkedin from './../assets/logotipo-do-linkedin.png';
import mail from './../assets/mail.png';

function Contact() {
     return (
          <section id="contact" className="grid grid-cols-1 md:grid-cols-2 items-center py-52 max-smartphone:py-20 max-smartphone:flex flex-col gap-10">
               <div>
                    <h2 className="text-9xl font-semibold text-gray-300 mb-12 max-smallscreen:mb-[2rem] max-md:text-7xl max-sm:text-6xl max-smartphone:text-4xl max-smallscreen:text-4xl max-sm:mb-0 max-sm:mt-20 max-smallscreen:text-center">
                         Contato
                    </h2>
                    <div className="flex justify-evenly w-full max-w-md mt-6 gap-6 ">
                         <a href="https://github.com/VitorHSilver" target="_blank" rel="noreferrer">
                              <img className="w-12 h-12" src={git} alt="GitHub"></img>
                         </a>
                         <a href="https://www.linkedin.com/in/vitor-hsilver/" target="_blank" rel="noreferrer">
                              <img className="w-12 h-12" src={linkedin} alt="LinkedIn"></img>
                         </a>
                         <a href="mailto:vitor-henrique1996@hotmail.com">
                              <img className="w-12 h-12" src={mail} alt="Email"></img>
                         </a>
                    </div>
               </div>
               <div>
                    <h1 className="text-4xl font-semibold text-gray-300 mb-4 max-smallscreen:text-center">Formulário</h1>
                    <form className="flex flex-col gap-4">
                         <input type="text" placeholder="Nome" className="p-2 border border-gray-300 rounded-md" />
                         <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md" />
                         <textarea
                              placeholder="Mensagem"
                              className="p-2 border border-gray-300 rounded-md"
                              rows="4"
                         ></textarea>
                         <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                              Enviar
                         </button>
                    </form>
               </div>
          </section>
     );
}
export default Contact;
