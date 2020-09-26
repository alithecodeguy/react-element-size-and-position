import { useState, useEffect } from 'react'
export function useElementProperties(elementID) {
  const [elementProperties, setElementProperties] = useState(undefined)
  useEffect(() => {
    function handleResize() {
      setElementProperties(
        document.getElementById(elementID)
          ? document.getElementById(elementID).getBoundingClientRect()
          : null
      )
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return elementProperties
}
