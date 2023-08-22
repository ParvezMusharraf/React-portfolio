import '../About/about.scss'
import { useEffect,useRef } from 'react';
import {motion,useInView,useAnimation } from "framer-motion";

export default function About() {

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
    <div className='about' id='about'>
      <motion.section ref={ref}  class="about_left " id="about-left"
      variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1, y:0}
      }}
      initial="hidden"
              animate={mainControls}
              transition={{duration:0.5,delay:0.34}}
      >
      <h2>About Me</h2>
      <p>Hello there I have completed my bachlors degree in <strong>BCA</strong> In year 2022 and I am a Front-End
        developer, and I am excited to put my skills to use in professional setting,I am quik learner and a also ready to become a good team member,I am confident that I can be a valuable asset to any web development team. I have expertice in such languages and
        technologys, HTML, Css, javascript, reactjs, Bootstrap, git/github. </p>
      <button className="btn"><a href="#contact">Contact now</a></button>
    </motion.section>
    <motion.section ref={ref} class="about_right " id="about_right"
      variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1, y:0}
      }}
      initial="hidden"
              animate={mainControls}
              transition={{duration:0.5,delay:0.34}}
    >
      <p>html</p>
      <div class="container">
        <div class="skills html"><span>90%</span></div>
      </div>

      <p>CSS</p>
      <div class="container">
        <div class="skills css"> <span>80%</span> </div>
      </div>

      <p>JavaScript</p>
      <div class="container">
        <div class="skills js"> <span>65%</span></div>
      </div>

      <p>React</p>
      <div class="container">
        <div class="skills reactjs "><span>40%</span></div>
      </div>

      <p>Bootstrap</p>
      <div class="container">
        <div class="skills bootstrap "><span>70%</span></div>
      </div>
      <p>Git/Github</p>
      <div class="container">
        <div class="skills git "><span>65%</span></div>
      </div>
    </motion.section>
    </div>
  )
}
