import React from 'react';
import './skills.scss'
import { useEffect,useRef } from 'react';
import {motion,useInView,useAnimation } from "framer-motion";

const skills = [
  { logo: <i className="fa-brands fa-html5" style={{color:"rgb(255 133 59)", fontSize:"50px"}}></i>, name: 'HTML', rating: 4 },
  { logo: <i className="fa-brands fa-css3" style={{color:"#2b7cf2", fontSize:"50px"}}></i>, name: 'CSS', rating: 4 },
  { logo: <i className="fa-brands fa-js" style={{color:"#FFD43B", fontSize:"50px"}}></i>, name: 'JavaScript', rating: 4 },
  { logo: <i className="fa-brands fa-react" style={{color:"rgb(48 224 220)", fontSize:"50px"}}></i>, name: 'React', rating: 4 },
  { logo: <i className="fa-brands fa-bootstrap" style={{color:"rgb(59 95 255)", fontSize:"50px"}}></i>, name: 'Bootstrap', rating: 4 },
  { logo: <i className="fa-brands fa-node" style={{color:"#74d922", fontSize:"50px"}}></i>, name: 'Node.js', rating: 3 },
  { logo: <i className="fa-solid fa-server" style={{color:"#444", fontSize:"50px"}}></i>, name: 'Express.js', rating: 3 },
  { logo: <i className="fa-solid fa-code-pull-request" style={{color:"#86b7fe", fontSize:"50px"}}></i>, name: 'REST API', rating: 3 },
  { logo: <i className="fa-brands fa-mdb" style={{color:"#4DB33D", fontSize:"50px"}}></i>, name: 'MongoDB', rating: 3 },
  { logo: <i className="fa-brands fa-js" style={{color:"#3178C6", fontSize:"50px"}}></i>, name: 'TypeScript', rating: 3 },
  { logo: <i className="fa-solid fa-key" style={{color:"#d35400", fontSize:"50px"}}></i>, name: 'JWT', rating: 3 },
  { logo: <i className="fa-brands fa-postman" style={{color:"#FF6C37", fontSize:"50px"}}></i>, name: 'Postman', rating: 3 },
  { logo: <i className="fa-solid fa-file-code" style={{color:"#00bcd4", fontSize:"50px"}}></i>, name: 'Swagger', rating: 3 },
  { logo: <i className="fa-brands fa-uikit" style={{color:"#007FFF", fontSize:"50px"}}></i>, name: 'Material UI', rating: 3 },
  { logo: <i className="fa-solid fa-wind" style={{color:"#38bdf8", fontSize:"50px"}}></i>, name: 'Tailwind CSS', rating: 3 },
  { logo: <i className="fa-brands fa-git-alt" style={{color:"#F1502F", fontSize:"50px"}}></i>, name: 'Git', rating: 3 },
  { logo: <i className="fa-brands fa-bitbucket" style={{color:"#2684FF", fontSize:"50px"}}></i>, name: 'Bitbucket', rating: 3 },
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
