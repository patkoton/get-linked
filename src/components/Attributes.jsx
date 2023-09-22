import React from 'react'
import persons from '../assets/images/8046554 1.png'
import star1 from '../assets/images/star pu.png'
import star2 from '../assets/images/star2.png'
import star3 from '../assets/images/star.png'
import Line from '../elements/Line'
import { attributes } from '../data'
import Button from '../elements/Button'

const Attributes = () => {
  return (
    <div className='bg-color1 text-white'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:px-10 py-20 lg:space-x-6'>
            <div className='flex flex-col lg:w-1/2 relative'>
                <div className='flex justify-center lg:block z-10 lg:mt-16'>
                    <div className='w-[332px] lg:w-full'>
                        <img src={persons} alt="" className='w-full' />
                    </div>
                </div>
                <div className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full absolute top-[2px] left-[55px] lg:top-12 lg:left-20 bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70'></div>
                <div className='absolute -top-12 left-28 lg:-top-24 lg:left-28 w-[10px] md:w-[18px]'>
                    <img src={star1} alt="" className='w-full' />
                </div>
                <div className='absolute top-24 left-32 lg:top-64 lg:left-64 w-[12px] md:w-[20px]'>
                    <img src={star2} alt="" className='w-full' />
                </div>
                <div className='absolute bottom-10 left-40 lg:-bottom-10 lg:left-80 w-[8px] md:w-[16px]'>
                    <img src={star3} alt="" className='w-full' />
                </div>
            </div>
            <div className='flex flex-col lg:w-1/2 text-center lg:text-start'>
                <h3 className='font-clash text-xl md:text-3xl font-bold'>Judging Criteria <br /> <span className='text-color3'>Key attributes</span></h3>
                {attributes.map((item) => { 
                    return (
                        <p className='text-xs md:text-base font-normal font-montserrat mt-[16px] leading-7 md:leading-loose lg:pe-12'><span className='text-color4'>{item.section}</span>{item.description}</p>
                    )
                })}
                <div className='flex justify-center lg:block'>
                    <div className='w-[172px] h-[53px] mt-10'>
                        <Button children='Read More' />
                    </div>
                </div>
            </div>
        </div>
        <Line />
    </div>
  )
}

export default Attributes
