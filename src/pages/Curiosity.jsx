import React from 'react'
import CuriosityPara from '../components/CuriosityPara'
import Header from '../components/Header'
import TextImg from '../components/TextImg'

import { RoverC, Main } from '../styles/RoverStyles'


function Curiosity() {
  return (
    <>
      <RoverC>
        <Header />
        <Main>
        <TextImg/>
  <CuriosityPara/>
        </Main>
      </RoverC>
    </>
  )
}

export default Curiosity
