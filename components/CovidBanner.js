import Link from 'next/link'

function CovidBanner({ toggleBanner, bannerOpen }) {
  return (
    <div className="relative bg-secondary">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">COVID-19 policy and procedures</span>
            <span className="hidden md:inline">
              Please review our COVID-19 policies and procedures.
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <Link href="/covid">
                <a className="text-white font-bold underline">
                  {' '}
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            onClick={() => {
              toggleBanner(!bannerOpen)
            }}
            className="flex p-2 rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            {/* Heroicon name: x */}
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CovidBanner
