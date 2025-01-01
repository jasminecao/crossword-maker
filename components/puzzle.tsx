'use client'

import React from 'react'
import { GameProvider } from '@/contexts/GameContext'
import Board from './board/board'
import { ClueList } from './clues/clueList'
import { ShareButton } from './shareLink/shareButton'

export const Puzzle = () => {
  return (
    <GameProvider>
      <div className="flex h-full">
        <div className="w-1/2 h-full">
          <Board />
        </div>
        <div
          className="w-1/2 h-full flex flex-col justify-between
"
        >
          <ClueList />
          <ShareButton />
        </div>
      </div>
    </GameProvider>
  )
}
