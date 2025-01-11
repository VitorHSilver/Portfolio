import React from 'react';
import { useSpring, animated } from 'react-spring';
function NumberAnimation({ n }) {
     const { number } = useSpring({
          from: { number: 0 },
          number: n,
          delay: 200,
          config: { mass: 1, tension: 10, friction: 10 },
     });
     return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
export default NumberAnimation;
