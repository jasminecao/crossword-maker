import { useGameContext } from '@/contexts/GameContext'
import { Char } from '@/types'

const gameToString = (grid: Char[][], clues: any): string => {
  let gameString = ''
  grid.forEach((row: Char[]) => {
    row.forEach((cell: Char) => {
      if (cell === '') {
        gameString += ' '
      } else {
        gameString += cell
      }
    })
  })

  gameString += '\nACROSS\n'
  Object.keys(clues.ACROSS).forEach((clueKey: string) => {
    gameString += clueKey + '/' + clues.ACROSS[Number(clueKey)] + '\n'
  })

  gameString += '\nDOWN\n'
  Object.keys(clues.DOWN).forEach((clueKey: string) => {
    gameString += clueKey + '/' + clues.DOWN[Number(clueKey)] + '\n'
  })

  return gameString
}

export const useLinkGenerator = (): string => {
  const { grid, clues } = useGameContext()
  const gameString = gameToString(grid, clues)

  const enc = new TextEncoder()
  const encStr = enc.encode(gameString)
  const arrStr = Array.from(encStr, (point) => point.toString(16))
  const returnString = arrStr.join('')
  return returnString
}
