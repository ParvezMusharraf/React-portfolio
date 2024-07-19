import React from 'react';
import "./project.scss";
import ProjectData from '../../Data/ProjectData';
import Card from './Card/Card';
import { useEffect,useRef } from 'react';
import {motion,useInView,useAnimation } from "framer-motion";

export default function Project() {
    
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
    const projectData = ProjectData
  return (
    <div className="Project" id='Project'>
      <section className='Projects-section'>
          <motion.div ref={ref} className="heading d-flex justify-content-center align-items-center "
           variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1, y:0}
          }}
          initial="hidden"
                  animate={mainControls}
                  transition={{duration:0.5,delay:0.34}}>
            <p className="m-3 fw-bold border rounded p-2">Real Time Project Expireance</p>
          </motion.div>
          <motion.div className="ProjectCards" 
           variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1, y:0}
          }}
          initial="hidden"
                  animate={mainControls}
                  transition={{duration:0.5,delay:0.34}}>
              {projectData.map((item)=><Card  item={item} />)}
          </motion.div>
      </section>
    </div>
  )
}
