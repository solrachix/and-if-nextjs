import React, {
  createContext,
  useContext,
  useRef,
  MutableRefObject,
  useEffect
} from 'react'

import Cursor from '../components/Cursor'

interface Cursor {
  DOM: {
    elem: MutableRefObject<HTMLDivElement>
  }
  enter(text: string): void
  leave(): void
}
interface GlobalContextData {
  mouseEnterItem(text: string): void
  mouseLeaveItem(): void
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export const GlobalProvider: React.FC = ({ children }) => {
  const cursorRef = useRef<Cursor>(null)

  const mouseEnterItem = (text: string) => {
    cursorRef.current.enter(text)
  }
  const mouseLeaveItem = () => {
    cursorRef.current.leave()
  }

  return (
    <GlobalContext.Provider value={{ mouseEnterItem, mouseLeaveItem }}>
      {children}
      <Cursor ref={cursorRef} />
    </GlobalContext.Provider>
  )
}

// Hook próprio
export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext)

  return context
}
