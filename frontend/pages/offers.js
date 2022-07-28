import React from 'react'
import Link from 'next/link'

const Offers = () => {
    return (
        <>
        <div className="flex">
            <div className="bg-orange-200 w-64 p-2 flex flex-col justify-center items-center rounded-sm">
                <div className='bg-green-100 h-64 w-60'></div>
                <div className='bg-blue-100 h-28 w-60 mt-2 rounded-md flex flex-col items-center'>
                    <h4 className='font-semibold'>Product title</h4>
                    <p className='text-xs text-slate-600'>color1 , color2 , color3</p>
                    <p className='text-xs text-slate-600'>size1 , size2 , size3</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Offers