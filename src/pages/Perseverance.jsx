import React from 'react'
import PerseHeaderImage from '../components/PerseHeaderImage'
import PerseverancePara from '../components/PerseverancePara'
import Header from '../components/Header'
import PerseveranceMap from '../components/PerseveranceMap'


import { RoverC, Main } from '../styles/RoverStyles'

function Perseverance() {
  return (
    <>
      <RoverC>
        <Header />
        <Main>
          <PerseHeaderImage/>
          <PerseverancePara />
         <PerseveranceMap/>
        </Main>
      </RoverC>
    </>
  )
}

export default Perseverance
