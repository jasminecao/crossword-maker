'use client'

import React from 'react'
import { GameProvider } from '@/contexts/GameContext'
import Board from './board/board'
import { ClueList } from './clues/clueList'
import { ShareButton } from './shareLink/shareButton'
import { PuzzleWrapper } from './puzzleWrapper'
import type { ClueListType, GameMode, Grid } from '@/types'

interface PuzzleProps {
  grid?: Grid
  clues?: ClueListType
  mode: GameMode
}

export const Puzzle = ({ grid, clues, mode }: PuzzleProps) => {
  return (
    <GameProvider gridInput={grid} clueInput={clues} mode={mode}>
      <PuzzleWrapper>
        <div className="sm:flex h-full">
          <div className="w-full sm:w-[33vw] sm:h-[33vw] mb-2">
            <Board />
          </div>
          <div
            className="w-full sm:w-[33vw] h-full flex flex-col justify-between
"
          >
            <ClueList />
            <ShareButton />
          </div>
        </div>
      </PuzzleWrapper>
    </GameProvider>
  )
}
