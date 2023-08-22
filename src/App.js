
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services';
import Menu from './components/Menu/Menu';
import "./app.scss"
import { useState } from 'react';
import {motion} from "framer-motion";


function App() {

  const [openMenu,setOpenMenu]=useState(false)
  return (
    <motion.div className='app'>
              <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
              <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <div className="sections">
        <Hero name={"Parvez Musharraf"} role={"Frontend Developer"}/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
        </div>
    </motion.div>
  );
}

export default App;
