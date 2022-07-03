import React from 'react'
import { GoSearch } from 'react-icons/go';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <>
<header className="text-gray-600 body-font bg-green-500">
  <div className="container mx-auto flex flex-wrap px-5 py-1 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">myEcommerce</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <form action="#" className='border text-md md:mx-12 lg:36 rounded-md bg-white'>
      <input type="text" name="search" id="search" className='pl-3 md:w-48 lg:w-96 focus:outline-none h-8 bg-white' placeholder='Search for products, brands and more' />
      <button type="submit" className='px-2 bg-white'><span className='md-3 bg-white'><GoSearch className='text-xl text-green-500 hover:text-green-700'/></span></button>
    </form>
    <span className='font-bold text-gray-50 hover:text-gray-100 cursor-pointer -ml-4'>Login</span>
    <span className='font-bold text-gray-50 hover:text-gray-100 cursor-pointer ml-10'>Become a seller</span>
    <span className='font-bold text-gray-50 hover:text-gray-100 cursor-pointer ml-10'>More</span>
    </nav>
    <div className="inline-flex items-center text-gray-100 border-0 py-1 px-3 hover:text-gray-200 rounded mt-4 md:mt-0 text-2xl"><BsFillCartCheckFill/><span className='text-xl ml-2'>cart</span>
    </div>
  </div>
</header>
    </>
  )
}

export default Navbar