import { createContext, useContext, useEffect, useState } from 'react'

interface ResponsiveContextValue {
  isMobile: boolean
}

const ResponsiveContext = createContext<ResponsiveContextValue>({ isMobile: false })

export function ResponsiveProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <ResponsiveContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export function useResponsive() {
  return useContext(ResponsiveContext)
}
