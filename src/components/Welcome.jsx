import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import mars from '/public/images/mars.png'

const Headers = styled.div`
padding-top: 6rem;
  font-size: 3.6rem;
  letter-spacing: 0.7rem;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 3s ease;

  display: flex;
  flex-direction: row;
justify-content: space-around;
align-items: center;

  h2 {
    padding: 1rem 0 0 8rem;
  }
  img {
    width: 30%
  }

  .headers (

    display: flex;
    flex-direction: column;
  )
`

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
      <Headers isVisible={isVisible}>
        <div className='Headers.headers'>
          <h1>Welcome to</h1>
          <h2>SpaceWalk</h2>
        </div>
        <img src={mars} alt='Mars' />
      </Headers>
    </>
  )
}

export default Welcome
