import { Direction } from './types'

export const NUM_ROWS = 5

export const DEFAULT_GRID = new Array(NUM_ROWS).fill(
  new Array(NUM_ROWS).fill('')
)
export const DEFAULT_POSITION = { row: 0, col: 0 }
export const DEFAULT_DIRECTION = Direction.RIGHT
export const DEFAULT_CLUES = { ACROSS: {}, DOWN: {} }

export const BACKGROUND_COLOR = 'slate-200'
export const LIGHT_BACKGROUND_COLOR = 'slate-100'

export const VERTICAL_DIRECTIONS = [Direction.DOWN, Direction.UP]
export const HORIZONTAL_DIRECTIONS = [Direction.RIGHT, Direction.LEFT]