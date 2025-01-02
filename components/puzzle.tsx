'use client'

import React from 'react'
import { GameProvider } from '@/contexts/GameContext'
import Board from './board/board'
import { ClueList } from './clues/clueList'
import { ShareButton } from './shareLink/shareButton'

export const Puzzle = () => {
  return (
    <GameProvider>
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
    </GameProvider>
  )
}
