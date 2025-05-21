
import React, { useState } from 'react'
import './App.css'
import Maincomponent from './main-component'

function App() {
  const [darkMode,setDarkMode] = useState(true)
  function toggleDarkMode(){
    setDarkMode(preMode => !preMode)
  }

  return (
    <>
    <Maincomponent darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

    </>
  )
}

export default App
