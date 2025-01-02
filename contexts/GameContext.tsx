import {
  DEFAULT_CLUES,
  DEFAULT_DIRECTION,
  DEFAULT_GRID,
  DEFAULT_POSITION,
} from '@/constants'
import {
  Char,
  ClueListType,
  Direction,
  GameMode,
  Grid,
  Position,
} from '@/types'
import { createContext, useContext, useState } from 'react'

export const GameContext = createContext<{
  mode: GameMode
  grid: Grid
  setGridCell: (cellPosition: Position, newChar: Char) => void
  activeCell: Position
  setActiveCell: (position: Position) => void
  direction: Direction
  setDirection: (direction: Direction) => void
  clues: ClueListType
  setClues: (clues: ClueListType) => void
}>({
  mode: GameMode.PLAY,
  grid: DEFAULT_GRID,
  setGridCell: () => {},
  activeCell: DEFAULT_POSITION,
  setActiveCell: () => {},
  direction: Direction.RIGHT,
  setDirection: () => {},
  clues: DEFAULT_CLUES,
  setClues: () => {},
})

export const GameProvider: React.FC<{
  mode: GameMode
  gridInput?: Grid
  clueInput?: ClueListType
  children: React.ReactNode
}> = ({ mode, gridInput, clueInput, children }) => {
  const [grid, setGrid] = useState<Grid>(gridInput || DEFAULT_GRID)
  const [activeCell, setActiveCell] = useState<Position>(DEFAULT_POSITION)
  const [direction, setDirection] = useState<Direction>(DEFAULT_DIRECTION)
  const [clues, setClues] = useState<ClueListType>(clueInput || DEFAULT_CLUES)

  const setGridCell = (cellPosition: Position, newChar: Char) => {
    const { row, col } = cellPosition
    const gridCopy = grid.map((row) => [...row])
    gridCopy[row][col] = newChar
    setGrid(gridCopy)
  }

  return (
    <GameContext.Provider
      value={{
        mode,
        grid,
        setGridCell,
        activeCell,
        setActiveCell,
        direction,
        setDirection,
        clues,
        setClues,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  const context = useContext(GameContext)
  if (context === null) {
    throw new Error('useGameContext must be used within a GameContext Provider')
  }
  return context
}
