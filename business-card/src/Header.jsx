import React from 'react'
import image from "/home/jtd/Documents/alaiy-practice-projects/business-card/src/assets/profileimg.png"

const Header = () => {
  return (
    <div className='header-container'>
      <div className='img-container'>
        {/* <img src={image} alt="" /> */}
      </div>
      <div className='details'>
        <h2>Laura Smith</h2>
        <p className='job'>Frontend Developer</p>
        <p className='website'>laurasmith.website</p>
      </div>
      <div className='social-buttons'>
        <button className='email-btn'><i class="fa-solid fa-envelope"></i>Email</button>
        <button className='linkedin-btn'><i class="fa-brands fa-linkedin"></i>Linkedin</button>
      </div>
    </div>
  )
}

export default Header
