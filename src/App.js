
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services';
import Menu from './components/Menu/Menu';
import "./app.scss"
import { useState } from 'react';


function App() {

  const [openMenu,setOpenMenu]=useState(false)
  return (
    <div className='app'>
              <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
              <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <div className="sections">
        <Hero/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
