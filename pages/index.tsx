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
      <div className="flex h-screen w-screen justify-center content-center">
        <div className="my-auto h-1/2 w-2/3 min-h-[200px] min-w-[200px]">
          <Puzzle />
        </div>
      </div>
    </div>
  )
}
