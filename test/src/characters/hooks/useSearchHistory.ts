import { useState, useCallback } from 'react'

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([])

  const addToHistory = useCallback((id: string) => {
    setHistory((prev) => {
      if (prev.includes(id)) return prev
      return [id, ...prev].slice(0, 3)
    })
  }, [])

  const removeFromHistory = useCallback((id: string) => {
    setHistory((prev) => prev.filter((item) => item !== id))
  }, [])

  const clearHistory = useCallback(() => {
    setHistory([])
  }, [])

  return { history, addToHistory, removeFromHistory, clearHistory }
}
