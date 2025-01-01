import { useRef } from 'react'

export const useInputFocus = (): [
  React.RefObject<HTMLInputElement | null>,
  () => void
] => {
  const htmlElRef = useRef(null)
  const setFocus = () => {
    const input = htmlElRef.current as HTMLInputElement | null
    input && input.focus()
  }

  return [htmlElRef, setFocus]
}
