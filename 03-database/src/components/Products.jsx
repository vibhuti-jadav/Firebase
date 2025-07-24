import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { db } from '../services/firebase'
import { data } from 'react-router'
import { collection, getDocs } from 'firebase/firestore'

const Products = () => {

 const [value,setValue] = useState([])

 const arr = Object.values(value)
 console.log(arr)

  function fetchData()
  {
      getDocs(collection(db,"products"))
      .then((res)=>{
        let filterData = res.docs.map((el)=>({...el.data(),id:el.id}))
        console.log(filterData)
        setValue(filterData)
        })
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
    <h1>Product Page</h1>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)', gap:'10px'}}>

      {
          value.map((el)=><div>

            <h2>{el.id}</h2>
            <img src={el.image} alt="" height={200} width={200}/>
            <p>{el.category}</p>
            <p>{el.description}</p>
            <h3>{el.price}</h3>

          </div>)
      }

    </div>
    </>
  )
}

export default Products