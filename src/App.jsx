import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Multii from './components/multii/Multii'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Multii />
    </>
  )
}

export default App
