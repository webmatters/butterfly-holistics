import React from 'react'

import PageLayout from 'components/PageLayout'
import PageHeader from 'components/PageHeader'

function Contact() {
  const title = 'Contact'
  const subtitle = "We'd Love to Hear from You"
  const intro =
    "You can use the links above to directly schedule an appointment or enroll in a class. If you'd like to receive articles and updates from us, subscribe to our newsletter below. If you have any questions, feel free to contact us using any of the channels below."

  return (
    <PageLayout>
      <PageHeader title={title} subtitle={subtitle} intro={intro} />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Location
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Street address</dt>
                      <dd>372 Raleigh Street</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">City, Street, Zip Code</dt>
                      <dd>Holly Springs, NC 27540</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Phone
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>(919) 355-5529</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Email
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>learning@butterflyholistics.com</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Facebook
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Facebook Link</dt>
                      <a
                        href="https://www.facebook.com/balanceandheal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-400"
                      >
                        <dd>www.facebook.com/balanceandheal/</dd>
                      </a>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Contact
