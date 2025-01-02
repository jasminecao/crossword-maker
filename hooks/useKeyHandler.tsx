import { getNextPosition } from '@/utils'
import { Direction, GameMode, Position } from '@/types'
import { RefObject, useEffect } from 'react'
import { VERTICAL_DIRECTIONS } from '@/constants'
import { useGameContext } from '@/contexts/GameContext'

const directionKeyMap: Record<string, Direction> = {
  ArrowUp: Direction.UP,
  ArrowDown: Direction.DOWN,
  ArrowLeft: Direction.LEFT,
  ArrowRight: Direction.RIGHT,
}

export const useKeyHandler = (
  ref: RefObject<HTMLDivElement | null>,
  direction: Direction,
  setDirection: (direction: Direction) => void,
  position: Position,
  setPosition: (position: Position) => void,
  toggleFill: (position: Position) => void
) => {
  const { mode } = useGameContext()

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (ref.current && ref.current.contains(event.target)) {
        switch (event.key) {
          case '.':
            if (mode === GameMode.EDIT) {
              toggleFill(position)
            }
            break
          case 'Enter':
            const oppositeDir = VERTICAL_DIRECTIONS.includes(direction)
              ? Direction.RIGHT
              : Direction.DOWN
            setDirection(oppositeDir)
            break
          case 'ArrowUp':
          case 'ArrowDown':
          case 'ArrowLeft':
          case 'ArrowRight':
            const newDirection = directionKeyMap[event.key]
            const newPosition = getNextPosition(position, newDirection)
            setPosition(newPosition)
            setDirection(newDirection)
            break
          default:
            return
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [direction, position, setDirection, setPosition, toggleFill, ref])
}
