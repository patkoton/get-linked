import { Fragment, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/getlinked.png'
import '../App.css'
import Button from '../elements/Button'

const navigation = [
  { name: 'Timeline', href: '/#timeline' },
  { name: 'Overview', href: '/' },
  { name: 'FAQs', href: '/#faqs' },
  { name: 'Contact', href: '/contact' },
]

export default function FormLayout(props) {

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
    <Disclosure as="nav" className="bg-color1 text-white sticky top-0 z-10 py-5 pt-5 pb-5 md:pb-1 font-inter md:font-montserrat border-b border-navline">
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
                          (isActive ? 'bg-transparent bg-gradient-to-r from-color4 via-color3 to-color2 bg-clip-text text-transparent' : 'text-white')
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
                        (isActive ? 'bg-transparent bg-gradient-to-r from-color4 via-color3 to-color2 bg-clip-text text-transparent' : 'text-white')
                    }}
                    >
                        {item.name}
                </NavLink>
              ))}
              <div className='pl-2'>
                <Button children='Register' />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className='bg-color1'>
        <div className='max-w-7xl min-h-screen px-5 md:px-10 lg:px-0'>
          {props.children}
        </div>
    </div>
    </>
  )
};