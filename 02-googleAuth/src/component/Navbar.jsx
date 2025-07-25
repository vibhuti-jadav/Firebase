import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
   
<nav className="bg-gray-700  dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a  className="flex items-center space-x-3 rtl:space-x-reverse">
        <img  className="h-8" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vibhuti</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
       
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

        <Link to={'/'} className='href="#" className="block py-2 px-3 bg-blue-700 rounded-sm md:bg-transparent text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"'>
         Home
        </Link>
        <Link to={'/Products'} className='href="#" className="block py-2 px-3 bg-blue-700 rounded-sm md:bg-transparent text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"'>
         Products
        </Link>
        <Link to={'/Login'} className='href="#" className="block py-2 px-3 bg-blue-700 rounded-sm md:bg-transparent text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"'>
         Login
        </Link>
    
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Logout</button>

      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar