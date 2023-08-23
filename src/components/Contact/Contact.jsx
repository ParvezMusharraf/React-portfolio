import '../Contact/contact.scss'
import { useEffect,useRef } from 'react';
import {motion,useInView,useAnimation } from "framer-motion";

export default function Contact() {
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
    <div className='contact' id='contact'>
      <motion.section ref={ref} class="contact_left" id="contact_left"  variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1, y:0}
              }}
              initial="hidden"
                      animate={mainControls}
                      transition={{duration:0.5,delay:0.34}}>
      <h2>Contact Me</h2>
        <section class="Contact_icon">
        <div class="inner_icon">
          <i class="fa-solid fa-phone"></i>
          <p>7020543440</p>
        </div>
        <div class="inner_icon">
          <i class="fa-solid fa-envelope"></i>
          <p>parvezmusharraf61@gmail.com</p>
        </div>
        <div class="inner_icon">
          <i class="fa-sharp fa-solid fa-location-dot"></i>
          <p>VHB colony New tarfail akola,Maharashtra Pin 444001</p>
        </div>
        </section>
      </motion.section>
      <motion.section ref={ref} class="contact_right" id="contact_right"  variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1, y:0}
              }}
              initial="hidden"
                      animate={mainControls}
                      transition={{duration:0.5,delay:0.34}}>
      <form class="contact-form">
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </motion.section>
    </div>
  )
}
