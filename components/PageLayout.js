import Head from 'next/head'

function PageLayout() {
  return (
    <>
      <Head>
        <title>Butterfly Holistics</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <div className="bg-gray-50">
          <div className="relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div>Navbar</div>
              <div>Content Body</div>
              <div>Footer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageLayout
