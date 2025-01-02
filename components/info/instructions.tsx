import { useGameContext } from '@/contexts/GameContext'
import { GameMode } from '@/types'

const CodeFont = ({ text }: { text: string }) => {
  return (
    <span className="rounded px-1" style={{ backgroundColor: '#e5e7eb' }}>
      {text}
    </span>
  )
}

export const Instructions = () => {
  const { mode } = useGameContext()

  return (
    <div className="w-1/2 mx-4 text-xs">
      {mode === GameMode.EDIT && (
        <p>
          press <CodeFont text={'.'} /> to fill a square
        </p>
      )}
      <p>
        press <CodeFont text={'enter'} /> to switch directions
      </p>
    </div>
  )
}
