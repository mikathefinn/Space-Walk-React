import React from 'react'
import { useState } from 'react'

function Button() {
  const [slideshow, setSlideshow] = useState(false)
  const [buttonText, setButtonText] = useState('Start the slideshow')

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
      console.log(photosData)
    } catch (error) {
      console.log('error fetching data', error)
    }
  }

  const handleClick = () => {
    setSlideshow(true)
    if (slideshow === true) {
      setButtonText('Stop the slideshow')
    }
    getAndDisplayImage()
  }

  return (
    <>
      <button onClick={handleClick}>{buttonText}</button>
    </>
  )
}

export default Button
