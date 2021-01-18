import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import Hero from 'components/Hero'
import WhyButterfly from 'components/WhyButterfly'

export default function Home() {
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
      </PageLayout>
    </>
  )
}
