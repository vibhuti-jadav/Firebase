import { addDoc, collection, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../services/firebase';

const Addproduct = () => {


    const initialState = {
        image : "",
        category : "",
        price : "",
        title : "",
        description : ""
    }


    const [data,setData] = useState(initialState)

    function handleSubmit(e)
    {
        e.preventDefault();
        addDoc(collection(db, "products"),data);
    }


    function handleChange(e)
    {
        setData({...data,[e.target.name]:e.target.value})
        
    }


    // const {name,category,price,title,description} = data

  return (
    <div>

        <h1>Add Data</h1>

        <form onSubmit={handleSubmit}>
 
            <input type="text" name='image'   placeholder='Image URL' onChange={(e)=>handleChange(e)}/> <br /><br />
            <input type="text" name='category'  placeholder='category'  onChange={(e)=>handleChange(e)}/> <br /><br />
            <input type="text" name='price' placeholder='Price' onChange={(e)=>handleChange(e)} /> <br /><br />
            <input type="text" name='title'  placeholder='title' onChange={(e)=>handleChange(e)}/> <br /><br />
            <input type="text" name='description'  placeholder='description'  onChange={(e)=>handleChange(e)} /> <br /><br />
            <input type="submit" />


        </form>

    </div>
  )
}

export default Addproduct