import React, { useState } from 'react'
import Link from 'next/link';

const SemiNavbar = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
        <header className="text-green-800 body-font bg-green-50">
        <div className="container mx-auto flex flex-wrap p-3 md:flex-row items-center justify-evenly">
          <Link href={'/fashion'}><a className="hover:text-gray-900 md:ml-12 text-sm md:text-md font-medium">Fashion</a></Link>
          <Link href={'/grocerry'}><a className="hover:text-gray-900 text-sm md:text-md font-medium">Grocerry</a></Link>
          <Link href={'/appliances'}><a className="hover:text-gray-900 text-sm md:text-md font-medium">Appliances</a></Link>
          <Link href={'/electronics'}><a className="hover:text-gray-900 text-sm font-medium md:text-md">Electronics</a></Link>
          <Link href={'/travel'}><a className="hover:text-gray-900 hidden md:block text-sm md:text-md font-medium">Travel</a></Link>
          <Link href={'/offers'}><a className="hover:text-gray-900 hidden md:block text-sm font-medium md:text-md">Top Offer</a></Link>
          <a onMouseOver={()=>{setDropdown(true)}} onMouseOut={()=>{setDropdown(false)}} className="hover:text-gray-900 hidden md:block text-sm font-medium md:text-md cursor-pointer">More</a>
          {dropdown && <div onMouseOver={()=>{setDropdown(true)}} onMouseOut={()=>{setDropdown(false)}} className='bg-green-50 p-4 absolute top-24 right-16 rounded-md border -mt-2 z-10'>
            <ul className='space-y-2'>
              <Link href={'/'}><li className='cursor-pointer hover:text-gray-900 '>Accessories</li></Link>
              <Link href={'/'}><li className='cursor-pointer hover:text-gray-900 '>Latest Launch</li></Link>
              <Link href={'/'}><li className='cursor-pointer hover:text-gray-900 '>Skin products</li></Link>
              <Link href={'/'}><li className='cursor-pointer hover:text-gray-900 '>Refurbrished</li></Link>
              <Link href={'/'}><li className='cursor-pointer hover:text-gray-900 '>Toys & more</li></Link>
            </ul>
            </div>}
        </div>
      </header>
    </>
  )
}

export default SemiNavbar