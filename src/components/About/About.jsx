import "../About/about.scss";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slidesControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slidesControls.start("visible");
    }
  }, [isInView, mainControls, slidesControls]);

  return (
    <div className="about" id="about">
      <motion.section
        ref={ref}
        className="about_left"
        id="about-left"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.34 }}
      >
        <h2>About Me</h2>
        <p>
          I recently completed my Bachelor’s degree in Computer Applications
          (BCA) in 2022. I have been working as a Front-End Developer and am
          eager to utilize my skills in a professional setting. I am a quick
          learner, a dedicated team member, and confident in my ability to
          contribute significantly to any web development team. During my tenure
          at Pixonix Software Technologies, I have honed my front-end
          development skills and acquired expertise in HTML, CSS, JavaScript,
          ReactJS, Bootstrap, and Git/GitHub. Additionally, I have expanded my
          skill set to include back-end development with Node.js, Express, and
          MongoDB, thus transitioning into a Full Stack Developer role with
          nearly 6 months of experience. I am excited about the opportunity to
          bring my comprehensive skill set and passion for development to your
          team.
        </p>
        <button className="btn">
          <a href="#contact">Contact now</a>
        </button>
      </motion.section>
      <motion.section
        className="experience"
        id="experience"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={slidesControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2>Experience</h2>
        <div className="experience_item">
          <h3>Front-End Developer at Pixonix Software Technologies</h3>
          <p>January 2023 - Present</p>
          <ul>
            <li>Developed and maintained web applications using ReactJS, HTML, CSS, and JavaScript.</li>
            <li>Collaborated with the design team to create user-friendly interfaces.</li>
            <li>Improved application performance and user experience.</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
