import { useState, useEffect } from 'react'

/**
 * Custom hook that debounces a value
 * Useful for search inputs to prevent excessive API calls or re-renders
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

/**
 * Hook that returns the previous value of a state/prop
 */
export function usePrevious<T>(value: T): T | undefined {
  const [previous, setPrevious] = useState<T>()
  
  useEffect(() => {
    setPrevious(value)
  }, [value])
  
  return previous
}
