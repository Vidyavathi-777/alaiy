import React from 'react'

const Card = ({ img ,rating, country , name , price}) => {
  return (
    <div className='card'>
      <div className='footer'>
        <div className='footer-img'>
          <img src={img} alt="Experience" />
        </div>
        <p>
          <i className="fa-solid fa-star"></i>
          <span className='gray'>{rating}</span>
          <span className='gray'>(6) .</span>
          <span className='gray'>{country}</span>
        </p>
        <p>{name}</p>
        <p><strong>From {price}</strong>/person</p>
      </div>
    </div>
  )
}

export default Card
