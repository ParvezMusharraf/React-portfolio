import './hero.scss'
import { useEffect,useRef } from 'react';
import {motion,useInView,useAnimation } from "framer-motion";

export default function Hero({name,role}) {

  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  
  const mainControls = useAnimation();
  const slidesControls = useAnimation();
  
    useEffect(()=>{
      if(isInView){
        mainControls.start("visible");
        slidesControls.start("visible");
      }
    },)

  return (
    <div className='hero' id='hero'>
      <motion.div ref={ref}   className="text focus-in-expand-fwd" id="text"
      variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1, y:0}
      }}
      initial="hidden"
              animate={mainControls}
              transition={{duration:0.5,delay:0.34}}
      >
        <h2>Hello, My name is</h2>
        <h1>{name}</h1>
        <p>and I am {role} with passion for building beautiful and user-friendly website   . </p>
    </motion.div>
    <motion.div className="right_img" 
     variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1, y:0}
      }}
      initial="hidden"
              animate={mainControls}
              transition={{duration:0.5,delay:0.34}}
              >
    <img src="https://themewagon.github.io/satner/img/banner/home-right.png" alt="Playing Boy"/>
    </motion.div>
    </div>
  )
}
