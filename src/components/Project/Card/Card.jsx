import React from 'react';
import './Card.scss';

const Cards = ({ item }) => {
  return (
    <div className="card-main">
      <div className="card-img">
        <img className="img-fixed" src={item.img} alt={item.name} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="techno-used">Technology Used</p>
        <p className="card-para">
        {item.TechnologyUsed.map(skills => (
                        <span key={skills.id} className='chip'>
                            {skills.name} <i className={skills.icon} style={{ color: skills.color, fontSize: "20px" }}></i>
                        </span>
                    ))}
        </p>
        <div className="buttons">
          <a className="btn btn-primary" href={item.Live}>Live</a>
          <a className="btn btn-secondary" >know More</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
