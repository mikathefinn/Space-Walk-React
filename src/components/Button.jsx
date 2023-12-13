import React from 'react'
import { useContext, useState } from 'react'
import MarsContext from '../Context/MarsContext'

function Button() {
  const { getAndDisplayImage} = useContext(MarsContext)

  const [slideshow, setSlideshow] = useState(false)
  const [buttonText, setButtonText] = useState('Start the slideshow')


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
