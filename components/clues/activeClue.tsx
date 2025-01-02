import { ClueItem } from './clueItem'
import { useGameContext } from '@/contexts/GameContext'
import { dirToClueDirection, isActiveRowCol, stringToPos } from '@/utils'
import { useClues } from '@/hooks/useClues'
import { GameMode } from '@/types'

export const ActiveClue = () => {
  const { grid, activeCell, clues, direction, mode } = useGameContext()
  const currentDirection = dirToClueDirection(direction)
  const [cluePositions, clueDirections] = useClues(grid)

  return (
    mode === GameMode.PLAY && (
      <div className="mb-2 w-full sm:w-1/2">
        {clueDirections.map(
          (dirs, idx) =>
            dirs.includes(currentDirection) &&
            isActiveRowCol(
              direction,
              activeCell,
              stringToPos(cluePositions[idx])
            ) &&
            clueDirections[idx].includes(dirToClueDirection(direction)) && (
              <ClueItem
                number={idx}
                clueDirection={currentDirection}
                clue={clues[currentDirection][idx]}
                shouldHighlight
                shouldHighlightPartial
                key={idx}
              />
            )
        )}
      </div>
    )
  )
}
