import { LuShare2 } from 'react-icons/lu'
import { ShareModal } from './shareModal/shareModal'
import { useState } from 'react'

export const ShareButton = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {showModal && <ShareModal setShowModal={setShowModal} />}
      <button
        className="flex-end w-fit flex rounded border py-2 px-4 text-center text-sm bg-slate-100 hover:bg-accentBackground mb-4"
        type="button"
        onClick={() => {
          setShowModal(true)
        }}
      >
        share
        <LuShare2 className="ml-2" />
      </button>
    </div>
  )
}
