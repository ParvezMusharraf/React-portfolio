import React from 'react'
import './Card.scss'





const Cards = ({item}) => {
  return (
    <>
    <div className="card mx-5  card-main">
      <div className=" card-img-top h-50 overflow-hidden ">
        <img className='img-thumbnail' src={item.img} alt={item.name} />
      </div>
      <div className="card-body col-12 overflow-hidden ">
        <p className="card-title fw-bold text-wrap" style={{fontSize:"18px"}} >{item.name}</p>
        <p className="techno-used" style={{fontSize:"14px"}}>Technology-Used</p>
        <p className="card-para text-primary">
          {item.TechnologyUsed}
        </p>
      <div className="buttons">
      <a className='btn btn-primary m-2' href={item.Live} >Live</a>
      <a className='btn btn-primary m-2' href={item.repoLink} >Repo</a>
      </div>
      </div>
    </div>
    </>
  )
}

export default Cards
