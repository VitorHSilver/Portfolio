import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import git from './../assets/github-logo.png';
import linkedin from './../assets/logotipo-do-linkedin.png';
import mail from './../assets/mail.png';
import MultipleItems from './MultipleItems';

import { NextArrow, PrevArrow } from './CustomArrows';
function Contact() {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
     };
     return (
          <section id="contato" className="flex flex-col items-center py-8">
               <h2 className="text-9xl font-semibold text-gray-300 mb-12 max-smallscreen:mb-[30rem] max-md:text-6xl max-sm:text-5xl max-smartphone:text-4xl max-smallscreen:text-2xl">
                    Contato
               </h2>
               <div>
                    <div className="w-full max-w-md mt-6 py-20">
                         <MultipleItems/>
                    </div>
               </div>
               <div className="flex justify-evenly w-full max-w-md mt-6 gap-6">
                    <a href="https://github.com/VitorHSilver" target="_blank" rel="noreferrer">
                         <img className="w-12 h-12" src={git} alt="GitHub"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/vitor-hsilver/" target="_blank" rel="noreferrer">
                         <img className="w-12 h-12" src={linkedin} alt="LinkedIn"></img>
                    </a>
                    <a href="mailto:vitor-henrique1996@hotmail.com?">
                         <img className="w-12 h-12" src={mail} alt="Email"></img>
                    </a>
               </div>
          </section>
     );
}
export default Contact;
