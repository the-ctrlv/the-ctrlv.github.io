import { useEffect, useState } from 'react'

export const getClassNames = (...args) => args.filter(Boolean).join(' ')

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export const scrollToContact = (evt, scrolledEl) => {
  evt.preventDefault()
  const y = scrolledEl.current.getBoundingClientRect().top + window.pageYOffset - 140
  window.scrollTo({ top: y, behavior: 'smooth' })
}
