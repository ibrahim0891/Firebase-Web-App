import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Writedata from './componentes/WriteData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Writedata/>
    </>
  )
}

export default App
