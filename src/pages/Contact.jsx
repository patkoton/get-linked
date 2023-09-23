import React, { useState } from 'react'
import FormLayout from '../layout/FormLayout'
import { Link } from 'react-router-dom'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import axios from 'axios';
import { baseUrl } from '../shared'

const icon = [
    { icon: <AiOutlineInstagram />, href: 'https://www.instagram.com/' },
    { icon: <FaXTwitter />, href: 'https://www.twitter.com/' },
    { icon: <FiFacebook />, href: 'https://web.facebook.com/' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/feed/' },
  ]

const Contact = () => {
    const [first_name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
        const url = baseUrl + 'hackathon/contact-form';
        e.preventDefault();
        axios({
        method: "POST",
        url: url,
        data: ''
        }).then((response)=>{
        if (response.data.status === 'success') {
            alert("Message Sent.");
            resetForm();
        } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
        }
        })
    };

    const resetForm = () => {
        setName('')
        setEmail('') 
        setMessage('')
    }

  return (
    <FormLayout>
        <div className='bg-color1 text-white font-montserrat'>
            <div className='flex flex-col lg:flex-row items-center py-10 lg:px-28 lg:py-20'>
                <div className='hidden lg:flex flex-col lg:w-1/2'>
                    <h3 className='text-3xl text-color3 font-semibold'>Get in touch</h3>
                    <p className='text-base font-normal mt-4'>Contact <br /> Information</p>
                    <p className='text-base font-normal mt-4'>27, Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
                    <p className='text-base font-normal mt-4'>Call Us : 07067981819</p>
                    <p className='text-base font-normal mt-4'>We are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
                    <p className='text-base font-normal mt-10 text-color3'>Share on</p>
                    <div className='flex gap-2 mt-4'>
                        {icon.map((item) => (
                            <div className='flex items-center'>
                            <Link
                                to={item.href}
                                className=
                                'text-lg text-white font-normal'
                            >
                                {item.icon}
                            </Link>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Contact Form */}
                <div className='flex flex-col lg:w-1/2 lg:bg-color8 lg:shadow lg:shadow-color9 lg:p-14'>
                    <p className='text-color3 font-clash text-xl font-semibold'>Questions or need assistance?</p>
                    <p className='text-color3 font-clash text-xl font-semibold'>Let us know about it!</p>

                    <form action="#" onSubmit={handleSubmit}>
                        <div className="mt-10">
                            <input type="text" 
                                className="shadow-sm shadow-color9 bg-transparent border border-white text-white text-base rounded-sm placeholder:text-white w-full p-2.5"
                                placeholder="Full Name" 
                                value={first_name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                />
                            
                        </div>
                    
                        <div className='mt-10'>
                            <input type="email" 
                                className="shadow-sm shadow-color9 bg-transparent border border-white text-white text-base rounded-sm placeholder:text-white w-full p-2.5" 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                    />
                        </div>

                        <div className='mt-10' >
                            <textarea rows="6" 
                                    className="shadow-sm shadow-color9 bg-transparent border border-white text-white text-base rounded-sm placeholder:text-white w-full p-2.5" 
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    />
                        </div>

                        <div className='flex justify-center mt-10'>
                            <button type="submit" 
                                    className="cursor-pointer border-none rounded bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 outline-none transition-all py-3 px-6 md:px-10 font-montserrat font-normal text-sm md:text-base text-white">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </FormLayout>
  )
}

export default Contact
