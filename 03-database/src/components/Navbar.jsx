import React from 'react'
import { data, Link } from 'react-router'
import { auth } from '../services/firebase'
import { signOut } from 'firebase/auth'

const Navbar = () => {

    function handleClick()
    {
        signOut(auth)
        .then((res)=>console.log(res))
        .then((data)=>alert("Logout...."))
        .catch((err)=>console.log(err))
    }

  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>

        <Link to={'/'}> Home </Link>
        <Link to={'/addProduct'}> addProduct </Link>
        <Link to={'/products'}> Products </Link>
        <Link to={'/login'}> Login </Link>
        <button onClick={handleClick}>Logout</button>
    </div>  
  )
}

export default Navbar