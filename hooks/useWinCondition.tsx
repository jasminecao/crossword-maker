import { useGameContext } from '@/contexts/GameContext'
import { useEffect, useState } from 'react'

export const useWinCondition = (): [boolean, number] => {
  const [gameWon, setGameWon] = useState(false)
  const [timeSeconds, setTimeSeconds] = useState(0)
  const { grid, solution } = useGameContext()

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (!gameWon) {
      interval = setInterval(() => {
        setTimeSeconds((timeSeconds) => timeSeconds + 1)
      }, 1000)
    } else {
      interval && clearInterval(interval)
    }
    return () => {
      interval && clearInterval(interval)
    }
  }, [gameWon])

  // always return false if undefined gridAnswer
  if (!solution) {
    return [false, timeSeconds]
  }

  let allCorrect = true
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell !== solution[rowIndex][colIndex]) {
        allCorrect = false
      }
    })
  })

  if (allCorrect && !gameWon) {
    setGameWon(true)
  }

  return [gameWon, timeSeconds]
}
