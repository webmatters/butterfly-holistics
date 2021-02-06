import { useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  const navLinks = [
    { id: '1', path: '/services', name: 'Services' },
    { id: '2', path: '/appointments', name: 'Appointments' },
    { id: '3', path: '/classes', name: 'Classes' },
    { id: '4', path: '/about', name: 'About' },
    { id: '5', path: '/resources', name: 'Resources' },
    { id: '6', path: '/contact', name: 'Contact' },
  ]

  const renderLinks = () => {
    return navLinks.map(navLink => (
      <Link href={navLink.path} key={navLink.id}>
        <a className="border-transparent text-gray-500 hover:text-primary-light transform hover:scale-105 whitespace-nowrap py-1 px-1 border-b-2 font-medium text-sm lg:text-lg">
          {navLink.name}
        </a>
      </Link>
    ))
  }

  const renderMobileLinks = () => {
    return navLinks.map(navLink => (
      <Link href={navLink.path} key={navLink.id}>
        <span className="border-t border-gray-100 pt-2">
          <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
            <span className="ml-3 text-base font-medium text-gray-900">
              {navLink.name}
            </span>
          </a>
        </span>
      </Link>
    ))
  }

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center  py-4 md:space-x-10">
            {/* Brand logo */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <span className="sr-only">Butterfly Holistics</span>

                  <img
                    className="inline h-20 w-20 mr-3"
                    src="butterfly-logo-icon.png"
                    alt="Butterfly Icon"
                  />
                  <img
                    className="inline h-14 w-auto "
                    src="butterfly-logo-words.png"
                    alt="Butterfly Holistics logo"
                  />
                </a>
              </Link>
            </div>

            {/* hamburger menu to open Mobile Nav */}
            <div className="-mr-2 -my-2 sm:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/*
        Mobile menu, show/hide based on mobile menu state.
    
        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      */}
            <Transition
              show={navOpen}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                          <a>
                            <span className="sr-only">Butterfly Holistics</span>

                            <img
                              className="inline h-20 w-20 mr-3"
                              src="butterfly-logo-icon.png"
                              alt="Butterfly icon"
                            />
                            <img
                              className="inline h-14 w-auto "
                              src="butterfly-logo-words.png"
                              alt="Butterfly Holistics logo"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="-mr-2">
                        <button
                          onClick={() => setNavOpen(!navOpen)}
                          type="button"
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                          <span className="sr-only">Close menu</span>
                          {/* Heroicon name: x */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">{renderMobileLinks()}</nav>
                    </div>
                  </div>

                  {/* Mobile contact button */}
                  {/* <div className="py-6 px-5 space-y-6">
                  <div>
                    <Link href="/contact">
                      <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark">
                        Contact
                      </a>
                    </Link>
                  </div>
                </div> */}
                </div>
              </div>
            </Transition>

            {/* Desktop Nav */}
            <div className="hidden sm:block">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {renderLinks()}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
