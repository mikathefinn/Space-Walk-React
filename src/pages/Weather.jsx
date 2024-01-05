import React from 'react'
import Header from '../components/Header'
import { RoverC, WeatherDiv } from '../styles/RoverStyles'

function Weather() {
  return (
    <>
      <RoverC>
        <Header />
        <WeatherDiv>
        
            <iframe
              src='https://mars.nasa.gov/layout/embed/image/mslweather/'
              scrolling='no'
              frameborder='0'></iframe>
         
          </WeatherDiv>
      </RoverC>
    </>
  )
}

export default Weather
