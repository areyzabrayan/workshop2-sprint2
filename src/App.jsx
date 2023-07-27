import { useState } from 'react'
import Technology from './components/pages/technology/technology'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Technology/>
    </>
  )
}

export default App
