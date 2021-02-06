import Link from 'next/link'

function ServiceSection(props) {
  return (
    <div className="mt-10 mb-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-700 sm:text-4xl">
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
                <div className="mt-5">
                  <dt className="text-xl leading-6 font-semibold text-primary">
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
                <div className="mt-5">
                  <dt className="text-xl leading-6 font-semibold text-primary">
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
                <div className="mt-5">
                  <dt className="text-xl leading-6 font-semibold text-primary">
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
            <a className="px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-primary md:py-3 md:text-lg md:px-10 btn">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
