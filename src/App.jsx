import { useState } from "react"
import AnimalShow from "./AnimalShow"
import './App.css'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'dog', 'cow', 'horse', 'gator']
  const randomIndex = Math.floor(Math.random() * animals.length)
  return animals[randomIndex]
}

export default function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const handleReset = () => {
    setAnimals([])
  }

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button> <br />
      <div className="animal-list">
        {animals.map((animal, index) => (
          <AnimalShow type={animal} key={index} />
        ))}
      </div> <br />
      {animals.length > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  )
}
