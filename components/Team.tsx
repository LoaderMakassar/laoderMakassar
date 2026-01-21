'use client'

import Image from "next/image"
import { JSX } from "react"

type TeamMember = {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Andi Ismail",
    role: "Manajer Penjualan",
    image: "/team/andis.pn",
    bio: "Kepala Penjualan PT BGDMI Sektor Makassar.",
  },

]

export default function Team(): JSX.Element {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">
        Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition"
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="128px"
                className="rounded-full object-cover"
                priority={member.id === 1}
              />
            </div>

            <h3 className="text-xl font-semibold text-black">
              {member.name}
            </h3>
            <p className="text-sm text-black mb-2">
              {member.role}
            </p>
            <p className="text-sm text-gray-600">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
