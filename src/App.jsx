
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Rovers from './pages/Rovers'
import Welcome from './components/Welcome'
import Header from './components/Header'
import Curiosity from './pages/Curiosity'
import Weather from './pages/Weather'
import Slideshow from './pages/Slideshow'
import Facts from './pages/Facts'
import Perseverance from './pages/Perseverance'
import  { MarsProvider } from './Context/MarsContext'

function App() {
  return (
    <>
      <MarsProvider>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <div className='wrapper-main'>
                  
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

            <Route
              path='/slideshow'
              element={
                <div>
                  <Slideshow />
                </div>
              }
            />
            <Route
              path='/facts'
              element={
                <div>
                  <Facts />
                </div>
              }
            />
            <Route
              path='/perseverance'
              element={
                <div>
                  <Perseverance />
                </div>
              }
            />
          </Routes>
        </Router>
      </MarsProvider>
    </>
  )
}
export default App
