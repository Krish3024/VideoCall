import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Room from './Components/Room/Room'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/room/:roomId" element={<Room/>}/>
      </Routes>
    </>
  )
}

export default App
