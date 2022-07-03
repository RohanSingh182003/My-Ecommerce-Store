import React, { useState } from 'react'
import { CarouselData } from './ImageData'
import { GrPrevious , GrNext } from 'react-icons/gr';

const Crousal = () => {
    const [current, setCurrent] = useState(0)
    const length = CarouselData.length

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1)
    }
  return (
    <><style jsx>{`
    .slide{
        opacity:0;
        transition-duration:1s ease;
    }
    .active-slide{
        opacity:1;
        transition-duration:1s;
        transform: scale(1.08);
    }
  `}</style>
    <section className='relative flex h-96'> 
        <GrPrevious className='absolute top-48 text-3xl text-green-600 left-2 cursor-pointer z-10' onClick={prevSlide}/>
         <GrNext className='absolute top-48 text-3xl text-green-600 right-2 cursor-pointer z-10' onClick={nextSlide}/>
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