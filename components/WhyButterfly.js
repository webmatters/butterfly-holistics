import Link from 'next/link'

function WhyButterfly() {
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
            Transforming lives by helping people heal and reconnect their mind,
            body, and spirit through energy work, and empowering them with
            self-care tools that facilitate continued growth.
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 mt-10">
          <div className="flex justify-center items-center">
            <img src="valerie-remhoff.jpg" alt="Valerie Remhoff" />
          </div>
          <div className="col-span-2 mt-4">
            <p className="mb-8">
              Valerie Remhoff is the owner of Butterfly Holistics. She is an
              experienced kinesiologist, Reiki master teacher, IKC Certified
              Touch for Health instructor/consultant, author, and speaker. She
              is also an NCBTMB approved continuing education provider. Valerie
              has studied intuition, energy and holistic healing for most of her
              life and has been working as a teacher and practitioner since
              2005. Her sessions and classes in holistic energy healing help
              people learn to identify and clear away their physical, mental,
              emotional, and spiritual barriers, allowing them to find peace,
              balance and purpose.
            </p>
            <div className="flex justify-center">
              <Link href="/about">
                <a className="px-8 py-2 border border-transparent text-base font-medium rounded-full text-white bg-secondary md:py-2 md:text-lg md:px-10 btn">
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
