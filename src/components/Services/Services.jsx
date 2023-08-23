import "../Services/services.scss"
import "./../../global.scss";
import { useEffect,useRef } from 'react';
import {motion,useInView,useAnimation } from "framer-motion";


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
                <br /><span> HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT </span></p>
              </div>
            </div>
          </div>
          <div class="row feature_inner" >
            <div  class="col-lg-3 col-md-6">
              <div class="feature_item">
                <img src="https://themewagon.github.io/satner/img/services/s1.png" alt="" />
                <h4>WEB DEVELOPMENT</h4>
                <p>Detail-oriented Front End Developer working with HTML, CSS, Bootstrap, Javascript, JQuery, and React.  </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="feature_item">
                <img src="https://themewagon.github.io/satner/img/services/s2.png" alt="" />
                <h4>UI/UX DESIGN</h4>
                <p>Passion for building beautiful and user-friendly website</p>
              </div>
            </div>
            <div  class="col-lg-3 col-md-6">
              <div class="feature_item">
                <img src="https://themewagon.github.io/satner/img/services/s3.png" alt="" />
                <h4>WEB DESIGN</h4>
                <p>Good Knowladge of color is hope for better attractive designs</p>
              </div>
            </div>
            <div  class="col-lg-3 col-md-6" >
              <div class="feature_item">
                <img src="https://themewagon.github.io/satner/img/services/s4.png" alt="" />
                <h4>REACT DEVELOPEMNT</h4>
                <p>React's component-based architecture allows you to create modular and reusable code that can help you scale your web application.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
