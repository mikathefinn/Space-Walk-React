import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Curiosity from './pages/curiosity/Curiosity'
import Weather from './pages/Weather'
import Facts from './pages/Facts'
import Perseverance from './pages/perseverance/Perseverance'
import { MarsProvider } from './Context/MarsContext'

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
