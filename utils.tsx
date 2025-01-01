import { NUM_ROWS } from './constants'
import { Position, Direction } from './types'

export const getNextPosition = (
  { row, col }: Position,
  direction: Direction
): Position => {
  let newPosition
  switch (direction) {
    case Direction.UP:
      newPosition = [row - 1, col]
      break
    case Direction.DOWN:
      newPosition = [row + 1, col]
      break
    case Direction.LEFT:
      newPosition = [row, col - 1]
      break
    case Direction.RIGHT:
      newPosition = [row, col + 1]
      break
  }

  const [newRow, newCol] = newPosition
  return {
    row: truncateIndex(newRow),
    col: truncateIndex(newCol),
  }
}

export const isFilledCell = (char: string): boolean => char === '.'

export const posToString = ({ row, col }: Position): string => `${row},${col}`

export const stringToPos = (pos: string): Position => {
  const [row, col] = pos.split(',').map((val) => parseInt(val))
  return { row, col }
}

export const truncateIndex = (index: number): number =>
  Math.min(Math.max(0, index), NUM_ROWS - 1)

export const isActiveRowCol = (
  direction: Direction,
  activePos: Position,
  currPos: Position
): boolean => {
  const { row, col } = currPos
  const { row: activeRow, col: activeCol } = activePos

  if (direction === Direction.RIGHT || direction === Direction.LEFT) {
    return row === activeRow
  }

  return col === activeCol
}