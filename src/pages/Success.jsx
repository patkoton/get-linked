import React from 'react'
import success from '../assets/images/successfully-done-5108472-4288033 1.png'
import successman from '../assets/images/successful-man-3025713-2526911 1.png'

const Success = () => {
  return (
    <div>
        <div className='w-screen h-screen flex justify-center items-center bg-transparent font-montserrat text-black'>
            <div className='w-10/12 md:w-7/12 lg:w-5/12 p-5 md:p-10 text-center border border-color3 rounded-sm'>
                <div className='flex justify-center'>
                    <div className='flex items-center -space-x-20'>
                        <img src={success} alt="" />
                        <img src={successman} alt="" />
                    </div>
                </div>
                <p className='text-xl font-semibold'>Congratulations</p>
                <p className='text-xl font-semibold'>you have successfully Registered!</p>
                <p className='text-xs font normal'>Yes, it was easy and you did it!</p>
                <p className='text-xs font normal'>check your mail box for next step</p>
                <button href='/' className="cursor-pointer border-none rounded bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 outline-none transition-all py-3 px-6 md:px-10 font-montserrat font-normal text-sm md:text-base text-white w-full mt-5">
                        Back
                </button>
            </div>
        </div>
    </div>
  )
}

export default Success
