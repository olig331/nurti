import React from 'react'
import {BsCalendar, BsPencilSquare} from 'react-icons/bs'
import {GiCog} from 'react-icons/gi'
import {FaLightbulb} from 'react-icons/fa'

import '../style.css'

export const Dashbaord = () => {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="inner_dash">
        <div className="tracker">
          <BsPencilSquare/>
          <span>Tracker</span>
        </div>
        <div className="History">
        <BsCalendar/>
        <span>History</span>
        </div>
        <div className="settings">
          <GiCog/>
          <span>Settings</span>
        </div>
        <div className="tips">
          <FaLightbulb name="bulb"/>
          <span>Tips</span>
        </div>
      </div>
    </div>
  )
}

export default Dashbaord