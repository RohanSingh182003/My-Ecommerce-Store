import React, { useState } from 'react'
import Link from 'next/link';
import { GoSearch } from 'react-icons/go';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { motion } from "framer-motion"

const Navbar = () => {
  const [dropdown, setDropdown] = useState( false )
  const dropdownVariant = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 160
      }
    }
  }
  const dropdownChild = {
    hidden: {
      y: -2
    },
    hover: {
      scale: 1.1,
      color: '#0d1a00',
      y: 0
    },
    tap: {
      scale: 0.8
    }
  }
  return (
    <>
      <header className="text-gray-600 body-font bg-green-500 sticky top-0">
        <div className="container mx-auto flex flex-wrap px-5 py-1 flex-col md:flex-row items-center">
          <Link href='/'><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2 text-xl">myEcommerce</span>
          </a></Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-green-400	flex flex-wrap items-center text-base justify-center">
            <form action="#" className='border text-md md:mx-12 lg:36 rounded-md bg-white'>
              <input type="text" name="search" id="search" className='pl-3 w-72 lg:w-96 focus:outline-none h-8 bg-white' placeholder='Search for products, brands and more' />
              <button type="submit" className='px-2 bg-white'><span className='md-3 bg-white'><GoSearch className='text-xl text-green-500 hover:text-green-700 -mb-1 hover:scale-110' /></span></button>
            </form>
            <div className='my-2'>
              <motion.p whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.8 }} className='font-bold text-gray-50 hover:text-gray-100 cursor-pointer -ml-4 inline-block'>Login</motion.p>
              <motion.p whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.8 }} className='font-bold text-gray-50 hover:text-gray-100 cursor-pointer ml-10 inline-block'>Become a seller</motion.p>
              <motion.p  whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.8 }}  onMouseOver={() => { setDropdown( true ) }} onMouseOut={() => { setDropdown( false ) }} className='font-bold text-gray-50 hover:text-gray-100 cursor-pointer ml-10 inline-block'>More</motion.p>
              {dropdown && <motion.div
                variants={dropdownVariant}
                initial="hidden"
                animate="visible"
                onMouseOver={() => { setDropdown( true ) }} onMouseOut={() => { setDropdown( false ) }} className='bg-green-50 w-fit rounded-md border absolute right-5 lg:top-9 lg:right-48 p-4 z-40'>
                <ul className='space-y-2 z-40'>
                  <Link href={'/'}><motion.li variants={dropdownChild} whileHover="hover" initial="hidden" whileTap="tap" className='cursor-pointer text-slate-700'>24x7 Support</motion.li></Link>
                  <Link href={'/'}><motion.li variants={dropdownChild} whileHover="hover" initial="hidden" whileTap="tap" className='cursor-pointer text-slate-700'>Report bug</motion.li></Link>
                </ul>
              </motion.div>}
            </div>
          </nav>
          <div className="inline-flex items-center text-gray-100 border-0 py-1 px-3 hover:text-gray-200 rounded mt-4 md:mt-0 text-2xl absolute -top-2 right-2 md:top-2 "><BsFillCartCheckFill /><span className='text-xl ml-2'>cart</span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar