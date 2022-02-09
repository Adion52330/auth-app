import React, { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'

const Header = () => {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <header className="flex items-center justify-around p-4">
        <img src="/devchallenges.svg" alt="" />
        <div
          className="flex items-center space-x-4"
          onClick={() => setOpen(!open)}
        >
          <img
            // @ts-ignore
            src={session?.user?.image}
            className="h-12 w-12 rounded-lg"
            alt=""
          />
          <p className="flex cursor-pointer items-center space-x-2 text-lg font-bold transition hover:text-blue-700">
            <span>{session?.user?.name}</span>
            <img
              src="https://img.icons8.com/external-those-icons-fill-those-icons/344/external-down-arrows-those-icons-fill-those-icons-1.png"
              className="h-4 w-4"
              alt=""
            />
          </p>
          {open && (
            <div className="z-1 absolute top-20 flex flex-col rounded-lg bg-white px-3 py-1 shadow-2xl">
              <p
                className="cursor-pointer rounded-lg px-7 py-4 text-left transition hover:bg-gray-200"
                onClick={() => signOut()}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header
