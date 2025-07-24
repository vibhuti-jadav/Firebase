import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../services/firebase'
import { data } from 'react-router'
import { getAuth, signInWithPopup } from 'firebase/auth'

const Login = () => {

    function handleClick()
    {
        const auth = getAuth();
        signInWithPopup(auth,provider)
        .then((res)=>console.log(res))
        .then((data)=>alert("Login...."))
        .catch((err)=>console.log(err))
        
    }

  return (
    <div>
        <h1>Login</h1>
        
        <GoogleButton onClick={handleClick}/>

    </div>
  )
}

export default Login