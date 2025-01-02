import React from 'react';

export function NextArrow(props) {
     const { className, style, onClick } = props;
     return (
          <div
               className={className}
               style={{
                    ...style,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    right: '10px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    zIndex: 2,
                    cursor: 'pointer',
               }}
               onClick={onClick}
          >
               <span style={{ color: 'black', fontSize: '20px' }}></span>
          </div>
     );
}

export function PrevArrow(props) {
     const { className, style, onClick } = props;
     return (
          <div
               className={className}
               style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
               onClick={onClick}
          />
     );
}
