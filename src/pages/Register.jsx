import React, { useState } from 'react'
import FormLayout from '../layout/FormLayout'
import user from '../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png'
import { Link, useNavigate } from 'react-router-dom'
import {
    Checkbox,
    Typography,
  } from "@material-tailwind/react";
import lady from '../assets/images/1f6b6-2640.png'
import gent from '../assets/images/image_processing20200511-10310-13mnlsx.png'
import { baseUrl } from '../shared';


const Register = () => {
  const [team_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [project_topic, setProject] = useState("");
  const [category, setCategory] = useState("");
  const [group_size, setGroup] = useState("");

  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    const url = baseUrl + 'hackathon/registration';
    e.preventDefault();
    try {
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          team_name: team_name,
          email: email,
          phone_number: phone_number,
          project_topic: project_topic,
          category: category,
          group_size: group_size
        }),
      });
      //let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setPhone("");
        setProject("");
        setCategory("");
        setGroup("");
        console.log('SUCCESS!');
        navigate('/success');
      } else {
        console.log('FAILED...');
        navigate('/failed');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormLayout>
        <div className='bg-color1 text-white font-montserrat'>
            <div className='flex flex-col lg:flex-row items-center py-10 lg:pe-20 lg:py-20 lg:space-x-6'>
                <div className='hidden lg:flex flex-col lg:w-1/2'>
                        <div className='md:w-[600px]'>
                            <img src={user} alt="" className='w-full' />
                        </div>
                </div>

                 {/* Contact Form */}
                <div className='flex flex-col lg:w-1/2 lg:bg-color8 lg:shadow lg:shadow-color9 lg:p-14'>
                    <p className='text-color3 font-clash text-xl font-semibold'>Register</p>
                    <div className='flex items-end mt-4'>
                        <p className='font-clash text-xs md:text-sm font-normal'>Be part of this movement!</p>
                        <div className='flex border-b border-color3'>
                            <img src={lady} alt="" />
                            <img src={gent} alt="" />
                        </div>
                    </div>
                    <p className='text-xl md:text-2xl font-normal mt-2.5'>CREATE YOUR ACCOUNT</p>

                    <form className="" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row md:mt-5">
                            <div className="md:w-1/2 md:pr-2 mt-5 md:mt-0">
                                <label for="teamName" 
                                    className="text-white text-sm font-normal">
                                    Team's Name
                                </label>
                                <input type="text" 
                                    className="shadow-sm shadow-color9 bg-transparent border border-white text-white text-base rounded-sm placeholder:text-color10 placeholder:text-xs w-full p-2.5 mt-2.5" 
                                    placeholder="Enter the name of your group"
                                    value={team_name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="md:w-1/2 md:pl-2 mt-5 md:mt-0">
                                <label for="phone" 
                                className="text-white text-sm font-normal">
                                Phone
                                </label>
                                <input type="number" 
                                    className="shadow-sm shadow-color9 bg-transparent border border-white text-white text-base rounded-sm placeholder:text-color10 placeholder:text-xs w-full p-2.5 mt-2.5" 
                                    placeholder="Enter your phone number"
                                    value={phone_number}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:mt-5">
                            <div className="md:w-1/2 md:pr-2 mt-5 md:mt-0 ">
                                <label for="email" 
                                    className="text-white text-sm font-normal">
                                    Email
                                </label>
                                <input type="email" 
                                    className="shadow-sm shadow-color9 bg-transparent border border-white text-white text-base rounded-sm placeholder:text-color10 placeholder:text-xs w-full p-2.5 mt-2.5" 
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="md:w-1/2 md:pl-2 mt-5 md:mt-0">
                                <label for="project" 
                                className="text-white text-sm font-normal">
                                Project Topic
                                </label>
                                <input type="text" 
                                    className="shadow-sm shadow-color9 bg-transparent border border-white text-white text-base rounded-sm placeholder:text-color10 placeholder:text-xs w-full p-2.5 mt-2.5" 
                                    placeholder="What is your group project topic"
                                    value={project_topic}
                                    onChange={(e) => setProject(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:mt-5">
                            <div className="md:w-1/2 md:pr-2 mt-5 md:mt-0 ">
                                <label for="category" 
                                    className="text-white text-sm font-normal">
                                    Category
                                </label>
                                <select className="shadow-sm shadow-color9 bg-transparent border border-white text-white text-base rounded-sm placeholder:text-color10 placeholder:text-xs w-full p-2.5 mt-2.5" 
                                        placeholder="Enter your email address"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        required>
                                    <option className='bg-color1 text-white' value="">Select the Category</option>
                                    <option className='bg-color1 text-white' value="">1</option>
                                    <option className='bg-color1 text-white' value="">2</option>
                                    <option className='bg-color1 text-white' value="">3</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 md:pl-2 mt-5 md:mt-0">
                                <label for="group" 
                                className="text-white text-sm font-normal">
                                Group Size
                                </label>
                                <select className="shadow-sm shadow-color9 bg-transparent border border-white text-white text-base rounded-sm placeholder:text-color10 placeholder:text-xs w-full p-2.5 mt-2.5" 
                                        placeholder=""
                                        value={group_size}
                                        onChange={(e) => setGroup(e.target.value)}
                                        required>
                                    <option className='bg-color1 text-white' value="">Select</option>
                                    <option className='bg-color1 text-white' value="">5</option>
                                    <option className='bg-color1 text-white' value="">10</option>
                                    <option className='bg-color1 text-white' value="">15</option>
                                    <option className='bg-color1 text-white' value="">20</option>
                                </select>
                            </div>
                        </div>
                        <p className='text-color4 italic text-xs mt-5'>Please review your registration details before submitting</p>
                        <Checkbox
                        label={
                            <Typography
                            variant="small"
                            color="gray"
                            className="flex flex-wrap font-normal text-white text-xs"
                            >
                            I agree with the
                            <Link
                                href="#"
                                className="font-medium transition-colors"
                            >
                                &nbsp;Terms and Conditions
                            </Link>
                            &nbsp;and
                            <Link
                                href="#"
                                className="font-medium transition-colors"
                            >
                                &nbsp;Privacy Policy
                            </Link>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                        />
                        <button className="cursor-pointer border-none rounded bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 outline-none transition-all py-3 px-6 md:px-10 font-montserrat font-normal text-sm md:text-base text-white w-full">
                            Register Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </FormLayout>
  )
}

export default Register
