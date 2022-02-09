import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className="rounded-lg border-2 bg-white p-7">
      <img src="/devchallenges.svg" alt="" />
      <h2 className="my-5 max-w-md text-2xl font-bold">
        Join thousands of learners from around the world
      </h2>
      <p className="max-w-md">
        Master web development by making real-life projects. There are multiple
        paths for you to choose.
      </p>
      <p className="my-5 text-center font-semibold">
        Login with social profiles:
      </p>
      <div className="flex w-full justify-around">
        <div className="cursor-pointer" onClick={() => signIn('google')}>
          <img src="/Google.svg" alt="" />
        </div>
        <div className="cursor-pointer" onClick={() => signIn('github')}>
          <img src="/Gihub.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
