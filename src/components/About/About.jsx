import "../About/about.scss";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// import profileImage from "../../assets/profile.jpg"; // Add a profile image

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
      {/* Left Section */}
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
        <div className="about_content">
          <div className="text">
            <h2>About Me</h2>
            <p>
              I am Parvez Musharraf, a passionate Software Development Engineer
              at Pixonix Software Technologies. I specialize in **front-end and
              full-stack development**, leveraging technologies like **React.js,
              Next.js, Node.js, Express.js, and MongoDB** to build modern
              applications. My journey started with a **BCA degree in 2022**,
              and since then, I have been continuously learning and growing.
            </p>
            <button className="btn">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
          <img
            src="https://themewagon.github.io/satner/img/banner/home-right.png"
            alt="Profile"
            className="profile_img"
          />
        </div>
      </motion.section>

      {/* Experience Section */}
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
        <div className="experience_container">
          <div className="experience_card">
            <h3>Software Developer</h3>
            <p>Pixonix Software Technologies | Jan 2024 - Present</p>
            <ul>
              <li>
                Developing full-stack applications using **React.js & Next.js**.
              </li>
              <li>Enhancing UI/UX with **Tailwind CSS and Material UI**.</li>
              <li>Developed flexible and reusable React components.</li>
              <li>Integrated API data using Axios for real-time updates.</li>
              <li>Styled UI components using HTML, CSS, and JavaScript.</li>
              <li>Implemented responsive design for various devices.</li>
              <li>Used Figma and draw.io for project workflow management.</li>
            </ul>
            <h2>Company Projects</h2>
            <ul>
              <li>
                <b>Shippyfi:</b> A Next.js shipping application with SQL and
                .NET backend.
              </li>
              <li>
                <b>True Square Feet:</b> A real estate platform using Next.js
                and React.js.
              </li>
              <li>
                <b>CMS:</b> Led React.js frontend for a Compliance Management
                System.
              </li>
              <li>
                <b>BANGUL GOLD:</b> React Native app for live gold price
                streaming.
              </li>
              <li>
                <b>FINAPP:</b> Finance management system using React and .NET.
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
