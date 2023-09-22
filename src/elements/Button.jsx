import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


export default function Button({ children }) {
  const navigate = useNavigate();

  function handleClick() {
    if (children === 'Register') {
      navigate('/register', {replace: true});
    } else if (children === 'Read More') {
      navigate('/', {replace: true});
    } else {
      navigate('/', {replace: true})
    }
  }

  return (
    <button onClick={handleClick} className='cursor-pointer border-none rounded bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 outline-none transition-all py-3 px-6 md:px-10'>
      <p className='font-montserrat font-normal text-sm md:text-base text-white'>{children}</p>
    </button>
  )
}





