import React,{useState} from 'react'
import {IoIosMan} from 'react-icons/io'
import { FaFemale } from 'react-icons/fa'

export const Settings = ({settingsFunc}) => {
  const data = JSON.parse(localStorage.getItem("settings"))

  const [gender, setgender] = useState(data[0])
  const [weight, setweight] = useState(data[1])
  const [height, setheight] =useState("")
  const [weightNum, setweightNum] = useState(data[2])
  const [age, setage] = useState (data[3])
  const [goal, setgoal] = useState(data[4])
  const [sliderVal, setsliderVal] = useState(data[5])

    const updateSettings = ()=>{
      localStorage.setItem("settings", JSON.stringify([
        gender, 
        weight,
        weightNum,
        height,
        age,
        goal,
        sliderVal
      ]))
    }


  return (
    <div className="settings_parent">
      <button onClick={settingsFunc}>dashboard
      </button>
        <div className="settings_tile">
              <h3>Change Settings:</h3>

            <div className="settings_gender_div">
                <div 
                  className={gender === "female"
                    ?"radio_highlight"
                    :"nothing"}  
                  onClick={()=>setgender("female")}>
                    <FaFemale/>
                </div>
                <div 
                  className={gender === "male"
                    ?"radio_highlight"
                    :"nothing"} 
                  onClick={()=>setgender("male")}>
                    <IoIosMan/>
                </div>
            </div>

            <div className="settings_age_div">
                Age: {" "}<br></br>
              <input type="text" className="settings_age" placeholder="age..."/>
            </div>
            <div className="settings_height_weight_div">
              Height: <br/>
              <select name="feet" className="height_dropdown_menu">
                <option value="12">1ft</option>
                <option value="24">2ft</option>
                <option value="36">3ft</option>
                <option value="48">4ft</option>
                <option value="60">5ft</option>
                <option value="72">6ft</option>
              </select>
              <select name="inches" className="height_dropdown_menu">
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
                Weight: <br/>
                <div className="settings_lbs">LB</div>
                <div className="settings_kg">KG</div><br/>
                <input type="text" placeholder="weight..."/>
            </div>

            <div className="settings_goal">
              <div>Lose</div>
              <div>Gain</div>
              <div>Maintain</div>
              <input 
                name="range_selector" 
                type="range" step="1" 
                min={"0"} 
                max={"2"} 
            />
              <label htmlFor="range_selector">

              </label>
            </div>
            <button onClick={updateSettings}>Update</button>
        </div>  
    </div>
  )
}

export default Settings
