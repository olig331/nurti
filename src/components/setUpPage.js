import React, {useState} from 'react'
import {FaRegArrowAltCircleRight, FaFemale} from 'react-icons/fa'
import {IoIosMan} from 'react-icons/io'

export const SetUpPage = () => {
  
  const [complete, setcomplete] = useState(false)
  const [arrowClicked, setarrowClicked] = useState(false)

  return (
    <div className="set_up_parent">
        <div className="welcome">
          <h2>Welcome to set up</h2>
          <p>please click the arrow to continue</p>
          <span ><FaRegArrowAltCircleRight /></span>
        </div>
        <div className="personal_info">
          <div>
            <h4>Select Gender:</h4>
            <span><IoIosMan /></span>
            <span><FaFemale /></span>
          </div>
            <div className="age">
              <h4>Enter Age:</h4>
                <input type="text" placeholder="Age..."/>
            </div>
              <div className="weight">
                <h4>Enter Weight in KG</h4>
                  <button type="radio">KG</button>
                  <button type="radio">LBs</button><br></br>
                  <input type="text" placeholder="enter..."/>
              </div>
        </div>
    </div>
  )
}

export default SetUpPage