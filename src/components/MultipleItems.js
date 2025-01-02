import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import report from './../assets/Report.png';

function MultipleItems() {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
     };
     return (
          <div className="slider-container">
               <Slider {...settings}>
                    <div className='bg-gray-300/20 flex justify-center'>
                         <a href="https://github.com/VitorHSilver/order-report">
                         <h5 className=''>Report</h5>
                              <img
                                   className="w-24 h-24 bg-gray-400 border border-black rounded-lg transition ease-in hover:scale-95 "
                                   src={report}
                                   alt="Email"
                              ></img>
                         </a>
                    </div>
                    <div>
                         <a href="https://github.com/VitorHSilver/order-report">
                              <img
                                   className="ml-2 w-24 h-24 bg-gray-400 border border-black rounded-lg transition ease-in hover:scale-95"
                                   src={report}
                                   alt="Email"
                              ></img>
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
                    <div>
                         <h3>9</h3>
                    </div>
               </Slider>
          </div>
     );
}

export default MultipleItems;
