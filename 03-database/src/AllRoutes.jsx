import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Login from './components/Login'
import PrivatePage from './components/PrivatePage'
import Addproduct from './components/AddProduct'

const AllRoutes = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>}>  </Route>
            <Route path='/AddProducts' element={<Addproduct/>}>  </Route>
            <Route path='/Products' element={
                <PrivatePage>
                    <Products/>
                </PrivatePage>
                }>  </Route>
            <Route path='/Login' element={<Login/>}>  </Route>
        </Routes>

    </div>
  )
}

export default AllRoutes