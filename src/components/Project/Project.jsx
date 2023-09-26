import React from 'react';
import "./project.scss";
import ProjectData from '../../Data/ProjectData';
import Card from './Card/Card';

export default function Project() {
    
    const projectData = ProjectData
  return (
    <div className="Project" id='Project'>
      <section className='Projects-section'>
          <div className="heading d-flex justify-content-center align-items-center ">
            <h3>Project</h3>
          </div>
          <div className="ProjectCards d-flex justify-content-even">
              {projectData.map((item)=><Card  item={item} />)}
          </div>
      </section>
    </div>
  )
}
