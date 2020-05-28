import React, {useState} from 'react'
import {FaRegArrowAltCircleRight, FaFemale} from 'react-icons/fa'
import {IoIosMan} from 'react-icons/io'

export const SetUpPage = () => {
  
  const [complete, setcomplete] = useState(false)
  const [arrowClicked, setarrowClicked] = useState(false)
  const [gender, setgender] = useState("")
  const [weight, setweight] = useState("")
  const [weightNum, setweightNum] = useState(0)
  const [age, setage] = useState (0)


  const getWeightNum = e =>{
    setweightNum(e.target.value)
    console.log(e.target.value)
  }

  const getAge = e =>{
    setage(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="set_up_parent">
        <div className={arrowClicked?"welcome_clicked":"welcome"}>
          <h2>Welcome to set up</h2>
          <p>please click the arrow to continue</p>
          <span onClick={()=>{
            setarrowClicked(true)
          }}><FaRegArrowAltCircleRight /></span>
        </div>
        <div className={arrowClicked?"personal_info":"personal_info_hidden"}>
          <div>
            <h4>Select Gender:</h4>
            <span className={gender == "male"?"radio_highlight":"nothing"} onClick={()=>{
              setgender("male")
            }}><IoIosMan /></span>
            <span className={gender == "female"?"radio_highlight":"nothing"} onClick={()=>{
              setgender("female")
            }}><FaFemale /></span>
          </div>
            <div className="age">
              <h4>Enter Age:</h4>
                <input onChange={getAge} type="text" placeholder="Age..."/>
            </div>
              <div className="weight">
                <h4>Enter Weight in KG</h4>
                  <button className={weight =="KG"?"radio_highlight":"nothing"} onClick={()=>{
                    setweight("KG")
                  }}type="radio">KG</button>
                  <button className={weight == "LBs"?"radio_highlight":"nothing"} onClick={()=>{
                    setweight("LBs")
                  }} type="radio">LBs</button><br></br>
                  <input onChange={getWeightNum} type="text" placeholder={weight == ""?"Enter...":weight =="LBs"?"lbs...":"Kg..."}/>
              </div>
        </div>
    </div>
  )
}

export default SetUpPage