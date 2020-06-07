import React,{useState, useEffect} from 'react'
import {FaRegArrowAltCircleLeft, FaFemale} from 'react-icons/fa'
import {IoIosMan} from 'react-icons/io'

import '../style.css'

export const SetUpSettings = ({setup, settingsFunc}) => {
  const data  = JSON.parse(localStorage.getItem("settings"))
  const LSsetup = JSON.parse(localStorage.getItem("setup"))

  const [gender, setgender] = useState("")
  const [weight, setweight] = useState("")
  const [weightNum, setweightNum] = useState(0)
  const [feet, setfeet] = useState(0)
  const [inches, setinches] = useState(0)
  const [age, setage] = useState (0)
  const [goal, setgoal] = useState("")
  const [sliderVal, setsliderVal] = useState(2)
  const [activityLevel, setactivityLevel]= useState("")

  const finalFunc = async()=>{
    if(LSsetup){
      finished();
      await settingsFunc();
    }else{
      finished();
      await setup()
    }
  }

  const getWeightNum = e =>{
    setweightNum(e.target.value)
    console.log(e.target.value)
  }

  const getAge = e =>{
    setage(e.target.value)
    console.log(e.target.value)
  }

  const sliderValFunc = e =>{
    setsliderVal(e.target.value)
  } 

  // useEffect(() => {
  //   if(data){
  //     setgender(data[0])
  //     setweight(data[1])
  //     setweightNum(data[2])
  //     setfeet(data[3])
  //     setinches(data[4])
  //     setage(data[5])
  //     setgoal(data[6])
  //     setsliderVal(data[7])
  //     setactivityLevel(data[8]) 
  //   }
  // })

  const finished = () =>{
    localStorage.setItem("settings", JSON.stringify([
      gender, 
      weight,
      weightNum,
      feet,
      inches,
      age,
      goal,
      sliderVal,
      activityLevel
    ]))
  }

  const settingFeet = e =>{
    setfeet(e.target.value)
  }

  const settingInches = e =>{
    setinches(e.target.value)
  }

  return (
    <>
    <div 
      onClick={settingsFunc}
      className={
        LSsetup?"dash_btn":"no_dash_btn"
      }>
      <FaRegArrowAltCircleLeft/>
    </div>

    <div className="set_up_parent">
    <div className="set_up_settings">
    <div className="gender">
      <h4>Select Gender:</h4>
      <span className={gender === "male"
        ?"selected"
        :null} 
        onClick={()=>{
          setgender("male")
        }}>
          <IoIosMan />
    </span>{`  `}
      <span className={gender === "female"?"selected":null} onClick={()=>{
        setgender("female")
      }}><FaFemale /></span>
    </div>
      <div className="age">
        <h4>Enter Age:</h4>
          <input onChange={getAge} type="text" placeholder="Age..." required/>
      </div>
        <div className="height">
          <h4>Enter Height:</h4>
          <select onChange={settingFeet} name="feet" className="height_dropdown_menu">
            <option value="12">1ft</option>
            <option value="24">2ft</option>
            <option value="36">3ft</option>
            <option value="48">4ft</option>
            <option value="60">5ft</option>
            <option value="72">6ft</option>
          </select>
          <select onChange={settingInches} name="inches" className="height_dropdown_menu">
            <option value="0">0"</option>
            <option value="1">1"</option>
            <option value="2">2"</option>
            <option value="3">3"</option>
            <option value="4">4"</option>
            <option value="5">5"</option>
            <option value="6">6"</option>
            <option value="7">7"</option>
            <option value="8">8"</option>
            <option value="9">9"</option>
            <option value="10">10"</option>
            <option value="11">11"</option>
          </select><br/>
          </div>
          <div className="weight">
          <h4>Enter Weight:</h4>
            <span 
              className={weight ==="KG"?"selected":null} 
              onClick={()=>{
              setweight("KG")
              }}
              type="radio">KG
            </span>{`  `}
            <span 
              className={weight === "LB"?"selected":null} onClick={()=>{
              setweight("LB")
              }} 
              type="radio" >LB
            </span><br/>
            <input 
              required
              onChange={getWeightNum} 
              type="text" 
              placeholder={weight === ""
              ?"Enter..."
              :weight ==="LB"?"Lbs...":"Kg..."}
            />
        </div>
  
    
  <div className="goal">
    <h4>Goal:</h4>
    <span 
      onClick={()=>{
        setgoal("Gain")
      }}
      className={goal !=="Gain"
      ?null
      :"selected"}>
      Gain
    </span>{` `}
    <span  
      onClick={()=>{
        setgoal("Lose")
      }}
      className={goal !=="Lose"
      ?null
      :"selected"}>
      Lose
    </span>{` `}
    <span  
      onClick={()=>{
        setgoal("Sustain")
      }}
      className={goal !=="Sustain"
      ?null
      :"selected"}>   
      Sustain
    </span>
    <div 
      className={goal === "Gain" || goal === "Lose"
      ?"slider_show"
      :"slider_hide"}
    >
      <input 
        name="range_selector" 
        type="range" step="1" 
        min={"0"} 
        max={"2"} 
        onChange={sliderValFunc} 
        className="slider"
      /><br/>
      <label  
        htmlFor="range_selecter">{sliderVal}{sliderVal<=1?"lb a week":"lbs a week" }
      </label>
    </div> 
    </div>

    
    <div className="activity">
      <h4>Activity:</h4>
      <span 
        onClick={()=>{setactivityLevel("Sedatory")}} className={activityLevel === "Sedatory"
          ?"selected"
          :null}>
        Sedatory
      </span>
      <span 
        onClick={() =>{setactivityLevel("Light")}} className={activityLevel === "Light"
          ?"selected"
          :null}>
        Light Activity
      </span>
      <span 
        onClick={()=>{setactivityLevel("Moderate")}} className={activityLevel === "Moderate"
          ?"selected"
          :null}>
        Moderate
      </span>
      <span 
        onClick={()=>{setactivityLevel("Very")}} className={activityLevel === "Very"
          ?"selected"
          :null}>
        Very Active
      </span>
    </div>
    <div className={activityLevel !== "" && gender !== "" && weight !== ""?"finish_btn_div":"hide_finish_btn"}>
      <button 
        onClick={finalFunc}
        className="finish_btn">
        {LSsetup? "Update" : "Finish"}
      </button>
    </div>
  </div>
  </div>
  </>
  )
}

export default SetUpSettings