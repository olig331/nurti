import React, {useState} from 'react'
import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft, FaFemale} from 'react-icons/fa'
import {IoIosMan} from 'react-icons/io'


export const SetUpPage = ({setup}) => {
  
  const [arrowClicked, setarrowClicked] = useState(false)
  const [gender, setgender] = useState("")
  const [weight, setweight] = useState("")
  const [weightNum, setweightNum] = useState(0)
  const [age, setage] = useState (0)
  const [finalPage, setfinalPage] = useState(false)
  const [goal, setgoal] = useState("")
  const [sliderVal, setsliderVal] = useState(2)


  const getWeightNum = e =>{
    setweightNum(e.target.value)
    console.log(e.target.value)
  }

  const getAge = e =>{
    setage(e.target.value)
    console.log(e.target.value)
  }

  const sliderValFunc = e =>{
    setsliderVal(e.target.value)
  } 

  const finished = () =>{
    console.log("hello")
  }

  return (
    <div className="set_up_parent">
        <div className={arrowClicked?"welcome_clicked":"welcome"}>
          <h2>Welcome to set up</h2>
          <p>please click the arrow to continue</p>
          <span onClick={()=>{
            setarrowClicked(true)
          }}><FaRegArrowAltCircleRight /></span>
        </div>
        <div className={arrowClicked && finalPage === false?"personal_info":"personal_info_hidden"}>
          <div className="gender">
            <h4>Select Gender:</h4>
            <span className={gender === "male"
              ?"radio_highlight"
              :"nothing"} 
              onClick={()=>{
                setgender("male")
              }}>
                <IoIosMan />
          </span>{`  `}
            <span className={gender === "female"?"radio_highlight":"nothing"} onClick={()=>{
              setgender("female")
            }}><FaFemale /></span>
          </div>
            <div className="age">
              <h4>Enter Age:</h4>
                <input onChange={getAge} type="text" placeholder="Age..."/>
            </div>
              <div className="weight">
                <h4>Enter Weight:</h4>
                  <span 
                    className={weight ==="KG"?"radio_highlight":"nothing"} 
                    onClick={()=>{
                    setweight("KG")
                    }}
                    type="radio">KG
                  </span>{`  `}
                  <span 
                    className={weight === "LB"?"radio_highlight":"nothing"} onClick={()=>{
                    setweight("LB")
                    }} 
                    type="radio">LB
                  </span><br/>
                  <input 
                    onChange={getWeightNum} 
                    type="text" 
                    placeholder={weight === ""
                    ?"Enter..."
                    :weight ==="LB"?"lbs...":"Kg..."}
                  />
              </div>
              <div
                onClick={()=>{
                  setfinalPage(true)
                }} 
                className="btn_to_final_page">
                <FaRegArrowAltCircleRight/>
              </div>
        </div>
          <div className={finalPage?"back_arrow":"final_page_hidden"}><FaRegArrowAltCircleLeft /></div>
        <div className={finalPage?"final_page_show":"final_page_hidden"}>
          <h4>Goal:</h4>
          <span 
            onClick={()=>{
              setgoal("Gain")
            }}
            className={goal !=="Gain"
            ?"nothing"
            :"radio_highlight"}>
            Gain
          </span>{` `}
          <span  
            onClick={()=>{
              setgoal("Lose")
            }}
            className={goal !=="Lose"
            ?"nothing"
            :"radio_highlight"}>
            Lose
          </span>{` `}
          <span  
            onClick={()=>{
              setgoal("Maintain")
            }}
            className={goal !=="Maintain"
            ?"nothing"
            :"radio_highlight"}>   
            Maintain
          </span>
          <div 
            className={goal === "Gain" || goal === "Lose"
            ?"slider_show"
            :"slider_hide"}
          >
            <input 
              name="range_selector" 
              type="range" step="1" 
              min={"0"} 
              max={"2"} 
              onChange={sliderValFunc} 
              className="slider"
            /><br/>
            <label  
              htmlFor="range_selecter">{sliderVal}{sliderVal<=1?"lb a week":"lbs a week" }
            </label>
          </div> 
        </div>
          <div className={goal !== ""?"finish_btn_div":"final_page_hidden"}>
            <button 
              onClick={()=>{
                finished();
                setup()
              }}
              className="finish_btn">
              Finish
            </button>
          </div>
    </div>
  )
}

export default SetUpPage