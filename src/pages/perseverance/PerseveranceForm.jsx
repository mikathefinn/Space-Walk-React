import React from 'react'
import { useContext } from 'react'
import MarsContext from '../../Context/MarsContext'

import { SlideshowStyles } from '../../styles/SlideshowStyles'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

function PerseveranceForm() {
  const {
    startDate,
    setStartDate,
    camerasArray,
    setSelectedCamera,
    selectedImage,
  } = useContext(MarsContext)

  const handleCameraChange = (event) => {
    // Update the selected camera when the dropdown changes
    setSelectedCamera(event.target.value)
  }
  const css = `
  .myselected:not([disabled])
  {
    font-weight: bold;
    border: 2px solid orange;
  }
  
  .my-selected:hover:not([disabled]) { 
    border-color: #ff9d00;
    background-color: #ff9d00; 
    color: #ff9d00;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
  `

  return (
    <>
      <SlideshowStyles>
        <div className='images-intro'>
          <h2>Images taken by Perseverance</h2>
          <p>
            You can browse images taken by the rover by choosing a date and
            selecting a camera. Keep in mind that Perseverance does not send
            images back to earth daily so if your selected date doesn't allow
            you to choose a camera, then just try a different date.{' '}
          </p>
        </div>
        <form>
          <div className='wrap'>
            <style>{css}</style>
            <DayPicker
              mode='single'
              selected={startDate}
              onSelect={setStartDate}
              modifiersClassNames={{
                selected: 'my-selected',
                today: 'my-today',
              }}
              modifiersStyles={{
                disabled: { fontSize: '75%' },
              }}
              footer='Select a date first, then choose a camera from the dropdown menu.'
            />

            <label htmlFor='cameras'>Choose a camera</label>
            <select id='cameras' name='cameras' onChange={handleCameraChange}>
              {camerasArray.map((camera, index) => (
                <option key={index} value={camera}>
                  {camera}
                </option>
              ))}
            </select>
          </div>
        </form>

        <figure className='latest-image'>
          <img id='rover-img' src={selectedImage} alt='Image from Mars' />
        </figure>
      </SlideshowStyles>
    </>
  )
}

export default PerseveranceForm
