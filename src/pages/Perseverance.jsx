import React from 'react'
import PerseHeaderImage from '../components/PerseHeaderImage'
import PerseverancePara from '../components/PerseverancePara'
import Header from '../components/Header'
import PerseveranceMap from '../components/PerseveranceMap'
import PerseveranceForm from '../components/PerseveranceForm'

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
         <PerseveranceForm />
        </Main>
      </RoverC>
    </>
  )
}

export default Perseverance
