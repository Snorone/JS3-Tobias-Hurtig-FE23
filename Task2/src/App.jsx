import { useState } from 'react'
import './App.css'
import Board from "./Board"

function App() {
  // const [state, setState] = useState()

  return (
    <>
    <header>
      <h1>MineSweeper</h1>
    </header>

    <Board/>

    </>
  )
}

export default App
