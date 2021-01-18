import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <div
      className="max-w-7xl mx-auto text-white bg-no-repeat bg-left flex items-center"
      style={{
        height: '550px',
        backgroundImage:
          "linear-gradient(to right, rgba(0, 143, 203, 0.8), rgba(0, 143, 203, 0.7), rgba(0, 143, 203, 0.2)), url('butterfly-hero.jpg')",
      }}
    >
      <div className="w-2/3 pl-12">
        <p className="text-4xl tracking-wide text-tertiary font-serif">
          Take Control of Your Health
        </p>
        <p className="mt-3 uppercase font-bold tracking-wide">
          Balance your energy and Balance your life
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-full shadow">
            <Link href="/appointments">
              <a className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-secondary hover:bg-secondary-light md:py-3 md:text-lg md:px-10 btn">
                Schedule Now
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="/services">
              <a className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-full text-secondary bg-primary-lightest hover:bg-primary-light md:py-3 md:text-lg md:px-10 btn">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
