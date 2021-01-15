import Head from 'next/head'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

function PageLayout({ children }) {
  return (
    <>
      <Head>
        <title>Butterfly Holistics</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-300">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageLayout
