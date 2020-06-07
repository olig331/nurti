import React from 'react'

export const TodaysFood = ({dailyfood}) => {
  return (
    <div>
      <div className="foods_shadow">
          <h4>Todays Food:</h4>
        <div className="foods">
          {dailyfood.map((z, i) =>(
            <h5 style={{color: "rgb(53, 52, 52)"}} key={i}><span className="food_index_num">{i+1}:</span> {z}</h5>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodaysFood
