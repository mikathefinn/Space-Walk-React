import React from 'react'
import Header from '../components/Header'
import { Rover, Main } from '../styles/RoverStyles'
import curiosityArt from '/public/images/curiosity-art.jpg'

function Curiosity() {
  return (
    <>
      <Rover>
        <Header />
        <Main>
          <h1>Curiosity</h1>
          <p className='para'>
            Meet Curiosity, a true marvel of engineering and exploration. In
            August 2012, this intrepid robotic geologist made a dramatic landing
            on the Martian surface, embarking on a mission of unparalleled
            significance. Curiosity's primary goal is to decipher the Red
            Planet's past and its potential for habitability.
          </p>
          <img src={curiosityArt} alt="Artist's view of the Curiosity" />
          <p className='para'>
            This six-wheeled rover is a testament to scientific ingenuity,
            equipped with a sophisticated array of instruments. Curiosity boasts
            a remarkable camera system, spectrometers, and even a drill,
            enabling it to examine Martian rocks, soil, and atmosphere. Over the
            years, it has made numerous groundbreaking discoveries.
          </p>
          <p className='para'>
            One of its most notable findings is the presence of an ancient
            lakebed, offering compelling evidence of Mars' watery past.
            Curiosity's longevity, lasting well beyond its original mission
            timeline, has allowed it to explore the foothills of Mount Sharp, a
            five-kilometer-high peak within Gale Crater. Its journey continues
            to captivate the scientific community and space enthusiasts
            worldwide, reshaping our understanding of Mars' history and
            potential for life.
          </p>
          <p className='para'>
            Curiosity has captured hundreds of thousands of photos from the
            surface of Mars using its numerous cameras. NASA maintains an
            extensive database of these images, allowing you to explore the
            latest visuals from the Red Planet. To begin the slideshow, simply
            click the button below. Each image is accompanied by the 'sol' (a
            Martian day count), the date it was taken, and the specific camera
            used to capture it.
          </p>
        </Main>
      </Rover>
    </>
  )
}

export default Curiosity
