import { NUM_ROWS } from '@/constants'
import { ClueDirection, Grid } from '@/types'
import { isFilledCell, posToString } from '@/utils'

/**
 * Returns the positions of the clues and their directions
 * @param grid
 * @returns [cluePositions, clueDirections]
 * cluePositions: Array of strings representing the positions of the clues
 * clueDirections: Array of which direction each clue is for
 */
export const useClues = (
  grid: Grid
): [Array<string>, Array<Array<ClueDirection>>] => {
  const cluePositions: Array<string> = []
  const clueDirections: Array<Array<ClueDirection>> = []
  let idx = 0

  grid.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
      const directions = [ClueDirection.ACROSS, ClueDirection.DOWN]
      directions.forEach((direction) => {
        const isClue = shouldSetClueNumber(grid, rowIndex, colIndex, direction)
        if (isClue) {
          cluePositions[idx] = posToString({ row: rowIndex, col: colIndex })
          if (!clueDirections[idx]) {
            clueDirections[idx] = [direction]
          } else {
            clueDirections[idx].push(direction)
          }
        }
      })

      if (clueDirections[idx] && clueDirections[idx].length > 0) {
        idx++
      }
    })
  })

  return [cluePositions, clueDirections]
}

export const shouldSetClueNumber = (
  grid: Grid,
  row: number,
  col: number,
  direction: ClueDirection
): boolean => {
  if (isFilledCell(grid[row][col])) {
    return false
  }

  if (direction === ClueDirection.ACROSS) {
    if (col === 0) {
      return true
    }

    // check left condition
    if (
      isFilledCell(grid[row][col - 1]) &&
      col < NUM_ROWS - 1 &&
      !isFilledCell(grid[row][col + 1])
    ) {
      return true
    }
  }

  if (direction === ClueDirection.DOWN) {
    if (row === 0) {
      return true
    }
    // check above condition
    if (
      isFilledCell(grid[row - 1][col]) &&
      row < NUM_ROWS - 1 &&
      !isFilledCell(grid[row + 1][col])
    ) {
      return true
    }
  }

  return false
}
