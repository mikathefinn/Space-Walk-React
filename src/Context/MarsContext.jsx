import { createContext, useState, useEffect } from 'react'
import placeholder from '/images/rover-placeholder.jpeg'

const MarsContext = createContext()

export const MarsProvider = ({ children }) => {
  const [slideshowImage, setSlideshowImage] = useState(placeholder)


  async function getAndDisplayImage() {
    try {
      const response = await fetch(
        'https://mars-photos.herokuapp.com/api/v1/manifests/curiosity?api_key=ew009QLOkglDGuTtrFtdyQy8oCVTw2KI7gf4VOzQ'
      )
      const data = await response.json()
      const latestSol = data.photo_manifest.max_sol

      const randomSol = Math.floor(Math.random() * latestSol + 1)

      const photosResponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol}&api_key=ew009QLOkglDGuTtrFtdyQy8oCVTw2KI7gf4VOzQ`
      )
      const photosData = await photosResponse.json()
      //photosData.photos is an array of objects from a randomly selected sol
      //accessing a random image object and retrieving it's source url
      const randomImageObj =
        photosData.photos[
          Math.floor(Math.random() * photosData.photos.length + 1)
        ]
     setSlideshowImage(randomImageObj.img_src)
      
    } catch (error) {
      console.log('error fetching data', error)
    }
  }

  return (
    <MarsContext.Provider value={{ slideshowImage, setSlideshowImage, getAndDisplayImage }}>
      {children}
    </MarsContext.Provider>
  )
}
export default MarsContext
