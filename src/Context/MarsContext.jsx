import { createContext, useState, useEffect } from 'react'
import placeholder from '/images/rover-placeholder.jpeg'

const MarsContext = createContext()

export const MarsProvider = ({ children }) => {
  const [slideshowImage, setSlideshowImage] = useState(placeholder)
  const [date, setDate] = useState('')
  const [sol, setSol] = useState('')

  async function getAndDisplayImage() {
    try {
      const response = await fetch(
        'https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=ew009QLOkglDGuTtrFtdyQy8oCVTw2KI7gf4VOzQ'
      )
      const data = await response.json()
      //filter through the photos to find ones with FHAZ camera
      const filteredData = data.photo_manifest.photos.filter((item) =>
        item.cameras.includes('FHAZ')
      )

      const randomSol =
        filteredData[Math.floor(Math.random() * filteredData.length)].sol

      const photosResponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol}&api_key=ew009QLOkglDGuTtrFtdyQy8oCVTw2KI7gf4VOzQ`
      )
      const photosData = await photosResponse.json()
      //photosData.photos is an array of objects from a randomly selected sol
      //that has FHAZ images -- filter through to get only those images

      const filteredPhotos = photosData.photos.filter(
        (item) => item.camera.name === 'FHAZ'
      )

      //choose the source url of a random image from the filteredPhotos
      const randomImgObj =
        filteredPhotos[Math.floor(Math.random() * filteredPhotos.length)]

      console.log(randomImgObj)
      setSlideshowImage(randomImgObj.img_src)
      // set the data to be displayed
      setDate(`Earth date: ${randomImgObj.earth_date}`)
      setSol(`Mars sol: ${randomImgObj.sol}`)
    } catch (error) {
      console.log('error fetching data', error)
    }
  }

  return (
    <MarsContext.Provider
      value={{
        slideshowImage,
        setSlideshowImage,
        date,
        setDate,
        sol,
        setSol,
        getAndDisplayImage,
      }}>
      {children}
    </MarsContext.Provider>
  )
}
export default MarsContext
