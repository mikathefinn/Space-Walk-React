import React from 'react'
import { useContext } from 'react'
import MarsContext from '../../Context/MarsContext'
import DatePicker from 'react-datepicker'
import { SlideshowStyles } from '../../styles/SlideshowStyles'
import 'react-datepicker/dist/react-datepicker.css'

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
  

  return (
    <>
      <SlideshowStyles>
      <div className="images-intro">
      <h2>Images taken by Perseverance</h2>
<p>You can browse images taken by the rover by choosing a date and selecting a camera. Keep in mind that Perseverance does not send images back to earth daily and there is a delay so if your selected day doesn't allow you to choose a camera, then just try a different date. </p>
</div>
        <form>
        
          Choose a date :
         
          <DatePicker
          className='datepicker'
            selected={startDate}
            maxDate={new Date()}
            showYearDropdown
            onChange={(date) => setStartDate(date)}
          />
          <label htmlFor='cameras'>Choose a camera</label>
          <select id='cameras' name='cameras' onChange={handleCameraChange}>
            {camerasArray.map((camera, index) => (
              <option key={index} value={camera}>
                {camera}
              </option>
            ))}
          </select>
         
        </form>

        <figure className='latest-image'>
          <img id='rover-img' src={selectedImage} alt='Image from Mars' />
        </figure>
      </SlideshowStyles>
    </>
  )
}

export default PerseveranceForm
