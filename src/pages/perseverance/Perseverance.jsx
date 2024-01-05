import React from 'react'
import PerseHeaderImage from './PerseHeaderImage'
import PerseverancePara from './PerseverancePara'
import Header from '../../components/Header'
import PerseveranceMap from './PerseveranceMap'
import PerseveranceForm from './PerseveranceForm'


import { RoverC, Main } from '../../styles/RoverStyles'

function Perseverance() {
  return (
    <>
      <RoverC>
        <Header />
        <Main>
          <PerseHeaderImage />
          <PerseverancePara />
          <PerseveranceMap />
          <PerseveranceForm />
          
        </Main>
      </RoverC>
    </>
  )
}

export default Perseverance
