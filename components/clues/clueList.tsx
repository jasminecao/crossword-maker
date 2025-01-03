import { useGameContext } from '@/contexts/GameContext'
import { ClueItem } from './clueItem'
import { ClueDirection } from '@/types'
import { useClues } from '@/hooks/useClues'
import {
  dirToClueDirection,
  isActiveRowCol,
  posToString,
  stringToPos,
} from '@/utils'

const headings = {
  [ClueDirection.ACROSS]: 'ACROSS',
  [ClueDirection.DOWN]: 'DOWN',
}

const ColumnWrapper = ({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) => (
  <div className="sm:ml-4 flex flex-col sm:w-50">
    <h2 className="font-medium">{heading}</h2>
    <div className="border-b border mb-2" />
    {children}
  </div>
)

export const ClueList = () => {
  const { grid, direction, clues, activeCell } = useGameContext()
  const [cluePositions, clueDirections] = useClues(grid)

  return (
    <div className="sm:flex w-full mb-2">
      {[ClueDirection.ACROSS, ClueDirection.DOWN].map((clueDirection) => (
        <ColumnWrapper heading={headings[clueDirection]} key={clueDirection}>
          {clueDirections.map(
            (dirs, index) =>
              dirs.includes(clueDirection) && (
                <ClueItem
                  number={index}
                  key={`clue-${clueDirection}-${index}`}
                  clueDirection={clueDirection}
                  shouldHighlight={
                    isActiveRowCol(
                      direction,
                      activeCell,
                      stringToPos(cluePositions[index])
                    ) &&
                    clueDirections[index].includes(
                      dirToClueDirection(direction)
                    ) &&
                    dirToClueDirection(direction) === clueDirection
                  }
                  shouldHighlightPartial={
                    cluePositions[index] === posToString(activeCell)
                  }
                  clue={clues[clueDirection][index]}
                />
              )
          )}
        </ColumnWrapper>
      ))}
    </div>
  )
}
