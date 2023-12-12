import React from 'react'
import { NavLink } from '../styles/HeaderStyles'
import curiosity from '/images/curiosity.jpeg'
import perseverance from '/images/perseverance.png'


function RoverImages() {
  return (
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
  )
}

export default RoverImages