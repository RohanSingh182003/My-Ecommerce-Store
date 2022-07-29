import React from 'react'
import Link from 'next/link'

const Fashion = (props) => {
    return (
        <>
            <div className='flex flex-col px-0 md:px-16 lg:px-24'>
            <h1 className='text-5xl font-semibold my-6 mx-auto md:ml-8'>Fashion
            <span className='text-2xl ml-1 md:ml-2 text-slate-500 italic'>Section</span>
            <span className='ml-2 text-sm text-slate-400 block md:inline mt-1 md:mt-0'>Get your fevourite fashion ware now</span></h1>
           {props.products.data.map((item)=>{return  <Link href={`/product/${item.attributes.slug}`}><div className="w-full h-36 md:h-44 rounded-md my-2 cursor-pointer relative flex">
                    <div className="w-1/3 md:w-1/4 bg-cyan-50 h-full rounded-lg hover:scale-110 hover:transition-all absolute z-10">
                        <img className='m-auto object-cover h-32' src={item.attributes.image && item.attributes.image.data.attributes.name}/>
                    </div>
                    <div className="w-2/3 md:w-3/4 h-full bg-green-50 absolute right-0 border flex flex-col justify-center px-2 md:px-10">
                        <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl'>{item.attributes.title}<span className='ml-2 md:ml-6 text-sm md:text-lg text-sky-700'>{item.attributes.price}</span></h2>
                        <p className=''>{item.attributes.description}</p>
                        <p className='text-end text-xs text-slate-400 mx-2 absolute bottom-0 right-1 hidden sm:inline-block'>With Love from ,<span className='text-slate-500 font-semibold'>{item.attributes.sellorName}</span></p>
                    </div>
                </div></Link>  })}             

            </div>
        </>
    )
}


export default Fashion