import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, googleProvider } from '../firebase/firebase';

const SignwithPopUp = () => {

    const [user,setUser]=useState("");

    const [error,setError]=useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(firebaseUser)=>{
            setUser(firebaseUser);
        });
  return ()=> unsubscribe();

    },[])

 const handleSignIn = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    setError("");
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };

  console.log(user)

  return (
     <>
      {error ? <p>{error.message}</p> : null}
      {!user ? (
        <button onClick={handleSignIn}>sign in with google</button>
      ) : (
        <>
          <img src={user.photoURL} alt="file" />

          <br />

          {user.displayName}

          <br />

          <button onClick={handleSignOut}>logout</button>
        </>
      )}
    </>
  )
}

export default SignwithPopUp