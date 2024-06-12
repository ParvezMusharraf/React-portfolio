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
        <p className="card-para">{item.TechnologyUsed}</p>
        <div className="buttons">
          <a className="btn btn-primary" href={item.Live}>Live</a>
          <a className="btn btn-secondary" href={item.repoLink}>Repo</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
