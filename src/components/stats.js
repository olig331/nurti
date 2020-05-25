import React from 'react'

export const Stats = ({sugarTotal, calsTotal, carbsTotal, proteinTotal, satFatTotal, fatTotal}) => {
  return (
    <div>
        <h5>Calories: {calsTotal}kal - 2500kal</h5>
        <h5>Sugar: {sugarTotal}g - 120g</h5> 
        <h5>Saturated Fat: {satFatTotal}g - 30g</h5>
        <h5>Fat: {fatTotal}g - 95g</h5>
        <h5>Protien: {proteinTotal}g - 55g</h5>
        <h5>Carbs: {carbsTotal}g - 300g</h5>
    </div>
  )
}

export default Stats
