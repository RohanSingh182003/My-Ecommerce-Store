import React, { useEffect, useState } from 'react'
import { CarouselData } from './ImageData'
import { GrPrevious , GrNext } from 'react-icons/gr';

const Crousal = () => {
    const [current, setCurrent] = useState(0)
    const length = CarouselData.length
    useEffect(() => {
        setInterval(() => {
            autoChangeSlide()
        }, 10000);
    }, [])
    

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1)
    }
    const autoChangeSlide = () => {
        for (let i = 0; i < length; i++) {
            if(current < length-1){
                setCurrent(current+1)
            }
            else{
                setCurrent(0)
            }
            
        }
    }
    
  return (
    <><style jsx>{`
    .slide{
        opacity:0;
        transition-duration:1s ease;
    }
    .active-slide{
        opacity:0.6; 
        transition-duration:1s;
        transform: scale(1.08);
    }
  `}</style>
    <section className='hidden md:flex relative h-96 pt-4 justify-center items-center md:-mt-12 lg:mt-2'> 
        <GrPrevious className='absolute top-10 md:top-48 text-3xl text-green-600 left-0 cursor-pointer z-10' onClick={prevSlide}/>
         <GrNext className='absolute top-10 md:top-48 text-3xl text-green-600 right-0 cursor-pointer z-10' onClick={nextSlide}/>
         <h1 className=' absolute z-10 text-green-900 text-4xl font-extrabold opacity-80'>Welcome to MyEcommerce Store</h1>
         <p className=' absolute md:px-48 lg:px-64 mt-28 text-green-800 text-center z-10 font-semibold'>My Ecommerce store is Proudly Make in India. Here we have Extra discount for the india customers, because we believe that its our duty to deliver quality products for every Indian at low price</p>
        {CarouselData.map((slide,index) => {
            return  (
                <div className={index == current ? 'active-slide':'slide'} key={index}>
                    {index === current && <img src={slide.image} alt='Loading Data'/>}
                </div>
                )
        })}
        
    </section>
    </>
  )
}

export default Crousal