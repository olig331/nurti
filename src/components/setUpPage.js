import React, {useState} from 'react'
import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft, FaFemale} from 'react-icons/fa'
import {IoIosMan} from 'react-icons/io'
import SetUpSettings from './SetUpSettings'


export const SetUpPage = ({setup}) => {
  
  const [arrowClicked, setarrowClicked] = useState(false)

  return ( 
    <div className="set_up_parent">
      {arrowClicked?<SetUpSettings setup={setup}/>:
      <div className="set_up">
        <div className="welcome">
          <h2>Welcome to set up</h2>
          <p>please click the arrow to continue</p>
          <span onClick={()=>{
            setarrowClicked(true)
          }}><FaRegArrowAltCircleRight /></span>
        </div>
      </div>}
    </div>
  )
}

export default SetUpPage