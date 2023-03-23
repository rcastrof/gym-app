import React from 'react'
import BannerImage from '../assets/images/Gym-structure-1080x675.png'
import Image from 'next/image'


const Banner = () => {


  const handleClick = () => {
    let scroll_to = document.getElementById("precios").offsetTop; 
    window.scrollTo({ behavior: "smooth", top: scroll_to, })
  }

  return (
    <div className='Banner'>
      <h1 className='text-green-600 capitalize font-bold text-5xl pb-10 pt-4'>Gym Plantilla</h1>
      <p className='text-2xl text-emerald-800 pb-10 pt-4'> Titulo generico</p>
      <p className='text-9xl opacity-10 text-green-600 pb-10 pt-4'>Gym Plantilla</p>
      <button  onClick={handleClick} className='bg-green-700 border border-green-900 rounded-md px-2 py-2 ml-60 font-bold text-2xl hover:bg-green-400'>Ver Planes</button>
      <Image src={BannerImage} alt="banner" className='hero-banner-img'></Image>
    </div>
  )
}

export default Banner