import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Sign from './pages/Sign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div className='mx-w-7xl mt-40 p-10 flex '>
        <Sign/>
        <Login/>
      </div>
    


    </>
  )
}

export default App
