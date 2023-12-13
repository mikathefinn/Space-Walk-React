import React from 'react'
import { SlideshowStyles } from '../styles/SlideshowStyles'
import { useContext } from 'react'
import MarsContext from '../Context/MarsContext'


function ImageData() {

    
  return (
    <div className='data'>
    <p className='date'></p>
    <p className='sol'></p>
    <p className='camera'></p>
  </div>
  )
}

export default ImageData