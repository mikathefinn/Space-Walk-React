import React from 'react'
import Header from '../components/Header'
import { Rover, WeatherDiv } from '../styles/RoverStyles'

function Weather() {
  return (
    <>
      <Rover>
        <Header />
        <WeatherDiv>
        
            <iframe
              src='https://mars.nasa.gov/layout/embed/image/mslweather/'
              scrolling='no'
              frameborder='0'></iframe>
         
          </WeatherDiv>
      </Rover>
    </>
  )
}

export default Weather
