import Head from 'next/head'

import Hero from 'components/Hero'
import Footer from 'components/Footer'
import WhyButterfly from 'components/WhyButterfly'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Head>
        <title>Butterfly Holistics</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <WhyButterfly />
      <Footer />
    </div>
  )
}
