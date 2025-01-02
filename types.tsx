export type EmptyChar = ''

export type FilledChar = '.'

export type LetterChar =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'

export type Char = LetterChar | EmptyChar | FilledChar

export type Grid = Char[][]

export type Position = { row: number; col: number }

export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum ClueDirection {
  ACROSS = 'ACROSS',
  DOWN = 'DOWN',
}

export type ClueListType = Record<ClueDirection, Record<number, string>>

export enum GameMode {
  PLAY = 'PLAY',
  EDIT = 'EDIT',
}