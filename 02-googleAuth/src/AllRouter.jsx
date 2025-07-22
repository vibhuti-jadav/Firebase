
import { Route, Routes } from 'react-router'
import Home from './component/Home'
import Products from './component/Products'
import Login from './component/Login'

const AllRouter = () => {
  return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Products' element={<Products/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            
        </>

  )
}

export default AllRouter