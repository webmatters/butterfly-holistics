import Link from 'next/link'

function ServiceSection(props) {
  return (
    <div className="mt-10 mb-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl font-serif">
            Meeting your specific needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-700">Reiki</h2>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus
                  quisquam.Lorem ipsum dolor sit amet consect adipisicing elit.
                  Possimus magnam voluptatum cupiditate veritatis in accusamus
                  quisquam.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-700">
              Touch For Health
            </h2>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dd className="mt-2 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus
                  quisquam.Lorem ipsum dolor sit amet consect adipisicing elit.
                  Possimus magnam voluptatum cupiditate veritatis in accusamus
                  quisquam.
                </dd>
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
