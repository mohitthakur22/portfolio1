import { useState, useEffect } from 'react'

export function useTyping(words, speed = 100, delayBetween = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout

    if (!isDeleting) {
      if (text.length < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setText(words[wordIndex].slice(0, text.length + 1))
        }, speed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delayBetween)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, text.length - 1))
        }, speed / 2)
      } else {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, speed, delayBetween])

  return text
}
