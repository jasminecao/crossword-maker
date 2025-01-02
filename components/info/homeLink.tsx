import Link from 'next/link'
import { LuPencilLine } from 'react-icons/lu'

export const HomeLink = () => {
  return (
    <div>
      <div className="float-right flex items-center hover:text-accent hover:underline hover:underline-offset-4 text-sm mb-4">
        <Link href="/">create your own crossword</Link>
        <LuPencilLine className="ml-1" />
      </div>
    </div>
  )
}
