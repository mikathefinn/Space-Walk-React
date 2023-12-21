import React from 'react'

function PerseveranceMap() {
  return (
    <>
           <h2 className='perse-header'>Where is Perseverance now?</h2>
          <iframe className='perse-map' src='https://mars.nasa.gov/maps/location/?mission=M20&site=NOW' width='800' height='450' scrolling='no' frameborder='0' allowfullscreen></iframe>
          <p className="location"><span>Perseverance Rover Location: </span>This interactive map shows the landing site for NASA's Perseverance rover within Jezero Crater. Perseverance landed on Feb. 18, 2021. The map also shows the location of the Mars Helicopter.</p>
    </>
  )
}

export default PerseveranceMap