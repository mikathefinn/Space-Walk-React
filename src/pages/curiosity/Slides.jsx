import React from 'react'
import { SlideshowStyles } from '../../styles/SlideshowStyles'
import Button from './Button'
import ImageData from './ImageData'
import { useContext } from 'react'
import MarsContext from '../../Context/MarsContext'

function Slides() {
  const { slideshowImage } = useContext(MarsContext)

  return (
    <>
      <h2 className='persecuri-header'>Images taken by Curiosity in Mars</h2>
      <p className='para'>
        Curiosity has been diligently capturing the Martian landscape through
        hundreds of thousands of images during its mission. These snapshots
        offer a unique perspective on the Red Planet's geological features,
        ancient history, and diverse terrain.
      </p>
      <p className='para'>
        To experience this visual journey, click the button below to start the
        slideshow. Explore the wonders of Mars and appreciate the scientific
        marvels that Curiosity has unveiled, providing valuable insights into
        the mysteries of our neighboring planet.
      </p>
      <SlideshowStyles>
        <Button />
        <figure className='latest-image'>
          <img id='rover-img' src={slideshowImage} alt='Images from Mars' />
        </figure>
        <ImageData />
      </SlideshowStyles>
    </>
  )
}

export default Slides
