import React from 'react'
import client from '../assets/images/cwok_casual_21 1.png'
import Line from '../elements/Line'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} w-3 md:w-4 text-color3 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }
  

const FAQs = () => {
    const [open, setOpen] = React.useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='bg-color1 text-white' id='faqs'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:px-20 py-10 lg:space-x-6'>
            <div className='flex flex-col lg:w-1/2 text-center lg:text-start'>
                <h3 className='font-clash text-xl md:text-3xl font-bold'>Frequently Ask <br /> <span className='text-color3'>Question</span></h3>
                <p className='text-xs md:text-sm font-normal font-montserrat mt-[16px] leading-7 lg:leading-loose lg:pe-12'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                <div className='mt-10 md:pe-10'>
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader className='text-white text-xs md:text-sm font-normal font-montserrat hover:text-white border-color3' onClick={() => handleOpen(1)}>Can I work on a project I started before the hackathon?</AccordionHeader>
                        <AccordionBody>
                        Can I work on a project I started before the hackathon?
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader className='text-white text-xs md:text-sm font-normal font-montserrat hover:text-white border-color3' onClick={() => handleOpen(2)}>
                        What happens if I need help during the hackathon?
                        </AccordionHeader>
                        <AccordionBody>
                        What happens if I need help during the hackathon?
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader className='text-white text-xs md:text-sm font-normal font-montserrat hover:text-white border-color3' onClick={() => handleOpen(3)}>
                        What happens if I don't have an idea for a project?
                        </AccordionHeader>
                        <AccordionBody>
                        What happens if I don't have an idea for a project?
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                        <AccordionHeader className='text-white text-xs md:text-sm font-normal font-montserrat hover:text-white border-color3' onClick={() => handleOpen(3)}>
                        Can I join a team or do I have to come with one?
                        </AccordionHeader>
                        <AccordionBody>
                        Can I join a team or do I have to come with one?
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                        <AccordionHeader className='text-white text-xs md:text-sm font-normal font-montserrat hover:text-white border-color3' onClick={() => handleOpen(3)}>
                        What happens after the hackathon ends
                        </AccordionHeader>
                        <AccordionBody>
                        What happens after the hackathon ends
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                        <AccordionHeader className='text-white text-xs md:text-sm font-normal font-montserrat hover:text-white border-color3' onClick={() => handleOpen(3)}>
                        Can I work on a project I started before the hackathon?
                        </AccordionHeader>
                        <AccordionBody>
                        Can I work on a project I started before the hackathon?
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
            <div className='flex flex-col lg:w-1/2 mt-10 lg:mt-0'>
                <div className='flex justify-center lg:block mb-5'>
                    <div className='w-[327px] lg:w-full'>
                        <img src={client} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
        <Line />
    </div>
  )
}

export default FAQs
