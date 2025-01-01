import { LIGHT_BACKGROUND_COLOR } from '@/constants'
import { useGameContext } from '@/contexts/GameContext'
import { ClueDirection } from '@/types'

interface ClueItemProps {
  number: number
  clueDirection: ClueDirection
  shouldHighlight: boolean
  shouldHighlightPartial: boolean
  clue: string
}

export const ClueItem = ({
  number,
  clueDirection,
  shouldHighlight,
  shouldHighlightPartial,
  clue,
}: ClueItemProps) => {
  const { clues, setClues } = useGameContext()

  const bgColor = shouldHighlight
    ? `bg-${LIGHT_BACKGROUND_COLOR}`
    : 'bg-transparent'
  const borderColor = shouldHighlightPartial
    ? 'border-accentBackground'
    : 'border-transparent'

  return (
    <div className={`flex text-sm ${bgColor} p-2 border-l-4 ${borderColor}`}>
      <div className={`w-4 h-full font-bold`}>{number + 1}.</div>
      <textarea
        name="clueItem"
        rows={2}
        className={`ml-2 w-full pl-1 ${bgColor} rounded hover:bg-slate-100 focus:outline-none`}
        onChange={(e) => {
          setClues({
            ...clues,
            [clueDirection]: {
              ...clues[clueDirection],
              [number]: e.target.value,
            },
          })
        }}
        style={{ resize: 'none' }}
        value={clue}
      />
    </div>
  )
}