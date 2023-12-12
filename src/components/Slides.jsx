import React from 'react'
import { SlideshowStyles } from '../styles/SlideshowStyles'
import Button from '../components/Button'
import { useContext, useState } from 'react'
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
        <div className='data'>
          <p className='date'></p>
          <p className='sol'></p>
          <p className='camera'></p>
        </div>
      </SlideshowStyles>
    </>
  )
}

export default Slides
