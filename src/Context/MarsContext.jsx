import { createContext, useState, useEffect } from 'react'
import placeholder from '/images/rover-placeholder.jpeg'

const MarsContext = createContext()

export const MarsProvider = ({ children }) => {
  const [slideshowImage, setSlideshowImage] = useState(placeholder)

  return (
    <MarsContext.Provider value={{ slideshowImage }}>
      {children}
    </MarsContext.Provider>
  )
}
export default MarsContext
