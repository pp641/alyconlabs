import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlyconLabsLanding from './AlyconLabsHomePage'

function App() {
  const [count, setCount] = useState(0)

  return <AlyconLabsLanding/>
}

export default App
