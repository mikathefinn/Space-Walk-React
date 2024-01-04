import React from 'react'
// import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { WelcomeStyles } from '../styles/WelcomeStyles'
import mars from '/public/images/mars.png'
import { Link } from 'react-router-dom'

function Welcome() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <WelcomeStyles isVisible={isVisible}>
        <div className='wrap'>
          <div className='container'>
            <h1>Welcome to</h1>
            <h2>SpaceWalk</h2>
          </div>

          <Link to='/Facts'>
            <img src={mars} alt='Mars' />
          </Link>
        </div>
      </WelcomeStyles>
    </>
  )
}

export default Welcome
