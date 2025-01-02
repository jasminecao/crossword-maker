import { BACKGROUND_COLOR, LIGHT_BACKGROUND_COLOR } from '@/constants'
import { useGameContext } from '@/contexts/GameContext'
import { useInputFocus } from '@/hooks/useInputFocus'
import { Char, Position } from '@/types'
import { getNextPosition, isActiveRowCol, isFilledCell } from '@/utils'
import { useEffect, useState } from 'react'
interface CellProps {
  cellPosition: Position
  clueNumber: number
  character: Char
}

export const Cell = ({ cellPosition, clueNumber, character }: CellProps) => {
  const { setGridCell, activeCell, setActiveCell, direction } = useGameContext()
  const [inputRef, setInputFocus] = useInputFocus()
  const [focused, setFocused] = useState<boolean>(false)
  const isActiveCell =
    cellPosition.row === activeCell.row && cellPosition.col === activeCell.col

  const handleCellValueChange = (currPosition: Position, newChar: Char) => {
    // update grid state with new character
    setGridCell(currPosition, newChar)

    // move active cell to next cell
    if (newChar.length === 1) {
      const newPosition = getNextPosition(currPosition, direction)
      setActiveCell(newPosition)
    } else {
      setActiveCell(currPosition)
    }
  }

  useEffect(() => {
    if (!focused && isActiveCell) {
      setInputFocus()
      setFocused(true)
    }

    if (!isActiveCell) {
      setFocused(false)
    }
  }, [focused, setInputFocus, isActiveCell, setFocused])

  let backgroundColor = 'bg-transparent'
  if (isActiveRowCol(direction, activeCell, cellPosition)) {
    backgroundColor = `bg-${LIGHT_BACKGROUND_COLOR}`
  }
  if (isActiveCell) {
    backgroundColor = `bg-${BACKGROUND_COLOR}`
  }
  if (isFilledCell(character)) {
    backgroundColor = 'bg-black'
  }

  return (
    <div
      className={`sm:w-1/5 sm:h-full ${backgroundColor} border text-center font-sans font-bold`}
    >
      {/* add one to clueNumber due to 0-index */}
      {clueNumber !== -1 && (
        <div className="text-xs float-left m-1 absolute">{clueNumber + 1}</div>
      )}
      <input
        className="w-full h-full text-center bg-transparent"
        value={character}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const char = e.target.value.toUpperCase() as Char
          if (!isFilledCell(char)) {
            handleCellValueChange(cellPosition, char)
          }
        }}
        onFocus={() => {
          setActiveCell(cellPosition)
          setFocused(false)
        }}
        maxLength={1}
        ref={inputRef}
        readOnly={isFilledCell(character)}
      />
    </div>
  )
}
