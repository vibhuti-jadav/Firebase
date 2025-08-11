import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addStudent } from '../store/studentThunk';

const AddStudent = () => {

    const [name,setName]=useState("");

    const dispatch = useDispatch();

    console.log("name",name)

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addStudent({name}));
        setName("");
        alert("student added");
    }

  return (
    <>
          <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>submit</button>
      </form>
    
    </>

)
}

export default AddStudent