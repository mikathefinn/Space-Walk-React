import React from 'react'

import Header from '../components/Header'
import RoverImages from '../components/RoverImages'
import RoverIntro from '../components/RoverIntro'

import {Main, Rover} from '../styles/RoverStyles'


function Rovers() {
  return (
    <Rover>
      <Header />
    <Main>
     <RoverIntro />
      <RoverImages />
      </Main>
    </Rover>
  )
}

export default Rovers
