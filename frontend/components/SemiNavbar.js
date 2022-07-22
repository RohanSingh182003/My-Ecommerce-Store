import React, { useState } from 'react'
import Link from 'next/link';
import { motion } from "framer-motion"

const SemiNavbar = () => {
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
    hidden:{
      y:-2
    },
    hover: {
      scale: 1.1,
      color: '#0d1a00',
      y:0
    },
    tap: {
      scale: 0.8
    }
  }
  return (
    <>
      <header className="text-green-800 body-font bg-green-50">
        <div className="container mx-auto flex flex-wrap p-3 md:flex-row items-center justify-evenly">
          <Link href={'/fashion'}><motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="hover:text-gray-900 md:ml-12 cursor-pointer text-sm md:text-md font-medium">Fashion</motion.a></Link>
          <Link href={'/grocerry'}><motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="hover:text-gray-900 cursor-pointer text-sm md:text-md font-medium">Grocerry</motion.a></Link>
          <Link href={'/appliances'}><motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="hover:text-gray-900 cursor-pointer text-sm md:text-md font-medium">Appliances</motion.a></Link>
          <Link href={'/electronics'}><motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="hover:text-gray-900 cursor-pointer text-sm font-medium md:text-md">Electronics</motion.a></Link>
          <Link href={'/travel'}><motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="hover:text-gray-900 cursor-pointer hidden md:block text-sm md:text-md font-medium">Travel</motion.a></Link>
          <Link href={'/offers'}><motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="hover:text-gray-900 cursor-pointer hidden md:block text-sm font-medium md:text-md">Top Offer</motion.a></Link>
          <motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} onMouseOver={() => { setDropdown( true ) }} onMouseOut={() => { setDropdown( false ) }} className="hover:text-gray-900 hidden md:block text-sm font-medium md:text-md cursor-pointer">More</motion.a>
          {dropdown && <motion.div
            variants={dropdownVariant}
            initial="hidden"
            animate="visible"
            onMouseOver={() => { setDropdown( true ) }} onMouseOut={() => { setDropdown( false ) }} className='bg-green-50 p-4 absolute top-24 right-16 rounded-md border -mt-2 z-10'>
            <ul className='space-y-2'>
              <Link href={'/'}><motion.li variants={dropdownChild} whileHover="hover" initial="hidden" whileTap="tap" className='cursor-pointer hover:text-gray-900 '>Accessories</motion.li></Link>
              <Link href={'/'}><motion.li variants={dropdownChild} whileHover="hover" initial="hidden" whileTap="tap" className='cursor-pointer hover:text-gray-900 '>Latest Launch</motion.li></Link>
              <Link href={'/'}><motion.li variants={dropdownChild} whileHover="hover" initial="hidden" whileTap="tap" className='cursor-pointer hover:text-gray-900 '>Skin products</motion.li></Link>
              <Link href={'/'}><motion.li variants={dropdownChild} whileHover="hover" initial="hidden" whileTap="tap" className='cursor-pointer hover:text-gray-900 '>Refurbrished</motion.li></Link>
              <Link href={'/'}><motion.li variants={dropdownChild} whileHover="hover" initial="hidden" whileTap="tap" className='cursor-pointer hover:text-gray-900 '>Toys & more</motion.li></Link>
            </ul>
          </motion.div>}
        </div>
      </header>
    </>
  )
}

export default SemiNavbar