import React from 'react'
import Header from '../components/Header'
import { Rover } from '../styles/RoverStyles'
import curiosity from '/public/images/curiosity.jpeg'
import perseverance from '/public/images/perseverance.png'

function Rovers() {
  return (
    <Rover>
      <Header />
      <main>
        <h1>Mars rovers</h1>
        <p>
          There are currently two rovers in operation on the surface of Mars,
          operated by NASA Jet Propulsion Laboratory: Curiosity and
          Perseverance. Curiosity landed on Mars in 2012, and Perseverance
          touched down in 2021, accompanied by the first Martian helicopter,
          Ingenuity.
        </p>
        <section className='rovers'>
          <div className='first-rover'>
            <img className='curiosity' src={curiosity} alt="curiosity"/>
            <p>Curiosity</p>
          </div>
          <div className='second-rover'>
            <img className='perseverance' src={perseverance} alt="perseverance"/>
            <p>Perseverance</p>
          </div>
        </section>
      </main>
    </Rover>
  )
}

export default Rovers
