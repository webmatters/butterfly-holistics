import Link from 'next/link'

function WhyButterfly(props) {
  return (
    <div className="mt-10 mb-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Why Butterfly Holistics?
          </h2>
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-700 sm:text-4xl font-serif">
            Expert care from a Master Practitioner
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 mt-10">
          <div className="flex justify-center items-center">
            <img src="valerie-remhoff.jpg" alt="Valerie Remhoff" />
          </div>
          <div>
            <p className="mb-8">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
            <div className="flex justify-center">
              <Link href="/about">
                <a className="px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-secondary md:py-3 md:text-lg md:px-10 btn">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyButterfly
