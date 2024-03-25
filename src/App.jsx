import { useState } from 'react'
import './App.css'
import Mentores from './Pages/Mentores'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mentores/>
    </>
  )
}

export default App
