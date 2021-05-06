import { useState, useEffect, useCallback } from 'react'

export default function useResize<T>(
  myRef: React.RefObject<T | HTMLDivElement>
): number {
  const getWidth = useCallback(() => myRef?.current?.offsetWidth, [myRef])

  const [width, setWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth())
    }

    if (myRef.current) {
      setWidth(getWidth())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [myRef, getWidth])

  return width && width > 25 ? width - 25 : width
}
