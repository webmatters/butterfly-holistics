import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <div
      className="max-w-7xl mx-auto text-white bg-no-repeat bg-left flex items-center hero-image"
      // style={{
      //   height: '550px',
      //   backgroundImage:
      //     "linear-gradient(to right, rgba(0, 143, 203, 0.8), rgba(0, 143, 203, 0.7), rgba(0, 143, 203, 0.2)), url('butterfly-hero.jpg')",
      // }}
    >
      <div className="w-2/3 pl-12">
        <p className="text-4xl tracking-wide text-white animate-move-in-left">
          Take Control of Your Wellbeing
        </p>
        <p className="mt-3 uppercase text-lg tracking-wide animate-move-in-right">
          Balance Your Energy, Change Your Life
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-full animate-move-in-bottom">
            <a
              href="https://mailchi.mp/0feb14b51109/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-full text-white md:transition duration-500 ease-in-out bg-secondary transform hover:scale-105 md:py-3 md:text-lg md:px-10 btn"
            >
              Free Class
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3 animate-move-in-bottom">
            <Link href="/appointments">
              <a className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-primary transition duration-500 ease-in-out transform hover:scale-105 md:py-3 md:text-lg md:px-10 btn">
                Appointments
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
