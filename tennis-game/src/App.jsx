
import { useState } from 'react'
import './App.css'
import Die from './Die'
import {nanoid} from "nanoid"
import { useEffect } from 'react'
import Confetti from 'react-confetti'

function App() {
   const [dice,setDice] = useState(allNewDice())
   const [tenzies,setTenzies] = useState(false)

   useEffect(()=>{
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
    }
   },[dice])

   function generateNewDice(){
    return {
      value:Math.ceil(Math.random()*6),
      isHeld:false,
      id:nanoid()
    }
   }

  function allNewDice(){
    const newDice = []
    for(let i=0; i<10; i++){
      newDice.push(generateNewDice())
    }
    return newDice
  }
  function rollDice(){
    if(!tenzies){
      setDice(oldDice => oldDice.map(die =>{
        return die.isHeld ? die : generateNewDice()
      }))

    }else{
      setTenzies(false)
      setDice(allNewDice())
    }
  }
  function holdDice(id){
    setDice(oldDice => oldDice.map(die =>{
      return die.id === id ? {...die, isHeld : !die.isHeld} : die
    }))
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)} />)


  return (
    <main className='main'>
      {tenzies && <Confetti /> }
      <div className='heading'>
      <h2>Tenzies</h2>
      <p>Roll until all dice are the same.Click each die to freeze it at its current value between rolls</p>
      </div>
      <div className='die-container'>
          {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
        </button>
    </main>
  
  )
}

export default App
