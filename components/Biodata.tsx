import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Header from './Header'

const Biodata = () => {
  const { data: session } = useSession()
  const [name, setName] = useState(session?.user?.name)
  const [email, setEmail] = useState(session?.user?.email)
  const [image, setImage] = useState(session?.user?.image)
  return (
    <div>
      <Header />
      <div className="my-4 text-center">
        <h1 className="text-4xl font-semibold">Personal Info</h1>
        <p className="my-4">Basic Info like, your image and name</p>
      </div>
      <div className="my-10 flex w-full flex-col items-center justify-center rounded-lg border-2 border-[#E0E0E0] md:mx-auto md:max-w-6xl">
        <div className="flex w-full items-center justify-between border-b-2 border-[#E0E0E0] px-10 py-4">
          <div>
            <h1 className="text-3xl">Profile</h1>
            <p className="text-[#828282]">
              Some info maybe visible to other people
            </p>
          </div>
          <div className="cursor-pointer rounded-lg border-2 border-[#828282] px-5 py-2 text-[#828282] active:bg-gray-200">
            Edit
          </div>
        </div>
        <div className="flex w-full items-center space-x-40 border-b-2 border-[#E0E0E0] px-10 py-4">
          <p className="text-[#bdbdbd]">Photo</p>
          <img src={image!} className="h-24 w-24 rounded-full" alt="" />
        </div>
        <div className="flex h-[73.26px] w-full items-center space-x-40 border-b-2 border-[#E0E0E0] px-10 py-4">
          <p className="text-[#bdbdbd]">Name</p>
          <p className="font-semibold text-[#333333]">{name}</p>
        </div>
        <div className="flex h-[73.26px] w-full items-center space-x-40 border-b-2 border-[#E0E0E0] px-10 py-4">
          <p className="text-[#bdbdbd]">Email</p>
          <p className="font-semibold text-[#333333]">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default Biodata
