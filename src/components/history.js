import React,{useState} from 'react'
import {FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft} from 'react-icons/fa'

export const History = ({historyFunc}) => {

  let history = localStorage.getItem("history")
  let data = history.split(/split/g)   
  
  const [historyCount, sethistoryCount] = useState(data.length -1)

  const helperFunc = (index)=>{
    var newArr = index.split(",")
    return(
    <>
      <h5>{newArr[0]}</h5>
      <h5>Sugar: {newArr[1]}</h5>
      <h5>Calories: {newArr[2]}</h5>
      <h5>Protein: {newArr[3]}</h5>
      <h5>Fat: {newArr[4]}</h5>
      <h5>Saturated Fat: {newArr[5]}</h5>
      <h5>Carbohydrates: {newArr[6]}</h5>
      <h5>Foods: {newArr.splice(7, newArr.length -1)}</h5>
    </>
    )
  }

  return (
    <div className="history_parent_div">
      <button onClick={historyFunc}>Dashboard</button><br/>
      {historyCount === 0
        ?null
        :<button 
          onClick={()=>sethistoryCount(historyCount -1)}
          ><FaRegArrowAltCircleLeft/>
        </button>
      }
      <div>{helperFunc(data[historyCount])}</div>
      {historyCount === data.length -1
        ?null
        :<button 
          onClick={()=>sethistoryCount(historyCount +1)}
          ><FaRegArrowAltCircleRight />
        </button>
      }
        
    </div>
  )
}

export default History
