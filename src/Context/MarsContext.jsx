import { createContext, useState, useEffect } from 'react'
import placeholder from '/images/rover-placeholder.jpeg'

const MarsContext = createContext()

export const MarsProvider = ({ children }) => {
  //*******************CURIOSITY**************/

  const [slideshowImage, setSlideshowImage] = useState(placeholder)
  const [date, setDate] = useState('')
  const [sol, setSol] = useState('')
  const [camera, setCamera] = useState('')

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
      setSlideshowImage(randomImgObj.img_src)
      // set the data to be displayed
      setDate(`Earth date: ${randomImgObj.earth_date}`)
      setSol(`Mars sol: ${randomImgObj.sol}`)
      setCamera(`Camera: ${randomImgObj.camera.full_name}`)
    } catch (error) {
      console.log('error fetching data', error)
    }
  }

  // ************ PERSEVERANCE ********************/

  const [startDate, setStartDate] = useState(new Date())
  const [data, setData] = useState(null)

  //create a SET for unique camera names  - duplicates won't be added AUTOMATICALLY
  const [cameras, setCameras] = useState(new Set())
  //camerasArray to hold the array representation of the cameras Set
  const [camerasArray, setCamerasArray] = useState([])

  const formatDate = (date) => {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0') // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  const handleDateChange = (date) => {
    setStartDate(date)
  }

  useEffect(() => {
    const fetchData = async () => {
      const formattedDate = formatDate(startDate)
      console.log('Formatted Date:', formattedDate)

      try {
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=ew009QLOkglDGuTtrFtdyQy8oCVTw2KI7gf4VOzQ&earth_date=${formattedDate}`
        )
        const responseData = await response.json()
        setData(responseData)

        console.log('data from api call', responseData)

        responseData.photos.forEach((item) => {
          // add camera names to the Set
          //Set needs to be changed to an array for further manipulation
          setCameras(
            (prevCameras) => new Set([...prevCameras, item.camera.full_name])
          )
        })
      } catch (error) {
        console.log('error fetching data', error)
      }
    }
    fetchData()
  }, [startDate])

  //create a cameras array and update camerasArray whenever cameras Set changes
  useEffect(() => {
    setCamerasArray(Array.from(cameras))
    console.log('the array', camerasArray)
  }, [cameras])

  return (
    <MarsContext.Provider
      value={{
        slideshowImage,
        setSlideshowImage,
        date,
        setDate,
        sol,
        setSol,
        camera,
        setCamera,
        getAndDisplayImage,
        startDate,
        camerasArray,
        handleDateChange,
      }}>
      {children}
    </MarsContext.Provider>
  )
}
export default MarsContext
