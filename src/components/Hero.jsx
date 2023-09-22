import React from 'react'
import chain from '../assets/images/chain-9365116-7621444.png'
import splash from '../assets/images/1f4a5.png'
import sat from '../assets/images/Image 1.png'
import Button from '../elements/Button'
import Line from '../elements/Line'

const Hero = () => {
  return (
    <div className='bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-color2 via-color1 to-color1'>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='flex-col lg:flex lg:w-1/2 relative md:pl-20'>
          <p className='lg:hidden text-white font-montserrat text-base font-bold italic pt-5'>Igniting a Revolution in HR Innovation</p>
          <div className='lg:hidden absolute top-10 right-3 w-[123px] h-[2px] bg-color4'></div>
          <div className='text-3xl md:text-6xl font-clash font-bold text-white lg:pt-20 flex flex-wrap mt-10 lg:mt-0'>
            getlinked Tech <br />Hackathon <span className='text-color3'>1.0</span><img src={chain} alt="" className='w-[32px] h-[32px] md:w-[80px] md:h-[80px]' /><img src={splash} alt="" className='w-[32px] h-[32px] md:w-[80px] md:h-[80px]' />
          </div>
          <p className='text-white md:text-xl font-montserrat font-normal'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          <div className='mt-10 mb-12'>
            <Button children='Register' />
          </div>
          <p className='text-white text-6xl font-normal'><span className='font-unica'>00<sub className='text-sm font-montserrat'>H</sub></span><span className='font-unica'>  00<sub className='text-sm font-montserrat'>M</sub></span><span className='font-unica'>  00<sub className='text-sm font-montserrat'>S</sub></span></p>
        </div>
        <div className='flex-col lg:flex lg:w-1/2 bg-color1 bg-heroImg bg-no-repeat bg-cover relative mt-10 lg:mt-0'>
        <p className='hidden lg:block text-white font-montserrat text-3xl items-end font-bold italic mb-10'>Igniting a Revolution in <span className=''>HR Innovation</span></p>
          <div className='w-[300px] h-[300px] md:w-[600px] md:h-[600px] md:-mt-20'><img src={sat} alt="" /></div>
          <div className='hidden lg:block absolute top-8 right-1 w-[220px] h-[6px] bg-color4'></div>
        </div>
      </div>
      <Line />
    </div>
  )
}

export default Hero
