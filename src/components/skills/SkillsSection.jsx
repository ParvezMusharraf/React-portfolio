import React from 'react';
import './skills.scss'

const skills = [
  { logo: <i class="fa-brands fa-html5" style={{color:"rgb(255 133 59)",fontSize:"50px"}}></i>, name: 'Html', rating: 4 },
  { logo: <i class="fa-brands fa-css3" style={{color:"#2b7cf2",fontSize:"50px"}}></i>, name: 'Css', rating: 4 },
  { logo: <i class="fa-brands fa-js" style={{color:"#FFD43B",fontSize:"50px"}}></i>, name: 'Javascript', rating: 4 },
  { logo: <i class="fa-brands fa-react" style={{color:"rgb(48 224 220)",fontSize:"50px"}}></i>, name: 'React', rating: 4 },
  { logo: <i class="fa-brands fa-bootstrap" style={{color:"rgb(59 95 255)",fontSize:"50px"}}></i>, name: 'Bootstrap', rating: 4 },
  { logo: <i class="fa-solid fa-code-pull-request" style={{color:"#86b7fe",fontSize:"50px"}}></i>, name: 'RestApi', rating: 3 },
  { logo: <i class="fa-brands fa-node" style={{color:"#74d922",fontSize:"50px"}}></i>, name: 'NodeJs', rating: 3 },
  { logo: <i class="fa-brands fa-node-js" style={{color:"rgb(84 76 49)",fontSize:"50px"}}></i>, name: 'ExpressJs', rating: 3 },
  { logo: <i class="fa-brands fa-mdb" style={{color:"#3d4509",fontSize:"50px"}}></i>, name: 'MongoDb', rating: 3 },
  // Add more skills as needed
];

const SkillBox = ({ logo, name, rating }) => (
  <div className="skill-box">
    {logo}
    <div className="skill-name">{name}</div>
    <div className="skill-rating">{'★'.repeat(rating)}</div>
  </div>
);

export default function SkillsSection() {
  return (
    <div className="SkillsSection" id='SkillsSection'>
      <section className='Projects-section'>
        <div className="heading d-flex justify-content-center align-items-center ">
          Skills
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillBox key={index} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
