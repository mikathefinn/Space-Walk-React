import React from 'react'
import Header from '../components/Header'
import { Rover, Main } from '../styles/RoverStyles'

function Weather() {
  return (
    <>
      <Rover>
        <Header />
    <Main>
        <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/'   scrolling='no' frameborder='0'></iframe>
        </Main>
      </Rover>
    </>
  )
}

export default Weather
