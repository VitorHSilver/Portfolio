import React from 'react';

const TypingAnimation = ({ text, interval }) => {
     const [mountedText, setMountedText] = React.useState('');

     React.useEffect(() => {
          let tmpText = '';
          text.split('').forEach((letter, index) => {
               setTimeout(() => {
                    tmpText += letter;
                    setMountedText(tmpText);
               }, interval * index);
          });
     }, [text, interval]);

     return <div className="blinking-underline">{mountedText}</div>;
};

export default TypingAnimation;
