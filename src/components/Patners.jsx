import React from 'react'
import liberty from '../assets/images/Liberty company logo white colour.png'
import liberty2 from '../assets/images/Liberty company logo white.png'
import winwise from '../assets/images/Winwise logo White colour 1.png'
import whisper from '../assets/images/wisper logo white.png'
import vizual from '../assets/images/Vizual Plus.png'
import Line from '../elements/Line'

const Patners = () => {
  return (
    <div className='bg-color1 text-white'>
        <div className='py-10'>
            <h3 className='font-clash text-xl md:text-3xl font-bold text-center'>Partners and Sponsors</h3>
            <p className='hidden md:block md:text-sm font-normal text-center font-montserrat mt-[16px] lg:leading-loose lg:pe-12'>Getlinked Hackathon 1.0 is honored to have the following major <br /> companies as its partners and sponsors </p>
            <div className='flex justify-center'>
                <div className='w-[80%] rounded-sm border border-color3 mt-10'>
                    <div className='grid grid-cols-3 gap-1 md:gap-2 p-5 md:p-28'>
                        <div className='flex justify-center items-center border-r border-b border-color3 p-3 md:p-5 relative'>
                            <div className='w-[31px] md:w-[120px]'>
                                <img src={liberty} alt="" className='w-full' />
                            </div>
                            <div className='absolute -bottom-2 -right-2 md:-bottom-4 md:-right-5 w-5 h-5 md:w-10 md:h-10 rounded-full bg-color1'></div>
                        </div>

                        <div className='flex justify-center items-center border-r border-b border-color3 p-3 md:p-5 relative'>
                            <div className='w-[56px] md:w-[213px]'>
                                <img src={liberty2} alt="" className='w-full' />
                            </div>
                            <div className='absolute -bottom-2 -right-2 md:-bottom-4 md:-right-5 w-5 h-5 md:w-10 md:h-10 rounded-full bg-color1'></div>
                        </div>

                        <div className='flex justify-center items-center border-b border-color3 p-3 md:p-5 relative'>
                            <div className='w-[34px] md:w-[131px]'>
                                <img src={winwise} alt="" className='w-full' />
                            </div>
                            <div className='absolute -bottom-2 -right-2 md:-bottom-4 md:-right-5 w-5 h-5 md:w-10 md:h-10 rounded-full bg-color1'></div>
                        </div>

                        <div className='flex justify-center items-center border-r border-color3 p-3 md:p-5 relative'>
                            <div className='w-[39px] md:w-[147px]'>
                                <img src={whisper} alt="" className='w-full' />
                            </div>
                            <div className='absolute -top-2 -right-2 md:-top-4 md:-right-5 w-5 h-5 md:w-10 md:h-10 rounded-full bg-color1'></div>
                        </div>

                        <div className='flex justify-center items-center border-r border-color3 p-3 md:p-5 relative'>
                            <div className='w-[56px] md:w-[204px]'>
                                <p className='font-typo font-normal text-center text-sm md:text-5xl'>Pay<span className='text-color3'>box</span></p>
                            </div>
                            <div className='absolute -top-2 -right-2 md:-top-4 md:-right-5 w-5 h-5 md:w-10 md:h-10 rounded-full bg-color1'></div>
                        </div>

                        <div className='flex justify-center items-center p-3 md:p-5 relative'>
                            <div className='w-[69px] md:w-[231px]'>
                                <img src={vizual} alt="" className='w-full' />
                            </div>
                            <div className='absolute -top-2 -right-2 md:-top-4 md:-right-5 w-5 h-5 md:w-10 md:h-10 rounded-full bg-color1'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Line />
    </div>
  )
}

export default Patners
