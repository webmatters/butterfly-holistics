import React from 'react'
import Link from 'next/link'

function Footer() {
  const links = [
    { id: '1', path: '/links', name: 'Links' },
    { id: '2', path: '/policies', name: 'Policies' },
    { id: '3', path: '/covid', name: 'COVID-19' },
    { id: '4', path: '/contact', name: 'Contact' },
  ]

  const renderLinks = () => {
    return links.map(link => (
      <li key={link.id}>
        <Link href={link.path}>
          <a className="text-base text-gray-500 hover:text-gray-900">
            {link.name}
          </a>
        </Link>
      </li>
    ))
  }

  return (
    <footer className="bg-gray-100" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">{renderLinks()}</ul>
          </div>

          {/* Contact information */}
          <div className="mt-8 xl:mt-0 text-gray-500">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact
            </h3>
            <p>372 Raleigh Street</p>
            <p>Holly Springs, NC 27540</p>
            <p>learning@butterflyholistics.com</p>
            <p>(919) 355-5529</p>
          </div>

          {/* Newsletter signup */}
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-500">
              The latest information and resources, sent to your inbox.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                autocomplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-secondary flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:secondary focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="https://www.facebook.com/balanceandheal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Butterfly Holistics - All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

{
  /*
      This example requires Tailwind CSS v2.0+ 
      
      This example requires some changes to your config:
      
      ```
      // tailwind.config.js
      module.exports = {
        // ...
        plugins: [
          // ...
          require('@tailwindcss/forms'),
        ]
      }
      ```
    */
}

// <footer className="bg-gray-100">
//   <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
//     <nav
//       className="-mx-5 -my-2 flex flex-wrap justify-center"
//       aria-label="Footer"
//     >
//       {renderLinks()}
//     </nav>
//     <div className="mt-8 flex justify-center space-x-6">
//       <p></p>
//       <a
//         href="https://www.facebook.com/balanceandheal"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-400 hover:text-gray-500"
//       >
//         <span className="sr-only">Facebook</span>
//         <svg
//           className="h-6 w-6"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </a>
//     </div>
// <p className="mt-8 text-center text-base text-gray-400">
//   &copy; {new Date().getFullYear()} Butterfly Holistics - All rights
//   reserved.
// </p>
//   </div>
// </footer>
// )
// }

export default Footer
