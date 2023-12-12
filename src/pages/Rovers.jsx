import React from 'react'
import Header from '../components/Header'
import { Rover, Main } from '../styles/RoverStyles'
import { NavLink } from '../styles/HeaderStyles'
import curiosity from '/public/images/curiosity.jpeg'
import perseverance from '/public/images/perseverance.png'

function Rovers() {
  return (
    <Rovers>
      <Header />
      <Main>
        <h1>Mars rovers</h1>
        <p className='intro'>
          There are currently two rovers in operation on the surface of Mars,
          operated by NASA Jet Propulsion Laboratory: Curiosity and
          Perseverance. Curiosity landed on Mars in 2012, and Perseverance
          touched down in 2021, accompanied by the first Martian helicopter,
          Ingenuity.
        </p>
        <section className='rovers'>
          <div className='first-rover'>
            <img className='curiosity' src={curiosity} alt='curiosity' />
            <NavLink to='/curiosity'>Curiosity</NavLink>
          </div>
          <div className='second-rover'>
            <img
              className='perseverance'
              src={perseverance}
              alt='perseverance'
            />
            <NavLink>Perseverance</NavLink>
          </div>
        </section>
      </Main>
    </Rovers>
  )
}

export default Rovers
