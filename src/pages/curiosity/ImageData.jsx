import React from 'react'
import { SlideshowStyles } from '../../styles/SlideshowStyles'
import { useContext } from 'react'
import MarsContext from '../../Context/MarsContext'

function ImageData() {
  const { date, sol, camera } = useContext(MarsContext)

  return (
    <div className='data'>
      <p className='camera'>{camera}</p>
      <p className='date'>{date}</p>
      <p className='sol'>{sol}</p>
    </div>
  )
}

export default ImageData
