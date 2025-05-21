import React from 'react'
import image from "../src/troll.png"
const Header = () => {
  return (
    <div>
      <header className='header'>
        <img src={image} className='logo'/>
        <h1>Meme Generator</h1>
        {/* <h4>React practice-project-4</h4> */}
      </header>
    </div>
  )
}

export default Header
