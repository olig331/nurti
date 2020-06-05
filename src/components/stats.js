import React,{useState, useEffect} from 'react'

export const Stats = ({dailyfood, sugarTotal, calsTotal, carbsTotal, proteinTotal, satFatTotal, fatTotal}) => {

  const [sugarPercent, setsugarPercent] = useState(0)
  const [carbsPercent, setcarbsPercent] = useState(0)
  const [proteinPercent, setproteinPercent] = useState(0)
  const [caloriesPercent, setcaloriesPercent] = useState(0)
  const [fatPercent, setfatPercent] = useState(0)
  const [satFatPercent, setsatFatPercent] = useState(0)

  const data = JSON.parse(localStorage.getItem("settings"))
  
  const relativeStats =()=>{
    let bmr, weightInKg, heightInCm;
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
      
  }

  useEffect(()=>{
    setcaloriesPercent((calsTotal/2500)*100)
    setsugarPercent((sugarTotal/120)*100)
    setcarbsPercent((carbsTotal/300)*100)
    setfatPercent((fatTotal/95)*100)
    setsatFatPercent((satFatTotal/30)*100)
    setproteinPercent((proteinTotal/55)*100)
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
  

  return (
    <div>
      <div className="stats">
        <div>
          <h5>Calories: {calsTotal}kal - 2500kal</h5>
          <ProgressBar percent={caloriesPercent}/>
        </div>
        <div>
            <h5>{`Sugar: 
              ${sugarTotal}g - 120g`}</h5>
            <ProgressBar percent={sugarPercent} />
        </div>
        <div>
          <h5>Saturated Fat: {satFatTotal}g - 30g</h5>
          <ProgressBar percent={satFatPercent} />
        </div>
        <div>
          <h5>Fat: {fatTotal}g - 95g</h5>
          <ProgressBar percent={fatPercent}/>
        </div>
        <div>
          <h5>Protien: {proteinTotal}g - 55g</h5>
          <ProgressBar percent={proteinPercent}/>
        </div>
        <div>
          <h5>Carbs: {carbsTotal}g - 300g</h5>
          <ProgressBar percent={carbsPercent}/>
        </div>
      </div>
    </div>
  )
}

export default Stats
