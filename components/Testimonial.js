function Testimonial({ text, image, name, location }) {
  return (
    <div>
      <div className="pt-6 lg:pt-12 px-4 sm:px-6 md:flex md:flex-col md:pt-16 md:pl-0 md:pr-10 md:border-primary-dark lg:px-16">
        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col animate-move-in-right">
          <div className="relative text-base font-medium text-white md:flex-grow">
            <svg
              className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-light"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">{text}</p>
          </div>
          <footer className="mt-8">
            <div className="flex justify-center">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-12 w-12 rounded-full"
                  src={image}
                  alt="Sarah M."
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-white">{name}</div>
                <div className="text-base font-medium text-primary-lightest">
                  {location}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export default Testimonial
