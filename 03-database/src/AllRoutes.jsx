import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Login from './components/Login'
import Logout from './components/Logout'
import Addproduct from './components/AddProduct'
import PrivatePage from './components/PrivatePgae'

const AllRoutes = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>}>  </Route>
            <Route path='/addProduct' element={<Addproduct/>}>  </Route>
            <Route path='/products' element={
                <PrivatePage>
                    <Products/>
                </PrivatePage>
                }>  </Route>
            <Route path='/login' element={<Login/>}>  </Route>
            <Route path='/logout' element={<Logout/>}>  </Route>
        </Routes>

    </div>
  )
}

export default AllRoutes