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

         
<div className='mt-20 '>
   <form className="max-w-md mx-auto bg-gray-100  rounded-2xl shadow-gray-800 shadow-2xl p-5"  onSubmit={handleSubmit}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="image" id="floating_email"  onChange={(e)=>handleChange(e)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='' required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Image url</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name='price' onChange={(e)=>handleChange(e)} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Price</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name='title'  onChange={(e)=>handleChange(e)}id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter title</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name='category'  onChange={(e)=>handleChange(e)}id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter category</label>
  </div>
 
    <div className="relative z-0 w-full mb-5 group">
        <input  type="text" name='description'   onChange={(e)=>handleChange(e)} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter description</label>
    </div>


  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> 
</div>




{/* 
        <form onSubmit={handleSubmit}>
 
             <input  type="text" name="image"  onChange={(e)=>handleChange(e)} /> <br /><br />
            <input type="text" name='category'  placeholder='category'  onChange={(e)=>handleChange(e)}/> <br /><br />
            <input type="text" name='price' placeholder='Price' onChange={(e)=>handleChange(e)} /> <br /><br />
            <input type="text" name='title'  placeholder='title' onChange={(e)=>handleChange(e)}/> <br /><br />
            <input type="text" name='description'  placeholder='description'  onChange={(e)=>handleChange(e)} /> <br /><br />
            <input type="submit" /> 


        </form> */}

    </div>
  )
}

export default Addproduct