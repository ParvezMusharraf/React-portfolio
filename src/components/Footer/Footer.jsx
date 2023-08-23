import '../Footer/footer.scss'
import { useEffect,useRef } from 'react';
import {motion,useInView,useAnimation } from "framer-motion";

export default function Footer() {
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
    <motion.div ref={ref} className='footer'  variants={{
      hidden:{opacity:0,y:75},
      visible:{opacity:1, y:0}
    }}
    initial="hidden"
            animate={mainControls}
            transition={{duration:0.5,delay:0.34}}>
      <div className="heading">
        <h4>Follow Me</h4>
        <i title="Connect" className="fa-solid fa-down-long"></i>
      </div>
      <div className="icons" >
        <a title="Github" href="https://github.com/ParvezMusharraf"><i class="fa-brands fa-github"></i></a>
        <a title="Twitter" href="https://twitter.com/"><i class="fa-brands fa-twitter "></i></a>
        <a title="Linkedin" href="https://www.linkedin.com/in/parvez-musharraf-a94533252/"><i class="fa-brands fa-linkedin"></i></a>
        <a title="Instagram" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
      </div>
      <div className="container main">
      <div className="para d-flex justify-content-center ">
        <p>Hello every one thanks for visiting my portfolio site i made this website with Love and hope that you liked it.</p>
      </div>
      </div>
      <div className="CopyRight">
        &copy; 2023 My Portfolio. All rights reserved.
      </div>
    </motion.div>
  )
}
