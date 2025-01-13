import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './Styles';

const ScrollButton = () => {
     const [visible, setVisible] = useState(false);

     const toggleVisible = () => {
          const scrolled = document.documentElement.scrollTop;

          if (scrolled > 900) {
               setVisible(true);
          } else if (scrolled <= 300) {
               setVisible(false);
          }
     };

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth',
          });
     };

     window.addEventListener('scroll', toggleVisible);

     return (
          <Button>
               <FaArrowCircleUp
                    onClick={scrollToTop}
                    className="text-black mb-4 transition ease-in-out hover:scale-125 duration-150 dark:text-white"
                    style={{ display: visible ? 'inline' : 'none' }}
               />
          </Button>
     );
};

export default ScrollButton;
