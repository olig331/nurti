import React from 'react'
import {IoIosMan} from 'react-icons/io'
import { FaFemale } from 'react-icons/fa'

export const Settings = ({settingsFunc}) => {
  return (
    <div className="settings_parent">
        <div className="settings_tile">
              <h3>Change Settings:</h3>
            <div className="settings_gender_div">
                <div><FaFemale/></div>
                <div><IoIosMan/></div>
            </div>
            <div className="settings_age_div">
                Age: {" "}<br></br>
              <input type="text" className="settings_age" placeholder="age..."/>
            </div>
            <div className="height_weight_div">
              <select name="feet" className="feet_dropdown_menu">
                <option value="12">1ft</option>
                <option value="24">2ft</option>
                <option value="36">3ft</option>
                <option value="48">4ft</option>
                <option value="60">5ft</option>
                <option value="72">6ft</option>
              </select>
              <select name="inches" className="inches_dropdown_menu">
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
              </select>
                <div className="settings_lbs">LB</div>
                <div className="settings_kg">KG</div>
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
        </div>  
    </div>
  )
}

export default Settings
