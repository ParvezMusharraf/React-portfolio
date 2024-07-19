import React from 'react';
import './skills.scss'
import { useEffect,useRef } from 'react';
import {motion,useInView,useAnimation } from "framer-motion";

const skills = [
  { logo: <i class="fa-brands fa-html5" style={{color:"rgb(255 133 59)",fontSize:"50px"}}></i>, name: 'Html', rating: 4 },
  { logo: <i class="fa-brands fa-css3" style={{color:"#2b7cf2",fontSize:"50px"}}></i>, name: 'Css', rating: 4 },
  { logo: <i class="fa-brands fa-js" style={{color:"#FFD43B",fontSize:"50px"}}></i>, name: 'Javascript', rating: 4 },
  { logo: <i class="fa-brands fa-react" style={{color:"rgb(48 224 220)",fontSize:"50px"}}></i>, name: 'React', rating: 4 },
  { logo: <i class="fa-brands fa-bootstrap" style={{color:"rgb(59 95 255)",fontSize:"50px"}}></i>, name: 'Bootstrap', rating: 4 },
  { logo: <i class="fa-solid fa-code-pull-request" style={{color:"#86b7fe",fontSize:"50px"}}></i>, name: 'RestApi', rating: 3 },
  { logo: <i class="fa-brands fa-node" style={{color:"#74d922",fontSize:"50px"}}></i>, name: 'NodeJs', rating: 3 },
  { logo: <i class="fa-brands fa-node-js" style={{color:"rgb(84 76 49)",fontSize:"50px"}}></i>, name: 'ExpressJs', rating: 3 },
  { logo: <i class="fa-brands fa-mdb" style={{color:"#3d4509",fontSize:"50px"}}></i>, name: 'MongoDb', rating: 3 },
  // Add more skills as needed
];

const SkillBox = ({ logo, name, rating }) => (
  <div className="skill-box">
    {logo}
    <div className="skill-name">{name}</div>
    <div className="skill-rating">{'★'.repeat(rating)}</div>
  </div>
);

export default function SkillsSection() {

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
    <div className="SkillsSection" id='SkillsSection'>
      <section className='Projects-section'>
        <motion.div ref={ref} className="heading d-flex justify-content-center align-items-center "
              variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1, y:0}
              }}
              initial="hidden"
                      animate={mainControls}
                      transition={{duration:0.5,delay:0.34}}>
          Skills
        </motion.div>
        <motion.div  className="skills-container"
         variants={{
          hidden:{opacity:0,y:75},
          visible:{opacity:1, y:0}
        }}
        initial="hidden"
                animate={mainControls}
                transition={{duration:0.5,delay:0.34}}>
          {skills.map((skill, index) => (
            <SkillBox key={index} {...skill} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
