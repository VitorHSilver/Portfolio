import React from 'react';
import Slider from 'react-slick';
import Report from './../assets/Report.png';
import Receita from './../assets/Receita.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Responsive() {
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
                    <div className="card  p-6 m-2">
                         <a href="https://github.com/VitorHSilver/order-report" className="text-center w-full">
                              <h5 className="text-lg font-semibold mb-2">ReportOrder</h5>
                              <img
                                   className="w-34 h-24 bg-gray-400 transition ease-in hover:scale-95 mb-2 mx-auto"
                                   src={Report}
                                   alt="Report"
                              />
                              <div className="flex flex-col gap-2">
                                   <button className="bg-emerald-900 text-white p-2 rounded">
                                        <a href="https://github.com/VitorHSilver/AnalysisByManufacturer">Github</a>
                                   </button>
                                   <button className="bg-blue-500 text-white p-2 rounded">Hospedado</button>
                              </div>
                         </a>
                    </div>
                    <div className="card  p-6 m-2">
                         <a href="https://github.com/VitorHSilver/order-report" className="text-center w-full">
                              <h5 className="text-lg font-semibold mb-2">Receita</h5>
                              <img
                                   className="w-34 h-24 bg-gray-400 transition ease-in hover:scale-95 mb-2 mx-auto"
                                   src={Receita}
                                   alt="Receita"
                              />
                              <div className="flex flex-col gap-2">
                                   <button className="bg-emerald-900 text-white p-2 rounded">
                                        <a href="https://github.com/VitorHSilver/AnalysisByManufacturer">Github</a>
                                   </button>
                                   <button className="bg-blue-500 text-white p-2 rounded">Hospedado</button>
                              </div>
                         </a>
                    </div>
                    <div>
                         <h3>3</h3>
                    </div>
                    <div>
                         <h3>4</h3>
                    </div>
                    <div>
                         <h3>5</h3>
                    </div>
                    <div>
                         <h3>6</h3>
                    </div>
                    <div>
                         <h3>7</h3>
                    </div>
                    <div>
                         <h3>8</h3>
                    </div>
               </Slider>
          </div>
     );
}

export default Responsive;
