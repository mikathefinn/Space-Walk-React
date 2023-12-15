import React from 'react'
import Header from '../components/Header'
import Slides from '../components/Slides'

import { Main, RoverC } from '../styles/RoverStyles'


function Slideshow() {
  return (
    <>
      <RoverC>
        <Header />
        <Main>
          <h1>Images taken by Curiosity in Mars</h1>
          <p className='para'>
            Curiosity has been diligently capturing the Martian landscape
            through hundreds of thousands of images during its mission. These
            snapshots offer a unique perspective on the Red Planet's geological
            features, ancient history, and diverse terrain.
          </p>
          <p className='para'>
            To experience this visual journey, click the button below to start
            the slideshow. Explore the wonders of Mars and appreciate the
            scientific marvels that Curiosity has unveiled, providing valuable
            insights into the mysteries of our neighboring planet.
          </p>
          <Slides />
        </Main>
      </RoverC>
    </>
  )
}

export default Slideshow
