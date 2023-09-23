import React from 'react'
import Button from '../elements/Button'
import person from '../assets/images/08 1.png'
import Line from '../elements/Line'

const Policy = () => {
  return (
    <div className='bg-color1 text-white font-montserrat'>
        <div className='py-10'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:px-20 lg:space-x-10'>
                <div className='flex flex-col lg:w-1/2'>
                    <h3 className='font-clash text-xl md:text-3xl font-bold text-center lg:text-start'>Privacy Policy and <br /> <span className='text-color3'>Terms</span></h3>
                    <p className='text-xs md:text-sm text-darkWhite font-normal mt-[16px] text-center lg:text-start leading-normal md:leading-loose lg:pe-12'>Last updated on September 12, 2023</p>
                    <p className='text-xs md:text-sm font-normal mt-[16px] text-center lg:text-start leading-normal md:leading-loose lg:pe-12'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                    <div className='border border-color3 p-5 md:p-10 mt-6 md:mt-12'>
                        <p className='text-xs md:text-sm text-center md:text-start leading-normal md:leading-loose'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                        <h5 className='text-color3 font-bold text-sm md:text-base mt-5'>Licensing Policy</h5>
                        <p className='font-bold text-xs md:text-sm mt-2'>Here are terms of our Standard License:</p>

                        <div className='flex gap-2 md:gap-4 mt-5'>
                            <div className='w-10 md:w-6 h-4 rounded-[100%] bg-color7 mt-1 md:mt-2'></div>
                            <p className='text-xs md:text-sm font-normal leading-normal md:leading-loose'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                        </div>

                        <div className='flex gap-2 md:gap-4 mt-5'>
                            <div className='w-10 md:w-6 h-4 rounded-[100%] bg-color7 mt-1 md:mt-2'></div>
                            <p className='text-xs md:text-sm font-normal leading-normal md:leading-loose'>You are licensed to use the item available at any free source sites, for your project developement</p>
                        </div>

                        <div className='flex justify-center mt-5'>
                        <Button children='Read More' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center lg:w-1/2 bg-policyImg bg-no-repeat bg-contain mt-10 md:mt-0'>
                    <div className='mt-24 md:mt-48 w-[262px] md:w-full'>
                        <img src={person} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
        <Line />
    </div>
  )
}

export default Policy
