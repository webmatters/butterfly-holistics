import Head from 'next/head'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

function PageLayout({ children }) {
  return (
    <>
      <Head>
        <title>Butterfly Holistics</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgb(2, 99, 146), rgb(189, 214, 232), rgb(2, 99, 146))',
        }}
      >
        <div className="max-w-7xl mx-auto bg-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default PageLayout
