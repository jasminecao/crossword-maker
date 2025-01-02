import { Geist, Courier_Prime } from 'next/font/google'
import { ReactNode } from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
})

export const PuzzleWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${courier.className} ${geistSans.variable} antialiased`}>
      <div className="flex sm:h-screen sm:w-screen justify-center content-center">
        <div className="flex flex-col p-2 my-auto h-full w-full sm:w-2/3">
          {children}
        </div>
      </div>
    </div>
  )
}
