import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import git from './../assets/github-logo.png';
import linkedin from './../assets/logotipo-do-linkedin.png';
import mail from './../assets/mail.png';
import download from './../assets/download-svgrepo-com.svg';

function Contact() {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [message, setMessage] = useState('');

     const handleSubmit = (e) => {
          e.preventDefault();

          const templateParams = {
               from_name: name,
               from_email: email,
               message: message,
          };

          emailjs
               .send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    templateParams,
                    process.env.REACT_APP_EMAILJS_USER_ID
               )
               .then(
                    (response) => {
                         console.log('SUCCESS!', response.status, response.text);
                         setName('');
                         setEmail('');
                         setMessage('');
                    },
                    (error) => {
                         console.log('FAILED...', error);
                    }
               );
     };

     return (
          <section
               id="contact"
               className="grid grid-cols-1 md:grid-cols-2 items-center py-28 max-smartphone:py-20 max-smartphone:flex flex-col gap-10  max-smallscreen:mt-4"
          >
               <div>
                    <h2 className="text-9xl font-semibold text-gray-300 mb-12  max-smallscreen:mb-[2rem] max-smartphone:text-4xl max-md:text-center max-md:text-7xl max-sm:mb-0 max-sm:mt-20 max-smallscreen:text-center max-smartphone:text-center max-smallscreen:text-6xl ">
                         Contato
                    </h2>
                    <div className="flex justify-evenly w-full max-w-md pt-4 gap-6  max-md:py-8 max-smallscreen:py-4 max-md:m-auto ">
                         <a href="https://github.com/VitorHSilver" target="_blank" rel="noreferrer">
                              <img
                                   className="w-12 h-12 transition ease hover:scale-125 duration-300"
                                   src={git}
                                   alt="GitHub"
                              ></img>
                         </a>
                         <a href="https://www.linkedin.com/in/vitor-hsilver/" target="_blank" rel="noreferrer">
                              <img
                                   className="w-12 h-12 transition ease hover:scale-125 duration-300"
                                   src={linkedin}
                                   alt="LinkedIn"
                              ></img>
                         </a>
                         <a href="mailto:vitor-henrique1996@hotmail.com">
                              <img
                                   className="w-12 h-12 transition ease hover:scale-125 duration-300"
                                   src={mail}
                                   alt="Email"
                              ></img>
                         </a>
                         <a   
                              href="./../assets/Vitor_henrique_da_Silva_2025.pdf"
                              download="Vitor_Henrique_da_Silva_Curriculo.pdf"
                              target="_blank"
                              rel="noreferrer"
                         >
                              <img
                                   className="w-12 h-12 transition ease hover:scale-125 duration-300"
                                   src={download}
                                   alt="Download"
                              />
                         </a>
                    </div>
               </div>
               <div>
                    <h1 className="text-5xl font-semibold text-gray-300 mb-4 max-md:text-center  max-smallscreen:text-center  max-smallscreen:m-4">
                         Formulário
                    </h1>
                    <form className="flex flex-col gap-4 max-sm:p-8 max-md:p-4" onSubmit={handleSubmit}>
                         <input
                              type="text"
                              placeholder="Nome"
                              className="p-2 border border-gray-300 rounded-md"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                         />
                         <input
                              type="email"
                              placeholder="Email"
                              className="p-2 border border-gray-300 rounded-md"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                         />
                         <textarea
                              placeholder="Mensagem"
                              className="p-2 border border-gray-300 rounded-md"
                              rows="4"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
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
