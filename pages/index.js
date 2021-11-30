import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-grey-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header/>
      {/* Feed */}
      <Feed/>
      {/* Modal */}
    </div>
  )
}
