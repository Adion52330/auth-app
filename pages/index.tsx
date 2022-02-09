import Head from 'next/head'
import Login from '../components/Login'
import { useSession } from 'next-auth/react'
import Biodata from '../components/Biodata'

export default function Home() {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="min-h-screen bg-[#fafafb]">
      <Head>
        <title>My Authentication App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sturucture */}
      <div>
        {!session ? (
          <div className="flex min-h-screen w-screen flex-col items-center justify-center">
            <Login />
          </div>
        ) : (
          <Biodata />
        )}
      </div>
    </div>
  )
}
