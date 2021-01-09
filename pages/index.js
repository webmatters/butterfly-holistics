import Head from 'next/head'

import PageLayout from '../components/PageLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Butterfly Holistics</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <h1>Butterfly Holistics Home Page</h1>
      </PageLayout>
    </div>
  )
}
