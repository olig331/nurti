import React,{useState, useEffect} from 'react'
import { GiStealthBomber } from 'react-icons/gi'

export const Stats = ({dailyfood, sugarTotal, calsTotal, carbsTotal, proteinTotal, satFatTotal, fatTotal}) => {

  const data = JSON.parse(localStorage.getItem("settings"))

  let BMRpercent;

  const relativeStats = ()=>{
    let bmr, weightInKg, heightInCm, preGoal;
      heightInCm = Math.ceil(((parseInt(data[3])+ parseInt(data[4])) * 2.54))
        if(data[1] === "LB"){
          weightInKg = parseInt(data[2]) / 2.2 
          weightInKg = weightInKg.toFixed(1)
        }
          if(data[0] === "male"){
            bmr = 88.362 +(13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * parseInt(data[5]))
          }else{
            bmr = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * parseInt(data[5]))
          }
        preGoal = Math.floor(data[8] === "Sedatory"?bmr *= 1.2 
          :data[8] === "Light"?bmr *= 1.375
          :data[8] === "Moderate"?bmr *= 1.55
          :bmr *= 1.725)
        
        BMRpercent = preGoal

        return Math.floor(data[6] === "Lose"
          ? bmr -= ((parseInt(data[7])*3500)/7)
          : data[6] === "Gain"
          ? bmr += ((parseInt(data[7])*3500)/7)
          : bmr
        )

  }

  const [sugarPercent, setsugarPercent] = useState(0)
  const [carbsPercent, setcarbsPercent] = useState(0)
  const [proteinPercent, setproteinPercent] = useState(0)
  const [caloriesPercent, setcaloriesPercent] = useState(0)
  const [fatPercent, setfatPercent] = useState(0)
  const [satFatPercent, setsatFatPercent] = useState(0)
  const [BMR, setBMR] = useState(relativeStats)
  
    BMRpercent = Math.ceil((BMR / BMRpercent)*100)

  useEffect(()=>{
    setcaloriesPercent((calsTotal/BMR)*100)
    setsugarPercent((sugarTotal/macrosCalc(120,90))*100)
    setcarbsPercent((carbsTotal/macrosCalc(300, 230))*100)
    setfatPercent((fatTotal/macrosCalc(90,70))*100)
    setsatFatPercent((satFatTotal/macrosCalc(30,20))*100)
    setproteinPercent((proteinTotal/protienCalc())*100)
  },[calsTotal, sugarTotal, carbsTotal, fatTotal, satFatTotal, proteinTotal])

  const ProgressBar = (props) =>{
    return(
      <div className="progress-bar">
        <Filler percent={props.percent}/>
      </div>
    )
  }

  const Filler = (props) =>{
    return(
      <div 
        className="filler" 
        style={props.percent < 100
          ?{width:`${props.percent}%`}
          :{width: `100%`, background: 'red'}}
      />
    )
  }

  const macrosCalc =(m, f) =>{
    let result;
    if(data[6] === "Lose"){
      if(data[0] === "male"){
        result = Math.ceil((m/100)*75)
      }else{
        result = Math.ceil((f/100)*75)
      }
    }else{
      if(data[0] === "male"){
        result = m
      }else{
        result = f
      }
    }
    return result
  }
  
  const protienCalc =()=>{
    let weightInKg = parseInt(data[2]) / 2.2 
      weightInKg = weightInKg.toFixed(1)  
    
      return Math.ceil(weightInKg *0.8)
  }

  return (
    <div>
      <div className="stats">
        <div>
          <h5>Calories: {calsTotal}Kcal - {BMR}Kcal </h5>
          <ProgressBar percent={caloriesPercent}/>
        </div>
        <div>
          <h5>Sugar: {sugarTotal} - {macrosCalc(120, 90)}g</h5>
          <ProgressBar percent={sugarPercent} />
        </div>
        <div>
          <h5>Saturated Fat: {satFatTotal}g - {macrosCalc(30, 20)}g</h5>
          <ProgressBar percent={satFatPercent} />
        </div>
        <div>
          <h5>Fat: {fatTotal}g - {macrosCalc(90, 70)}g</h5>
          <ProgressBar percent={fatPercent}/>
        </div>
        <div>
          <h5>Protien: {proteinTotal}g - {protienCalc()}g</h5>
          <ProgressBar percent={proteinPercent}/>
        </div>
        <div>
          <h5>Carbs: {carbsTotal}g - {macrosCalc(300, 230)}g</h5>
          <ProgressBar percent={carbsPercent}/>
        </div>
      </div>
    </div>
  )
}

export default Stats
