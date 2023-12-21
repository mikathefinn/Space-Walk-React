import React from 'react'
import CuriosityPara from '../components/CuriosityPara'
import Header from '../components/Header'
import HeaderImageCur from '../components/HeaderImageCur'

import { RoverC, Main } from '../styles/RoverStyles'


function Curiosity() {
  return (
    <>
      <RoverC>
        <Header />
        <Main>
        <HeaderImageCur/>
  <CuriosityPara/>
        </Main>
      </RoverC>
    </>
  )
}

export default Curiosity
