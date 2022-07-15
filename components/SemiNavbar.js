import React from 'react'
import Link from 'next/link';

const SemiNavbar = () => {
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
          <Link href={'/'}><a className="hover:text-gray-900 hidden md:block text-sm font-medium md:text-md">More</a></Link>
        </div>
      </header>
    </>
  )
}

export default SemiNavbar