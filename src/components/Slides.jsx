import React from 'react'
import {SlideshowStyles} from '../styles/SlideshowStyles'
import Button from '../components/Button'
import placeholder from '/images/rover-placeholder.jpeg'

function Slides() {
  return (
    <>
      <SlideshowStyles>
        <Button />
        <figure className='latest-image'>
          <img id='curiosity-img' src={placeholder} alt='Images from Mars' />
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
