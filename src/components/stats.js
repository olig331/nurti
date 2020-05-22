import React from 'react'

export const Stats = ({sugar, then, dailySugar, cals, carbs, protien, satFat, fat, serving}) => {
  return (
    <div>
        <div>
          <h5>Actual Total = {dailySugar}</h5>
          {/* <h5>Cals {cals}</h5>
          <h5>Saturated Fat {satFat}</h5>
          <h5>Fat {fat}</h5>
          <h5>Portion {serving}</h5>
          <h5>Protien {protien}</h5>
          <h5>Carbs {carbs}</h5> */}
        </div>
    </div>
  )
}

export default Stats
