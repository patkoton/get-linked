import { Fragment, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { FaXTwitter, FaLocationDot } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiSolidPhoneCall } from 'react-icons/bi'
import logo from '../assets/images/getlinked.png'
import '../App.css'
import Button from '../elements/Button'

const navigation = [
  { name: 'Timeline', href: '/#timeline' },
  { name: 'Overview', href: '/' },
  { name: 'FAQs', href: '/#faqs' },
  { name: 'Contact', href: '/#contact' },
]
const footer = [
  { name: 'Overview', href: '/' },
  { name: 'Timeline', href: '/#timeline' },
  { name: 'FAQs', href: '/#faqs' },
  { name: 'Register', href: '/register' },
]
const icon = [
  { icon: <AiOutlineInstagram />, href: 'https://www.instagram.com/' },
  { icon: <FaXTwitter />, href: 'https://www.twitter.com/' },
  { icon: <FiFacebook />, href: 'https://web.facebook.com/' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/feed/' },
]

export default function Layout(props) {

  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <>
    {/* NAVBAR */}
    <Disclosure as="nav" className="bg-color1 md:bg-gradient-to-r from-color1 from-20 via-color2 via-35 to-color1 to-45 sticky top-0 z-10 py-5 pt-5 pb-5 md:pb-1 font-inter md:font-montserrat border-b border-navline">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-5 lg:mx-20">
            <div className="relative flex h-6 md:h-20 items-center justify-around">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-from-color3-to-color2 focus:rounded-full focus:p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3BottomRightIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to='/'>
                    <img className="block h-5 md:h-8 w-auto" src={logo} alt="GETLINKED" />
                  </NavLink>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex justify-center items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Medium Device NavLinks */}
                <div className="hidden sm:block md:flex items-center md:space-x-12 lg:space-x-48">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({isActive}) => {
                          return 'px-1 xl:px-2 py-2 rounded-md text-base font-normal' +
                          (isActive ? 'bg-transparent text-white' : 'text-white')
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <div className='md:ml-10'>
                      <Button children='Register' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* Small Device NavLinks */}
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({isActive}) => {
                        return 'block px-3 py-2 rounded-md text-lg font-medium' +
                        (isActive ? 'bg-transparent text-white' : 'text-white')
                    }}
                    >
                        {item.name}
                </NavLink>
              ))}
              <div className='pl-2'>
                <Button children='Contact Us' />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className='bg-current'>
        <div className='max-w-7xl min-h-screen px-5 md:px-10 lg:px-0'>
          {props.children}
        </div>
    </div>



    {/* FOOTER */}
    <footer className='bg-color1 text-white font-montserrat py-10 '>
      <div className='flex flex-col md:flex-row md:space-x-3 lg:space-x-6 px-5 md:px-10 lg:px-20'>
        <div className='flex flex-col md:w-2/4'>
          <Link to='/'>
            <img className="block h-8 w-auto" src={logo} alt="GETLINKED" />
          </Link>
          <p className='text-xs md:text-sm font-normal leading-7 md:leading-loose mt-4'>GetLinked Tech Hacking is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individual in the field of technology.</p>
          <div className='flex items-center space-x-2 mt-8 md:mt-8 mb-10 md:mb-0'>
            <Link to='' className='text-xs md:text-sm font-normal'>Terms of Use</Link>
            <div className='w-[2px] h-6 bg-color3'></div>
            <Link to='' className='text-xs md:text-sm font-normal'>Privacy Policy</Link>
          </div>
        </div>
        <div className='flex flex-col md:w-1/4'>
          <h3 className='text-sm font-semibold text-color3'>Useful Links</h3>
            {footer.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className=
                  'py-2 rounded-md text-xs text-white font-normal'
              >
                {item.name}
              </Link>
            ))}
            <div className='flex items-center gap-1 mt-2 md:mt-6 mb-10 md:mb-0'>
              <p className='text-xs font-normal text-color3'>Follow us</p>
                {icon.map((item) => (
                  <div className='flex items-center'>
                    <Link
                      to={item.href}
                      className=
                        'px-1 text-sm text-white font-normal'
                    >
                      {item.icon}
                    </Link>
                  </div>
                ))}
            </div>
        </div>
        <div className='flex flex-col md:w-1/4 text-xs font-normal'> 
          <h3 className='text-color3 font-semibold text-sm'>Contact Us</h3>  
          <div className='flex items-center gap-1 md:gap-4 mt-4'>
              <p className=''><BiSolidPhoneCall /></p>
              <p>+234 6707653444</p>
          </div> 
          <div className='flex gap-1 md:gap-4 mt-4'>
              <p className=''><FaLocationDot /></p>
              <p>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
          </div> 
        </div>
      </div>
      <p className='text-xs font-normal text-center mt-10'>All rights reserved. © getlinked Ltd.</p>
    </footer>
    </>
  )
};