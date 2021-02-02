export default function Testimonials(props) {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-16 text-center">
        <div className="pt-6 lg:py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-primary-dark lg:pr-16">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-base font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-light"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Working consistently with Valerie is one of the TOP TWO things I
                did for my business and myself personally... Before seeing
                Valerie, I was able to work on my mindset and know things
                intellectually but I was still struggling, so I knew the blocks
                and areas that needed help were on the subconscious and
                energetic level. Valerie helps me clear these blocks so I can
                fully integrate and be whole and free from all the junk holding
                me back. I now have a sense of calm, groundedness, and success
                that I’ve never experienced before in my life..
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex justify-center">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="Sarah_M.jpg"
                    alt="Sarah M."
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    Sarah M.
                  </div>
                  <div className="text-base font-medium text-primary-lightest">
                    Holly Springs, NC
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="py-6 px-4 border-t-2 border-primary sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-base font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-light"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                I recently attended two workshops with Butterfly Holistics.
                Valerie is amazing, so knowledgeable about the human body and a
                healer. Not only did I learn specific skills to incorporate into
                my massage practice, I also benefited from the work as we
                practiced during class. I am better for attending, body, mind
                and spirit and will take more classes from her.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex justify-center">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="Helen.jpg"
                    alt="Helen R."
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    Helen R.
                  </div>
                  <div className="text-base font-medium text-primary-lightest">
                    Holly Springs, NC
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
