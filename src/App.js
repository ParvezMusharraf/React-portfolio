import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Project from "./components/Project/Project";
import Menu from "./components/Menu/Menu";
import "./app.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import SkillsSection from "./components/skills/SkillsSection";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <motion.div className="app">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <Hero name={"Parvez Musharraf"} role={"Fullstack Developer"} />
        <About />
        <SkillsSection />
        <Project />
        <Services />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
