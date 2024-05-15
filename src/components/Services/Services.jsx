import "../Services/services.scss"
import "./../../global.scss";
import { useEffect,useRef } from 'react';
import {motion,useInView,useAnimation } from "framer-motion";
import services from "../../Data/ServiceData";
import SercviceCard from "./SercviceCard";

export default function Services() {

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

   const Cardlist =services.map((cardItem)=><SercviceCard cardItem={cardItem} />)

  return (
    <div className='services' id='services'>
      <section class="features_area">
        <motion.div ref={ref} class="container"  variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1, y:0}
              }}
              initial="hidden"
                      animate={mainControls}
                      transition={{duration:0.5,delay:0.34}}>
          <div class="row justify-content-center mt-2">
            <div class="col-lg-8 text-center align-items-center ">
              <div class="main_title">
                <h3>service offers</h3>
                <p>
                Passion for building beautiful and user-friendly website Using such technologys like
                <br /><span> HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT ,NODE , EXPRESS</span></p>
              </div>
            </div>
          </div>
          <div class="row feature_inner" >
                  {Cardlist}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
