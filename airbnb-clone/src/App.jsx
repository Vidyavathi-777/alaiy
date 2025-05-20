import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Home from './Home'
import Card from './card'

function App() {
  

  return (
    <div className='app'>
     <Navbar />
     <Home />
     {/* <Card /> */}
    </div>
  )
}

export default App
