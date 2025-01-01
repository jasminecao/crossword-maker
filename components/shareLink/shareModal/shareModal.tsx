import { useLinkGenerator } from '@/hooks/useLinkGenerator'
import { useState } from 'react'
import { LuCopy, LuCircleCheck, LuX } from 'react-icons/lu'

export const ShareModal = ({
  setShowModal,
}: {
  setShowModal: (showModal: boolean) => void
}) => {
  const link = useLinkGenerator()
  const absolutePath = window.location.origin + '/' + link
  const [hideCopyIcon, setHideCopyIcon] = useState(false)
  const [showCheckIcon, setShowCheckIcon] = useState(false)

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="p-4 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <div className="float-right">
                <LuX
                  onClick={() => setShowModal(false)}
                  className="cursor-pointer hover:scale-100 hover:bg-slate-100"
                />
              </div>
              <p className="text-base text-gray-900" id="modal-title">
                share the link below &#128522;
              </p>
              <div className="mt-2 flex items-center">
                <input
                  id="clone-with-https"
                  type="text"
                  className="bg-gray-100 w-full p-2 rounded outline-none"
                  data-autoselect="true"
                  readOnly={true}
                  value={absolutePath}
                />
                {showCheckIcon ? (
                  <LuCircleCheck
                    size={20}
                    className={`ml-2 justify-center items-center cursor-pointer transition ease-in-out delay-150 ${
                      showCheckIcon ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ) : (
                  <LuCopy
                    size={20}
                    className={`ml-2 justify-center items-center cursor-pointer hover:bg-slate-100 hover:scale-110
                        transition-opacity 
                        duration-300
                        ease-out ${hideCopyIcon ? 'opacity-0' : 'opacity-100'}`}
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(absolutePath)
                      } catch (err) {
                        console.error('Failed to copy: ', err)
                      }

                      setHideCopyIcon(true)
                      setTimeout(() => setShowCheckIcon(true), 500)
                      setTimeout(() => setHideCopyIcon(false), 500)
                      setTimeout(() => setShowCheckIcon(false), 1500)
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
