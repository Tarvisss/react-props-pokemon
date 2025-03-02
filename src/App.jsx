import React from 'react'
import './App.css'
import Pokedex from './Pokedex.jsx'
import pokemon from "./Pokemon";

function App() {

  return(
    <div>
    <Pokedex pokemon = {pokemon} />
    </div>
  )  
}

export default App
