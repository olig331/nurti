import React from 'react'
import {BsCalendar, BsPencilSquare} from 'react-icons/bs'
import {GiCog} from 'react-icons/gi'
import {FaLightbulb} from 'react-icons/fa'

import '../style.css'

export const Dashbaord = ({tipsFunc, settingsFunc, trackerFunc, historyFunc}) => {


  return (
    <div className="dashboard">
      <div className="inner_dash">
        <div onClick={trackerFunc} className="tracker">
          <BsPencilSquare/>
          <span>Tracker</span>
        </div>
        <div onClick={historyFunc} className="History">
        <BsCalendar/>
        <span>History</span>
        </div>
        <div onClick={settingsFunc} className="settings">
          <GiCog/>
          <span>Settings</span>
        </div>
        <div onClick={tipsFunc} className="tips">
          <FaLightbulb name="bulb"/>
          <span>Tips</span>
        </div>
      </div>
    </div>
  )
}

export default Dashbaord