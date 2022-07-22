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

export async function getServerSideProps(context) {
    let headers = {Authorization:"Bearer 15fab3f4c933c30ed953ef4dbde5dd86de2aa11db843e8de296f1002e0ff209d0050f817831ee551fc4f64bd723f700597dae3428746c1ef90ed90b10627b264f199b729c18d42e79e2dc0ddd4ebdc3de787f222dfd4fd671cc6f843dff5d62311e212f91629a7b8fa91b10d5310501751c759d6d8694c46e6f218f0c23c46c1"}
    let a = await fetch("http://localhost:1337/api/products?populate=*",{headers:headers});
    let products = await a.json();
    return {
      props: {products:products},
    }
  }

export default Fashion