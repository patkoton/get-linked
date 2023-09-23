import React from 'react'
import idea from '../assets/images/the big idea 1.png'
import master from '../assets/images/7450159 1.png'
import Line from '../elements/Line'

const About = () => {
  return (
    <div className='bg-color1 text-white py-10'>
        {/* About */}      
        <div className='flex flex-col lg:flex-row lg:items-center lg:px-20 lg:space-x-6'>
            <div className='flex flex-col lg:w-1/2'>
                <div className='flex justify-center lg:block mb-12'>
                    <div className='w-[264px] h-[257px] lg:w-[490px] lg:h-[477px]'>
                        <img src={idea} alt="" className='w-full' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:w-1/2 text-center lg:text-start'>
                <h3 className='font-clash text-xl md:text-3xl font-bold'>Introduction to getlinked <br /> <span className='text-color3'>tech Hackathon 1.0</span></h3>
                <p className='text-xs md:text-sm font-normal font-montserrat mt-[16px] leading-7 md:leading-loose lg:pe-12'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </div>
        <Line />

        {/* Rules and Regulations */}
        <div className='flex flex-col lg:flex-row-reverse lg:items-center lg:px-20 lg:space-x-6'>
            <div className='flex flex-col lg:w-1/2 relative'>
                <div className='flex justify-center lg:block mb-5 z-10'>
                    <div className='w-[264px] h-[257px] lg:w-[490px] lg:h-[477px]'>
                        <img src={master} alt="" className='w-full' />
                    </div>
                </div>
                <div className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full absolute top-[45px] right-[90px] lg:top-20 lg:right-32 bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70'></div>
            </div>
            <div className='flex flex-col lg:w-1/2 text-center lg:text-start'>
                <h3 className='font-clash text-xl md:text-3xl font-bold'>Rules and <br /> <span className='text-color3'>Guidelines</span></h3>
                <p className='text-xs md:text-sm font-normal font-montserrat mt-[16px] leading-7 md:leading-loose lg:pe-12'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </div>
        <Line />
    </div>
  )
}

export default About
