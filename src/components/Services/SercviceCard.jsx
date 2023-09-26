import React from 'react'
import "../Services/services.scss"



const SercviceCard = ({cardItem}) => {
  return (
    <>
       <div  class="col-lg-3 col-md-6">
                <div class="feature_item">
                <img src={cardItem.img} alt="" />
                <h4>{cardItem.titile}</h4>
                <p>{cardItem.discription}</p>
                </div>
            </div>
    </>
  )
}

export default SercviceCard
