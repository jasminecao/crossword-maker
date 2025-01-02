'use client'

import React from 'react'
import { GameProvider } from '@/contexts/GameContext'
import Board from './board/board'
import { ClueList } from './clues/clueList'
import { ShareButton } from './shareLink/shareButton'
import { PuzzleWrapper } from './puzzleWrapper'
import { ClueListType, GameMode, Grid } from '@/types'

interface PuzzleProps {
  gridAnswer: Grid
  clues?: ClueListType
  mode: GameMode
}

export const Puzzle = ({ gridAnswer, clues, mode }: PuzzleProps) => {
  return (
    <GameProvider gridAnswer={gridAnswer} clueInput={clues} mode={mode}>
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
            {mode === GameMode.EDIT && <ShareButton />}
          </div>
        </div>
      </PuzzleWrapper>
    </GameProvider>
  )
}
