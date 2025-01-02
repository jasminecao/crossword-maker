import { useGameContext } from '@/contexts/GameContext'
import { useKeyHandler } from '@/hooks/useKeyHandler'
import { Position } from '@/types'
import { isFilledCell, posToString } from '@/utils'
import { Cell } from './cell'
import { useClues } from '@/hooks/useClues'
import { useRef } from 'react'

const Board = () => {
  const {
    grid,
    setGridCell,
    activeCell,
    setActiveCell,
    direction,
    setDirection,
  } = useGameContext()
  const puzzleRef = useRef<HTMLDivElement | null>(null)

  const toggleFill = (cellPosition: Position) => {
    const currChar = grid[cellPosition.row][cellPosition.col]
    if (isFilledCell(currChar)) {
      setGridCell(cellPosition, '')
    } else {
      setGridCell(cellPosition, '.')
    }
  }

  useKeyHandler(
    puzzleRef,
    direction,
    setDirection,
    activeCell,
    setActiveCell,
    toggleFill
  )

  const [cluePositions] = useClues(grid)

  return (
    <div className={`w-full h-full`} ref={puzzleRef}>
      {[...grid].map((rowVal, row) => (
        <div className="flex w-full h-[20vw] sm:h-1/5" key={row}>
          {[...rowVal].map((colVal, col) => (
            <Cell
              cellPosition={{ row, col }}
              clueNumber={cluePositions.indexOf(posToString({ row, col }))}
              character={colVal}
              key={posToString({ row, col })}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
