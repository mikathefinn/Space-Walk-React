import React, { useContext, useState, useEffect } from 'react'
import MarsContext from '../../Context/MarsContext'

function Button() {
  const { getAndDisplayImage, setDate, setSol, setCamera } =
    useContext(MarsContext)

  const [slideshow, setSlideshow] = useState(false)
  const [buttonText, setButtonText] = useState('Start the slideshow')

  useEffect(() => {
    let intervalId

    if (slideshow) {
      // Start the slideshow interval
      intervalId = setInterval(() => {
        getAndDisplayImage()
      }, 5000)
    } else {
      // Clear the interval and date + sol display when slideshow is stopped
      clearInterval(intervalId)
      setDate('')
      setSol('')
      setCamera('')
    }

    // Cleanup interval when the slideshow is stopped
    return () => clearInterval(intervalId)
  }, [slideshow, getAndDisplayImage])

  const handleClick = () => {
    setSlideshow(!slideshow) // Toggle slideshow state
    setButtonText(slideshow ? 'Start the slideshow' : 'Stop the slideshow')
  }

  return (
    <>
      <button className='slideshow-button' onClick={handleClick}>{buttonText}</button>
    </>
  )
}

export default Button
