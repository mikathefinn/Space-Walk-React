import React from 'react'
import Header from '../components/Header'
import { RoverC, Main, Anchor } from '../styles/RoverStyles'
import curiosityArt from '/public/images/curiosity-art.jpg'

function Curiosity() {
  return (
    <>
      <RoverC>
        <Header />
        <Main>
          <h1>Curiosity</h1>
          <section className='text-img'>
            <div>
              <p className='para-one'>
                Curiosity, NASA's Mars Science Laboratory mission rover, has
                indeed proven to be an iconic symbol of exploration and
                technological prowess. Since its remarkable landing in Gale
                Crater in 2012, Curiosity has not only surpassed its expected
                mission duration but has also provided a wealth of data that
                continues to fuel scientific inquiry and reshape our
                comprehension of the Martian landscape.
              </p>
              <p className='para-one'>
                One of the key features that distinguishes Curiosity is its
                autonomous capabilities. The rover is equipped with advanced AI
                algorithms that enable it to make decisions on its own, allowing
                it to navigate the Martian terrain, avoid obstacles, and select
                intriguing targets for further study. This autonomy has
                significantly enhanced the rover's efficiency and responsiveness
                to the dynamic challenges of the Red Planet.
              </p>
            </div>
            
              <img className='curiart' src={curiosityArt} alt="Artist's view of the Curiosity" />
           
          </section>
          <p className='para'>
            Curiosity's suite of scientific instruments has been pivotal in
            unraveling Mars' mysteries. The Chemistry and Camera (ChemCam)
            instrument employs a laser to vaporize thin layers of rock, allowing
            for the analysis of the elemental composition of Martian rocks from
            a distance. The Sample Analysis at Mars (SAM) suite investigates the
            chemistry of the atmosphere and analyzes samples drilled from rocks
            and soil. These instruments, along with others, work in tandem to
            provide a comprehensive understanding of the Martian environment.
          </p>
          <p className='para'>
            In addition to its scientific accomplishments, Curiosity has been an
            exceptional photographer, capturing breathtaking images of the
            Martian landscape. Its panoramic views, close-ups of rocks, and
            detailed images of the rover's surroundings have not only
            contributed to scientific analysis but have also engaged the public
            and ignited a sense of wonder about the mysteries of Mars. To check out some of the images captured by the rovers, click <Anchor to='/slideshow'>here.</Anchor>
          </p>
          <p className='para'>
            As Curiosity climbs the foothills of Mount Sharp, it continues to
            uncover layers of geological history that hold clues about Mars'
            evolution. The rover's discoveries have implications not only for
            understanding the planet's past but also for assessing its potential
            habitability and the possibility of past microbial life.
          </p>
          <p className='para'>
            Curiosity's longevity and resilience in the harsh Martian
            environment have surpassed all expectations. Engineers and
            scientists continue to find innovative ways to keep the rover
            operational, ensuring that it can continue its mission of
            exploration and discovery. The success of Curiosity serves as an
            inspiration for future Mars missions and underscores the capacity of
            human ingenuity to overcome the challenges of interplanetary
            exploration.
          </p>
        </Main>
      </RoverC>
    </>
  )
}

export default Curiosity
