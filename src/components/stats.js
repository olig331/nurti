import React,{useState, useEffect} from 'react'

export const Stats = ({sugarTotal, calsTotal, carbsTotal, proteinTotal, satFatTotal, fatTotal}) => {

  const [sugarPercent, setsugarPercent] = useState(0)
  const [carbsPercent, setcarbsPercent] = useState(0)
  const [proteinPercent, setproteinPercent] = useState(0)
  const [caloriesPercent, setcaloriesPercent] = useState(0)
  const [fatPercent, setfatPercent] = useState(0)
  const [satFatPercent, setsatFatPercent] = useState(0)
  const [currentDate, setcurrentDate] = useState("")


  useEffect(()=>{
    setcurrentDate(new Date().toLocaleDateString())
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
        <h5>{currentDate}</h5>
    </div>
  )
}

export default Stats
