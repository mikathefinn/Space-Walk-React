import React from 'react'
import { useContext, useEffect } from 'react'
import MarsContext from '../Context/MarsContext'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function PerseveranceForm() {
  const { startDate, setStartDate, handleDateChange } = useContext(MarsContext)

  //useEffect to work with the updated value of startDate
  useEffect(() => {
    console.log('Inside useEffect', startDate)
  }, [startDate])

  return (
    <>
    {/* DatePicker automatically passes the date as a prop to handleDateChange function */}
      <DatePicker selected={startDate} onChange={handleDateChange} />
    </>
  )
}

export default PerseveranceForm
