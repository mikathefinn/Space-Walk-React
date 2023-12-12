import React from 'react'
import curiosityArt from '/images/curiosity-art.jpg'

function TextImg() {
  return (<>
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
    </>
  )
}

export default TextImg