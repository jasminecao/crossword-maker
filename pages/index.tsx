import { Puzzle } from '@/components/puzzle'
import { GameMode } from '@/types'

export default function Home() {
  return <Puzzle mode={GameMode.EDIT} />
}
