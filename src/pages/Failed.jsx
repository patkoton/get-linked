import React from 'react'

const Failed = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center font-montserrat text-black'>
        <div className='text-center'>
            <h3 className='text-xl font-semibold'>Some error occured<br /> <span className='text-sm font-normal'>Please try again.</span> </h3>
            <button href='/register' className="cursor-pointer border-none rounded bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 outline-none transition-all py-3 px-6 md:px-10 font-montserrat font-normal text-sm md:text-base text-white w-full mt-5">
                Back
            </button>
        </div>
    </div>
  )
}

export default Failed
