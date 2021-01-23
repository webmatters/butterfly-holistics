import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import Hero from 'components/Hero'
import WhyButterfly from 'components/WhyButterfly'
import Divider from 'components/Divider'
import ServiceSection from 'components/ServiceSection'
import Testimonials from 'components/Testimonials'
import ClassesSection from 'components/ClassesSection'

function Home() {
  return (
    <>
      <Head>
        <title>Butterfly Holistics</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
