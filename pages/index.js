import Head from 'next/head'
import Link from 'next/link';
import React from "react";
import { CarouselData } from '../components/ImageData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
  return (
    <>
      <Head>
        <title>MyEcommerce | Buy anything , anytime at low price.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* crousal starts here */}

      <Slider {...settings} className="-z-10">
        {CarouselData.map( ( item, index ) => { return <div key={index}><img src={item.image} /></div> } )}
      </Slider>

      {/* product section starts here */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to our Ecommerce Store</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">My Ecommerce store is Proudly Make in India. Here we have Extra discount for the india customers, because we believe that its our duty to deliver quality products for every Indian at low price.</p>
    </div>
    <div className="flex flex-wrap -m-4 justify-center">
      <div className="lg:w-1/4 sm:w-1/3 p-4 overflow-hidden">
        <div className="flex relative cursor-pointer">
          <img alt="gallery" className="absolute inset-0 w-full h-52 object-cover object-center" src="https://dummyimage.com/600x360"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 h-52 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity">
            <h2 className="tracking-widest text-sm title-font font-medium text-slate-400 mb-1">Catagory Name</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Product Name</h1>
            <p className="leading-relaxed">Description of the product Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4 overflow-hidden">
        <div className="flex relative cursor-pointer">
          <img alt="gallery" className="absolute inset-0 w-full h-52 object-cover object-center" src="https://dummyimage.com/600x360"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 h-52 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity">
            <h2 className="tracking-widest text-sm title-font font-medium text-slate-400 mb-1">Catagory Name</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Product Name</h1>
            <p className="leading-relaxed">Description of the product Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4 overflow-hidden">
        <div className="flex relative cursor-pointer">
          <img alt="gallery" className="absolute inset-0 w-full h-52 object-cover object-center" src="https://dummyimage.com/600x360"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 h-52 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity">
            <h2 className="tracking-widest text-sm title-font font-medium text-slate-400 mb-1">Catagory Name</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Product Name</h1>
            <p className="leading-relaxed">Description of the product Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4 overflow-hidden">
        <div className="flex relative cursor-pointer">
          <img alt="gallery" className="absolute inset-0 w-full h-52 object-cover object-center" src="https://dummyimage.com/600x360"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 h-52 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity">
            <h2 className="tracking-widest text-sm title-font font-medium text-slate-400 mb-1">Catagory Name</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Product Name</h1>
            <p className="leading-relaxed">Description of the product Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4 overflow-hidden">
        <div className="flex relative cursor-pointer">
          <img alt="gallery" className="absolute inset-0 w-full h-52 object-cover object-center" src="https://dummyimage.com/600x360"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 h-52 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity">
            <h2 className="tracking-widest text-sm title-font font-medium text-slate-400 mb-1">Catagory Name</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Product Name</h1>
            <p className="leading-relaxed">Description of the product Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4 overflow-hidden">
        <div className="flex relative cursor-pointer">
          <img alt="gallery" className="absolute inset-0 w-full h-52 object-cover object-center" src="https://dummyimage.com/600x360"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 h-52 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity">
            <h2 className="tracking-widest text-sm title-font font-medium text-slate-400 mb-1">Catagory Name</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Product Name</h1>
            <p className="leading-relaxed">Description of the product Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4 overflow-hidden">
        <div className="flex relative cursor-pointer">
          <img alt="gallery" className="absolute inset-0 w-full h-52 object-cover object-center" src="https://dummyimage.com/600x360"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 h-52 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity">
            <h2 className="tracking-widest text-sm title-font font-medium text-slate-400 mb-1">Catagory Name</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Product Name</h1>
            <p className="leading-relaxed">Description of the product Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/3 p-4 overflow-hidden">
        <div className="flex relative cursor-pointer">
          <img alt="gallery" className="absolute inset-0 w-full h-52 object-cover object-center" src="https://dummyimage.com/600x360"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 h-52 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity">
            <h2 className="tracking-widest text-sm title-font font-medium text-slate-400 mb-1">Catagory Name</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Product Name</h1>
            <p className="leading-relaxed">Description of the product Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
