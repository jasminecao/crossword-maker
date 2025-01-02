import { Puzzle } from '@/components/puzzle'
import { parseLink } from '@/hooks/useLinkGenerator'
import { GameMode } from '@/types'
import { useRouter } from 'next/router'

const ErrorText = () => <p>uh oh, something went wrong :/ </p>

export default function Game() {
  const router = useRouter()
  const gameString = router.query.game as string
  const { grid, clues } = parseLink(gameString)

  return grid ? (
    <Puzzle solution={grid} clues={clues} mode={GameMode.PLAY} />
  ) : (
    <ErrorText />
  )
}
