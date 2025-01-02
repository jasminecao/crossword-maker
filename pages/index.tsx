import { Puzzle } from '@/components/puzzle'
import { Geist, Courier_Prime } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <div className={`${courier.className} ${geistSans.variable} antialiased`}>
      <div className="flex sm:h-screen sm:w-screen justify-center content-center">
        <div className="p-2 my-auto h-full w-full sm:h-1/2 sm:w-2/3">
          <Puzzle />
        </div>
      </div>
    </div>
  )
}
