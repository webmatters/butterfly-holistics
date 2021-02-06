import Link from 'next/link'

function ClassesSection() {
  return (
    <div className="mb-12 pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Classes
          </h2>
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-700 sm:text-4xl">
            Learn Self Care Techniques
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
          <div className="mt-6 text-gray-500 mx-auto">
            <p>
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p>

            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/classes">
              <a className="px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-primary md:py-3 md:text-lg md:px-10 btn">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassesSection
