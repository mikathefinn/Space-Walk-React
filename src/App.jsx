import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Rovers from './pages/Rovers'
import Welcome from './components/Welcome'
import Header from './components/Header'
import Curiosity from './pages/Curiosity'
import Weather from './pages/Weather'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <div className='wrapper-main'>
                <Header />
                <Welcome />
              </div>
            }
          />
          <Route
            path='/rovers'
            element={
              <div>
                <Rovers />
              </div>
            }
          />
          <Route
            path='/curiosity'
            element={
              <div>
                <Curiosity />
              </div>
            }
          />

          <Route
            path='/weather'
            element={
              <div>
                <Weather />
              </div>
            }
          />
    
        </Routes>
      </Router>
    </>
  )
}

export default App
