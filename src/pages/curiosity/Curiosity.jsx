import React from 'react'
import CuriosityPara from './CuriosityPara'
import Header from '../../components/Header'
import HeaderImageCur from './HeaderImageCur'
import Slides from './Slides'
import { RoverC, Main } from '../../styles/RoverStyles'

function Curiosity() {
  return (
    <>
      <RoverC>
        <Header />
        <Main>
          <HeaderImageCur />
          <CuriosityPara />
          <Slides />
        </Main>
      </RoverC>
    </>
  )
}

export default Curiosity
