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
      <div className="sub_macros">
        <div className="date">
          <h5>{newArr[0]}</h5>
        </div>
        <div className="history_stats">
          <h5>Sugar: <span>{newArr[1]}</span></h5>
          <h5>Calories: <span>{newArr[2]}</span></h5>
          <h5>Protein: <span>{newArr[3]}</span></h5>
          <h5>Fat: <span>{newArr[4]}</span></h5>
          <h5>Saturated Fat: <span>{newArr[5]}</span></h5>
          <h5 className="last">Carbohydrates: <span>{newArr[6]}</span></h5>
        </div>
        <div className="history_foods">
            <p>
              {newArr.splice(7, newArr.length -1).join(" ||  ")}
            </p>
        </div>
      </div>
    </>
    )
  }

  return (
    <div className="history_parent_div">
      <div className="dash_btn"><button onClick={historyFunc}><FaRegArrowAltCircleLeft/></button></div>
      <div className="prev_day">
        {historyCount === 0
          ?null
          :<button 
            onClick={()=>sethistoryCount(historyCount -1)}
            >{`<`}
          </button>
        }
      </div>

      <div 
        className="macros">
        {helperFunc(data[historyCount])}
      </div>

      <div className="next_day">
        {historyCount === data.length -1
          ?null
          :<button 
            onClick={()=>sethistoryCount(historyCount +1)}
            >{`>`}
          </button>
        }
      </div> 
    </div>
  )
}

export default History
