import Link from 'next/link'

function ServiceSection(props) {
  return (
    <div className="mt-10 mb-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-700 sm:text-4xl font-serif">
            Meeting your specific needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            You are unique and yet we are all connected. Your journey to
            wellness will be unlike that of anyone else. Butterfly Holistics
            offers many options to meet you where you are.
          </p>
        </div>

        {/* Services columns */}
        <div className="py-12 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Meeting your specific needs</h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div> */}
                <div className="mt-5">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    One-on-One Sessions
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    The results of energy balancing sessions are real and
                    tangible. Stress can be reduced, sleep can be improved,
                    mindsets can be changed, and pain can often be reduced or
                    relieved in a matter of minutes. Reiki, Kinesiology, Chakra
                    work and more can be part of the experience. Whatever
                    challenge you are facing, these sessions can help.
                  </dd>
                </div>
              </div>

              <div>
                {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div> */}
                <div className="mt-5">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Live and Online Education
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Whether you want to learn transformative self-care tools or
                    take the first steps in becoming a practitioner, we have
                    classes for you. Valerie is there every step of the way to
                    support you in your learning.
                  </dd>
                </div>
              </div>

              <div>
                {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div> */}
                <div className="mt-5">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Speaking Engagements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Valerie’s passion for holistic energy work comes through in
                    all her presentations. She is available for private classes
                    and speaking engagements that can be tailored to the needs
                    of your group.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/services">
            <a className="px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-secondary md:py-3 md:text-lg md:px-10 btn">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
