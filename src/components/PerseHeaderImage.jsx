import React from 'react'
import perseArt from '/images/perseverance-art.png'

function PerseHeaderImage() {
  return (<>
    <h1>Perseverance</h1>
    <section className='text-img'>
      <div className='para-container'>
        <p className='para-one'>
        Perseverance, NASA's latest rover on the Martian surface, stands as a testament to human determination and technological advancement. Since its touchdown in Jezero Crater in February 2021, Perseverance has been a beacon of scientific curiosity and exploration, building upon the legacy of its predecessor, Curiosity.
        </p>
        <p className='para-one'>
        Perseverance shares Curiosity's autonomous capabilities, navigating the Martian terrain with precision and intelligence. Equipped with enhanced AI systems, Perseverance optimizes its path, avoiding obstacles, and making independent decisions that contribute to its mission's success. This autonomy allows the rover to adapt to the challenges presented by the Martian landscape and maximize its efficiency.
        </p>
      </div>
      
        <img className='rover-art' src={perseArt} alt="Artist's view of Perseverance" />
     
    </section>
    </>
  )
}

export default PerseHeaderImage