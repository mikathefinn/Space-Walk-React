import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import mars from '/public/images/mars.png'

const Headers = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding-top: 4rem;
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
    width: 40%;
  }
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
        <div>
          <h1>Welcome to</h1>
          <h2>SpaceWalk</h2>
        </div>
        <img src={mars} alt='Mars' />
      </Headers>
    </>
  )
}

export default Welcome
