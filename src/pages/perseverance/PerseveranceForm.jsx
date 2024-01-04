import React from 'react'
import { useContext, useEffect } from 'react'
import MarsContext from '../../Context/MarsContext'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function PerseveranceForm() {
  const { startDate, camerasArray, handleDateChange } = useContext(MarsContext)

  return (
    <>
      <form>
        {/* DatePicker automatically passes the date as a prop to handleDateChange function */}
        Choose a date:
        <DatePicker selected={startDate} onChange={handleDateChange} />
        <label htmlFor='cameras'>Choose a camera</label>
        <select id='cameras' name='cameras'>
          {camerasArray.map((camera, index) => (
            <option key={index} value={camera}>
              {camera}
            </option>
          ))}
        </select>
      </form>
    </>
  )
}

export default PerseveranceForm
