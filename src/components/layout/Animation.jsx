import React from 'react'
import { useSpring, animated } from "react-spring";
const Animation = () => {
    const props = useSpring({
        opacity: 1,
        color: "#da7472",
        from: { opacity: 0 },
        delay: "60000"
      });
      return <animated.div style={props}>Bienvenidos</animated.div>;
    }

 
export default Animation ;