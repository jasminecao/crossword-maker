import { useWinCondition } from '@/hooks/useWinCondition'
import { useState } from 'react'
import { LuX } from 'react-icons/lu'
import Image from 'next/image'
import moment from 'moment'

export const WinModal = () => {
  const [showModal, setShowModal] = useState(true)

  const [gameWon, timeSeconds] = useWinCondition()
  const duration = moment.duration(timeSeconds, 'seconds')
  const formattedTime = moment.utc(duration.asMilliseconds()).format('HH:mm:ss')

  return (
    gameWon &&
    showModal && (
      <div className="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-1 rounded-lg">
          <div className="float-right">
            <LuX
              onClick={() => setShowModal(false)}
              className="cursor-pointer hover:scale-100 hover:bg-slate-100"
            />
          </div>

          <div className="flex m-8">
            <Image
              src="/hamster-yay.png"
              alt="hamster-yay"
              width={50}
              height={50}
            />
            <p className="flex-end ml-2">
              wahoo! you&apos;re a smart cookie :)
              <br />
              you finished the puzzle in
              <span className="font-bold"> {formattedTime}</span>
            </p>
          </div>
        </div>
      </div>
    )
  )
}
