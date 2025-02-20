import React from 'react';
import Slider from 'react-slick';
import Report from './../assets/Report.png';
import Receita from './../assets/Receita.png';
import Tseek from './../assets/navegador.png';
import NewsTech from './../assets/newsTech.png';
import Api from './../assets/api.png';
import py from './../assets/python.png';
import webSite from './../assets/siteMobile.png';
import java from './../assets/java.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Responsive() {
     const projets = [
          {
               name: 'OrderReport',
               img: Report,
               urlGit: 'https://github.com/VitorHSilver/order-report',
               url: '#',
               description:
                    'Projeto desktop de inserção de dados para relatorio de venda. Utilizando Vue.Js e Electron',
          },
          {
               name: 'NewsTech',
               img: NewsTech,
               urlGit: 'https://github.com/VitorHSilver/NewsTech',
               url: '#',
               description: 'WebSite de noticias tech utilizando VueJS e Laravel11 consumindo API externas.',
          },
          {
               name: 'apiWithGemini',
               img: Api,
               urlGit: 'https://github.com/VitorHSilver/apiWithGemini',
               url: '#',
               description:
                    'Api com conexão ao banco de dados, podendo inserir imagens com descrição feita via IA Gemini',
          },
          {
               name: 'ReceitaBr',
               img: Receita,
               urlGit: 'https://github.com/VitorHSilver/ReceitaBr',
               url: 'https://receita-br.vercel.app/index.html',
               description: 'Um site reunindo de receitas simples de forma minimalista e objetiva. Apenas com CSS',
          },
          {
               name: 'TSeek',
               img: Tseek,
               urlGit: 'https://github.com/TseekPIM/tseek',
               url: '#',
               description: 'Projeto academico de TCC em PHP que age intermediando um player a encontrar uma equipe E-Sport.',
          },
          {
               name: 'AnalysManufact',
               img: py,
               urlGit: 'https://github.com/VitorHSilver/AnalysisByManufacturer',
               url: '#',
               description:
                    'projeto de análise de dados de vendas de carros.lê dados de um Google Sheets e realiza algumas operações de análise',
          },
          {
               name: 'MenuMobile',
               img: webSite,
               urlGit: 'https://vitorhsilver.github.io/Site/',
               url: 'https://vitorhsilver.github.io/webSiteMobile/',
               description: 'Pagina simples mostrando o comportamento do menuMobile',
          },
          {
               name: 'DsList',
               img: java,
               urlGit: 'https://github.com/VitorHSilver/dslist',
               url: '#',
               description: 'A API de sistema de coleção de jogos, podendo ser alterados de ordem ao arrastar.',
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
                              className="card bg-gray-400/10 dark:bg-gray-100/80  max-md:bg-gray-100/10 max-md:border-none  shadow-sm flex flex-col justify-between items-center border-2  border-white dark:border-gray-900  rounded-lg p-6 m-2 max-smartphone:bg-gray-300/10 "
                         >
                              <a href={project.urlGit} className="text-center w-full" target="_blank" rel="noreferrer">
                                   <h5 className="text-lg font-semibold mb-2 text-center max-smallscreen:text-3xl">
                                        {project.name}
                                   </h5>
                                   <p className="text-xs text-jusfify py-4 font-medium itali h-28 max-smallscreen:text-lg">
                                        {project.description}
                                   </p>
                                   {project.img && (
                                        <img
                                             className="w-34 h-24 transition ease-in hover:scale-95 mb-2  mx-auto"
                                             src={project.img}
                                             alt={project.name}
                                        />
                                   )}
                                   <div className="flex flex-col gap-2 w-full max-smartphone:w-1/3 m-auto ">
                                        <a
                                             href={project.urlGit}
                                             target="_blank"
                                             rel="noreferrer"
                                             className="rounded-lg px-4 py-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-green-100 duration-300"
                                        >
                                             Github
                                        </a>
                                        {project.url && project.url !== '#' && (
                                             <a
                                                  href={project.url}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="rounded-lg px-4 py-2 bg-transparent border border-gray-600 hover:bg-gray-700/10 duration-300"
                                             >
                                                  Deploy
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
