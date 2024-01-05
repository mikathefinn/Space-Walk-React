import React from 'react'
import Header from '../components/Header'
import { RoverC, Main } from '../styles/RoverStyles'

function Facts() {
  return (
    <>
      <RoverC>
        <Header />
        <Main>
          <h1>Mars - The Red Planet</h1>
          <p className="para">Mars, the fourth planet in our solar system and the farthest terrestrial planet from the Sun, boasts a distinct reddish surface hue attributed to the presence of finely grained iron(III) oxide dust in its soil, earning it the moniker "the Red Planet." With a radius of 3,389.5 km (2,106 mi), Mars has the second smallest size among the planets. The Martian surface exhibits a dichotomy, with the northern hemisphere generally flatter and lower than the southern hemisphere.
</p>
          <p className="para">Sporting a thin atmosphere primarily composed of carbon dioxide, Mars is home to two irregularly shaped natural satellites, Phobos and Deimos. Geologically active, the planet experiences dust devils and marsquakes, akin to earthquakes, beneath its surface. Notable features include the expansive shield volcano Olympus Mons and one of the largest canyons in the Solar System, Valles Marineris. Mars's orbital eccentricity and axial tilt lead to substantial seasonal variations, impacting the polar ice caps' coverage and resulting in surface temperatures ranging from −110 °C (−166 °F) to 35 °C (95 °F). A Martian solar day (sol) lasts 24.5 hours, while a Martian solar year is equivalent to 1.88 Earth years.
</p>
          <p className="para">Formed around 4.5 billion years ago, Mars underwent geological transformations during various periods. The Noachian period, approximately 4.1 to 3.7 billion years ago, witnessed meteor impacts, valley formation, erosion, and the potential presence of water oceans. The Hesperian period (3.7 to 3.2–2 billion years ago) was marked by widespread volcanic activity and flooding, resulting in extensive outflow channels. The current Amazonian period is characterized by the impact of wind on geological processes, with uncertainty about the existence of past life on Mars.
</p>
          <p className="para">Mars, a prominent celestial object in Earth's sky, has been observed since ancient times due to its high-contrast albedo features. Exploration efforts intensified in the late 20th century, with uncrewed spacecraft and rovers. Mariner 4 executed the first flyby in 1965, followed by the Mars 2 orbiter in 1971 and the Viking 1 lander in 1976. As of 2023, at least 11 active probes orbit or reside on the Martian surface. Mars continues to captivate scientific interest and serves as an appealing target for future human missions.
</p>
        </Main>
      </RoverC>
    </>
  )
}

export default Facts
