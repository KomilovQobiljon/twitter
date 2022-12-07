import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}

      {/* Widgets */}

      {/* Modal */}
    </div>
  )
}
