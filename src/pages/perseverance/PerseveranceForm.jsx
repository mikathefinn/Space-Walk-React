import React from 'react'
import { useContext, useEffect } from 'react'
import MarsContext from '../../Context/MarsContext'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function PerseveranceForm() {
  const { startDate, camerasArray, handleDateChange, setSelectedCamera, selectedImage } = useContext(MarsContext)


  const handleCameraChange = (event) => {
    // Update the selected camera when the dropdown changes
    setSelectedCamera(event.target.value);
  };
  return (
    <>
      <form>
        {/* DatePicker automatically passes the date as a prop to handleDateChange function */}
        Choose a date:
        <DatePicker selected={startDate} onChange={handleDateChange} />
        <label htmlFor='cameras'>Choose a camera</label>
        <select id='cameras' name='cameras' onChange={handleCameraChange}>
          {camerasArray.map((camera, index) => (
            <option key={index} value={camera}>
              {camera}
            </option>
          ))}
        </select>
      </form>
      <figure>
          <img id='perseverance-img' src={selectedImage} alt='Image from Mars' />
        </figure>
    </>
  )
}

export default PerseveranceForm
