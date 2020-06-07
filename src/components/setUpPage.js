import React, {useState} from 'react'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import SetUpSettings from './SetUpSettings'


export const SetUpPage = ({setup}) => {
  
  const [arrowClicked, setarrowClicked] = useState(false)

  return ( 
    <>
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
    </>
  )
}

export default SetUpPage