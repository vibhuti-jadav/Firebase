import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './AllRoutes'

function App() {

  return (
    <>
    <Navbar/>
      <hr />
    <AllRoutes/>
    </>
  )
}

export default App
