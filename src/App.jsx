import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' bg-green-500'>
        <button class="btn btn-secondary">Two</button>
      </div>
      <button class="btn rounded-none px-16">Two</button>
    </>
  )
}

export default App
