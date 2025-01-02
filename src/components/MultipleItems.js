import React from 'react';
import Slider from 'react-slick';
import Report from './../assets/Report.png';
import Receita from './../assets/Receita.png';
import Tseek from './../assets/navegador.png';
import NewsTech from './../assets/newsTech.png';
import Api from './../assets/api.png';
import py from './../assets/python.png';
import webSite from './../assets/siteMobile.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Responsive() {
     const projets = [
          {
               name: 'ReportOrder',
               img: Report,
               urlGit: 'https://github.com/VitorHSilver/order-report',
               url: '#',
          },
          {
               name: 'NewsTech',
               img: NewsTech,
               urlGit: 'https://github.com/VitorHSilver/NewsTech',
               url: '#',
          },
          {
               name: 'apiWithGemini',
               img: Api,
               urlGit: 'https://github.com/VitorHSilver/apiWithGemini',
               url: '#',
          },
          {
               name: 'ReceitaBr',
               img: Receita,
               urlGit: 'https://github.com/VitorHSilver/ReceitaBr',
               url: 'https://receita-br.vercel.app/index.html',
          },
          {
               name: 'TSeek',
               img: Tseek,
               urlGit: 'https://github.com/TseekPIM/tseek',
               url: '#',
          },
          {
               name: 'AnalyByManufact',
               img: py, // Adicione a imagem do projeto 6 aqui
               urlGit: 'https://github.com/VitorHSilver/AnalysisByManufacturer',
               url: '#',
          },
          {
               name: 'MenuMobile',
               img: webSite, // Adicione a imagem do projeto 7 aqui
               urlGit: 'https://vitorhsilver.github.io/Site/',
               url: 'https://vitorhsilver.github.io/webSiteMobile/',
          },
          {
               name: 'Project 8',
               img: '', // Adicione a imagem do projeto 8 aqui
               urlGit: '#',
               url: '#',
          },
     ];
     var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
                         infinite: true,
                         dots: true,
                    },
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                         initialSlide: 2,
                    },
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    },
               },
          ],
     };
     return (
          <div className="slider-container">
               <Slider {...settings}>
                    {projets.map((project, index) => (
                         <div
                              key={index}
                              className="card bg-gray-400/10 max-md:bg-gray-100/10 max-md:border-none  shadow-sm flex flex-col justify-between items-center border border-gray-50 rounded-lg p-6 m-2"
                         >
                              <a href={project.urlGit} className="text-center w-full" target="_blank" rel="noreferrer">
                                   <h5 className="text-lg font-semibold mb-2 text-center">{project.name}</h5>
                                   {project.img && (
                                        <img
                                             className="w-34 h-24 transition ease-in hover:scale-95 mb-2  mx-auto"
                                             src={project.img}
                                             alt={project.name}
                                        />
                                   )}
                                   <div className="flex flex-col gap-2 w-full">
                                        <a
                                             href={project.urlGit}
                                             target="_blank"
                                             rel="noreferrer"
                                             className="bg-emerald-600 hover:bg-emerald-800 transition ease-in-out duration-700   hover:scale-105 text-white p-2 rounded text-center"
                                        >
                                             Github
                                        </a>
                                        {project.url && project.url !== '#' && (
                                             <a
                                                  href={project.url}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="bg-blue-500 text-white p-2 rounded text-center"
                                             >
                                                  Site
                                             </a>
                                        )}
                                   </div>
                              </a>
                         </div>
                    ))}
               </Slider>
          </div>
     );
}

export default Responsive;
