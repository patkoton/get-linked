import React from 'react'
import cup from '../assets/images/9486889 1.png'
import gold from '../assets/images/gold_medal 1.png'
import silver from '../assets/images/silver_medal 1.png'
import bronze from '../assets/images/bronze_medal 1.png'
import Line from '../elements/Line'

const Prizes = () => {
  return (
    <div className='bg-color1 text-white font-montserrat'>
        <div className='pt-10 pb-20'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:px-20 lg:space-x-6'>
                <div className='flex flex-col lg:w-1/2'>
                    <div className='flex justify-center lg:block mb-12'>
                        <div className='w-[264px] lg:w-full'>
                            <img src={cup} alt="" className='w-full' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:w-1/2 text-center lg:text-start'>
                    <h3 className='font-clash text-xl md:text-3xl font-bold'>Prizes and <br /> <span className='text-color3'>Rewards</span></h3>
                    <p className='text-xs md:text-sm font-normal font-montserrat mt-[16px] leading-7 md:leading-loose lg:pe-12'>Highlights of the prizes or rewards for winners and for participants.</p>
                    <div className='flex flex-row space-x-2 md:space-x-4 mt-20 md:mt-44'>
                        <div className='w-1/3 h-[150px] md:h-[270px] text-center font-montserrat bg-color6 border border-color3 rounded-lg'>
                            <div className='flex justify-center'>
                                <div className='px-4 -mt-9 md:-mt-20'>
                                    <img src={silver} alt="" />
                                </div>
                            </div>
                            <h4 className='text-base md:text-4xl font-bold mt-6'>2nd</h4>
                            <h5 className='text-xs md:text-2xl font-semibold'>Runner</h5>
                            <p className='text-sm md:text-3xl font-bold text-color3 mt-2'>N300,000</p>
                        </div>
                        <div className='w-1/3 h-[160px] md:h-[290px] text-center font-montserrat bg-color5 border border-color2 rounded-lg'>
                            <div className='flex justify-center'>
                                <div className='-mt-14 md:-mt-24'>
                                    <img src={gold} alt="" className='' />
                                </div>
                            </div>
                            <h4 className='text-base md:text-4xl font-bold mt-3'>1st</h4>
                            <h5 className='text-xs md:text-2xl font-semibold'>Runner</h5>
                            <p className='text-sm md:text-3xl font-bold text-color2 mt-5'>N400,000</p>
                        </div>
                        <div className='w-1/3 h-[150px] md:h-[270px] text-center font-montserrat bg-color6 border border-color3 rounded-lg'>
                            <div className='flex justify-center'>
                                <div className='px-4 -mt-9 md:-mt-20'>
                                    <img src={bronze} alt="" />
                                </div>
                            </div>
                            <h4 className='text-base md:text-4xl font-bold mt-6'>3rd</h4>
                            <h5 className='text-xs md:text-2xl font-semibold'>Runner</h5>
                            <p className='text-sm md:text-3xl font-bold text-color3 mt-2'>N150,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Line />
    </div>
  )
}

export default Prizes
