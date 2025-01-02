import { NUM_ROWS } from '@/constants'
import { useGameContext } from '@/contexts/GameContext'
import { Char, ClueListType } from '@/types'
import { Buffer } from 'buffer'

const gameToString = (grid: Char[][], clues: any): string => {
  let gameString = ''
  grid.forEach((row: Char[]) => {
    row.forEach((cell: Char) => {
      gameString += cell
    })
  })

  gameString += 'ACROSS\n'
  Object.keys(clues.ACROSS).forEach((clueKey: string) => {
    gameString += clueKey + '/' + clues.ACROSS[Number(clueKey)] + '\n'
  })

  gameString += 'DOWN\n'
  Object.keys(clues.DOWN).forEach((clueKey: string) => {
    gameString += clueKey + '/' + clues.DOWN[Number(clueKey)] + '\n'
  })

  return gameString
}

export const useLinkGenerator = (): string => {
  const { grid, clues } = useGameContext()
  const gameString = gameToString(grid, clues)
  return Buffer.from(gameString).toString('base64')
}

export const parseLink = (
  str: string
): { grid?: Char[][]; clues?: ClueListType } => {
  const gridText = str && Buffer.from(str, 'base64').toString('ascii')
  if (!gridText) {
    return {}
  }

  const grid = new Array(NUM_ROWS).fill(new Array(NUM_ROWS).fill(''))
  let pos = 0
  for (let i = 0; i < NUM_ROWS; i++) {
    const row = new Array(NUM_ROWS).fill('')
    for (let j = 0; j < NUM_ROWS; j++) {
      row[j] = gridText[pos]
      pos++
    }
    grid[i] = [...row]
  }

  const clues = { ACROSS: {}, DOWN: {} } as ClueListType
  const cluesArr = gridText.slice(pos).split('\n')
  const across = cluesArr.slice(1, cluesArr.indexOf('DOWN'))
  across.forEach((clue) => {
    const [key, value] = clue.split('/')
    clues.ACROSS[Number(key)] = value
  })

  const down = cluesArr.slice(cluesArr.indexOf('DOWN') + 1)
  down.forEach((clue) => {
    const [key, value] = clue.split('/')
    if (key) {
      clues.DOWN[Number(key)] = value
    }
  })

  return { grid, clues }
}
