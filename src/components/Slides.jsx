import React from 'react'
import { SlideshowStyles } from '../styles/SlideshowStyles'
import Button from './Button'
import ImageData from './ImageData'
import { useContext } from 'react'
import MarsContext from '../Context/MarsContext'


function Slides() {
  const { slideshowImage } = useContext(MarsContext)

  return (
    <>
      <SlideshowStyles>
        <Button />
        <figure className='latest-image'>
          <img id='curiosity-img' src={slideshowImage} alt='Images from Mars' />
        </figure>
       <ImageData />
      </SlideshowStyles>
    </>
  )
}

export default Slides
