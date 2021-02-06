import { useState } from 'react'
import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import CovidBanner from 'components/CovidBanner'
import Hero from 'components/Hero'
import WhyButterfly from 'components/WhyButterfly'
import Divider from 'components/Divider'
import ServiceSection from 'components/ServiceSection'
import Testimonials from 'components/Testimonials'
import ClassesSection from 'components/ClassesSection'

function Home() {
  const [bannerOpen, setBannerOpen] = useState(true)

  return (
    <>
      <Head>
        <title>Butterfly Holistics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Covid Banner */}
      {bannerOpen && (
        <CovidBanner toggleBanner={setBannerOpen} bannerOpen={bannerOpen} />
      )}
      <PageLayout>
        <Hero />
        <WhyButterfly />
        <Testimonials />
        <ServiceSection />
        <Divider />
        <ClassesSection />
      </PageLayout>
    </>
  )
}

export default Home
