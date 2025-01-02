'use client'

import React from 'react'
import { GameProvider } from '@/contexts/GameContext'
import Board from './board/board'
import { ClueList } from './clues/clueList'
import { ShareButton } from './shareLink/shareButton'
import { PuzzleWrapper } from './puzzleWrapper'
import { ClueListType, GameMode, Grid } from '@/types'
import { HomeLink } from './info/homeLink'
import { WinModal } from './win/winModal'

interface PuzzleProps {
  solution?: Grid
  clues?: ClueListType
  mode: GameMode
}

export const Puzzle = ({ solution, clues, mode }: PuzzleProps) => {
  return (
    <GameProvider solution={solution} clueInput={clues} mode={mode}>
      <PuzzleWrapper>
        <div className="my-auto sm:h-2/3">
          <div className="sm:flex h-full">
            <div className="w-full sm:w-[33vw] sm:h-[33vw] mb-2">
              <Board />
            </div>
            <div
              className="w-full h-full sm:w-[33vw] sm:h-[33vw] flex flex-col justify-between
"
            >
              <ClueList />
              {mode === GameMode.EDIT && <ShareButton />}
              {mode === GameMode.PLAY && <HomeLink />}
            </div>
          </div>
        </div>
        <WinModal />
      </PuzzleWrapper>
    </GameProvider>
  )
}
