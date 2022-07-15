import React from 'react'
import Link from 'next/link'

const Fashion = () => {
    return (
        <>
            <div className='flex flex-col px-0 md:px-16 lg:px-24'>

            <Link href='/slug'><div className="w-full h-36 md:h-44 rounded-md my-2 cursor-pointer relative flex">
                    <div className="w-1/3 md:w-1/4 bg-orange-400 h-full rounded-lg hover:scale-110 hover:transition-all absolute z-10"></div>
                    <div className="w-2/3 md:w-3/4 h-full bg-green-50 absolute right-0 border flex flex-col justify-center px-2 md:px-10">
                        <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl'>Product Name <span className='ml-2 md:ml-6 text-sm md:text-lg text-sky-700'>₹Price</span></h2>
                        <p className=''>product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit suscipit, </p>
                        <p className='text-end text-xs text-slate-400 mx-2 absolute bottom-0 right-1 hidden sm:inline-block'>With Love from ,<span className='text-slate-500 font-semibold'> SellorName</span></p>
                    </div>
                </div></Link>              
                
                <Link href='/slug'><div className="w-full h-36 md:h-44 rounded-md my-2 cursor-pointer relative flex">
                    <div className="w-1/3 md:w-1/4 bg-orange-400 h-full rounded-lg hover:scale-110 hover:transition-all absolute z-10"></div>
                    <div className="w-2/3 md:w-3/4 h-full bg-green-50 absolute right-0 border flex flex-col justify-center px-2 md:px-10">
                        <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl'>Product Name <span className='ml-2 md:ml-6 text-sm md:text-lg text-sky-700'>₹Price</span></h2>
                        <p className=''>product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit suscipit, h</p>
                        <p className='text-end text-xs text-slate-400 mx-2 absolute bottom-0 right-1 hidden sm:inline-block'>With Love from ,<span className='text-slate-500 font-semibold'> SellorName</span></p>
                    </div>
                </div></Link>           

                <Link href='/slug'><div className="w-full h-36 md:h-44 rounded-md my-2 cursor-pointer relative flex">
                    <div className="w-1/3 md:w-1/4 bg-orange-400 h-full rounded-lg hover:scale-110 hover:transition-all absolute z-10"></div>
                    <div className="w-2/3 md:w-3/4 h-full bg-green-50 absolute right-0 border flex flex-col justify-center px-2 md:px-10">
                        <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl '>Product Name <span className='ml-2 md:ml-6 text-sm md:text-lg text-sky-700'>₹Price</span></h2>
                        <p className=''>product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit suscipit, a</p>
                        <p className='text-end text-xs text-slate-400 mx-2 absolute bottom-0 right-1 hidden sm:inline-block'>With Love from ,<span className='text-slate-500 font-semibold'> SellorName</span></p>
                    </div>
                </div></Link>          

            </div>
        </>
    )
}

export default Fashion