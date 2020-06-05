import React, {useState, useEffect} from 'react'
import Stats from './stats'
import {FaPlus} from 'react-icons/fa'
import '../style.css'
import TodaysFood from './TodaysFood'

export const Search = ({trackerFunc}) => {

  const APP_ID = "fd252eb4"
  const APP_KEY = "d4916eb493b2039e2b8fa3f54b096386"

  const [items, setitems] = useState([])
  const [search, setsearch] = useState("")
  const [open, setopen] = useState(false)
  const [dailyfood, setdailyfood] = useState([])
  const [sugarTotal, setsugarTotal] = useState(0)
  const [caloriesTotal, setcaloriesTotal] = useState(0)
  const [proteinTotal, setproteinTotal] = useState(0)
  const [carbsTotal, setcarbsTotal] = useState(0)
  const [satFatTotal, setsatFatTotal] = useState(0)
  const [fatTotal, setfatTotal] = useState(0)
  const [grams, setgrams] = useState("")
  

    const setDateUpdateProccess  = async  () =>{
      console.log("dates are equal")
      var today = new Date().toDateString()
      var yesurdaysDate = new Date();
          yesurdaysDate.setDate(yesurdaysDate.getDate() - 1)
      var storedDate = JSON.parse(localStorage.getItem("date"))

      if(today !== storedDate){
        var data = [
          yesurdaysDate.toDateString(),
          JSON.parse(localStorage.getItem("sugar")),
          JSON.parse(localStorage.getItem("cals")),
          JSON.parse(localStorage.getItem("protein")),
          JSON.parse(localStorage.getItem("fat")),
          JSON.parse(localStorage.getItem("satFat")),
          JSON.parse(localStorage.getItem("carbs")),
          JSON.parse(localStorage.getItem("dailyFood"))
        ]

        var existing  = JSON.parse(localStorage.getItem("history"))
        var add = existing ? existing + "split" + data : data

            localStorage.setItem("history", JSON.stringify(add))

        await clearAll()
          
            localStorage.setItem("date", JSON.stringify(new Date().toDateString()))
      };
    }

    const clearAll = async ()=>{
      setdailyfood([])
      setproteinTotal(0)
      setsugarTotal(0)
      setsatFatTotal(0)
      setfatTotal(0)
      setcarbsTotal(0)
      setcaloriesTotal(0)
      localStorage.removeItem("sugar")
      localStorage.removeItem("cals")
      localStorage.removeItem("fat")
      localStorage.removeItem("satFat")
      localStorage.removeItem("protein")
      localStorage.removeItem("carbs")
      localStorage.removeItem("dailyFood")
    }


    const useTime = (refreshCycle = 2000) =>{
      useEffect(() => {
        var intervalId = setInterval(
          setDateUpdateProccess,
          refreshCycle,
        );
        return () => clearInterval(intervalId)
    
      },[refreshCycle,]);
    }
  
    useTime()

    useEffect(() => {
      const data = localStorage.getItem("dailyFood")
      if(data){
        setdailyfood(JSON.parse(data))
        setsugarTotal(JSON.parse(localStorage.getItem("sugar")))
        setcaloriesTotal(JSON.parse(localStorage.getItem("cals")))
        setfatTotal(JSON.parse(localStorage.getItem("fat")))
        setsatFatTotal(JSON.parse(localStorage.getItem("satFat")))
        setproteinTotal(JSON.parse(localStorage.getItem("protein")))
        setcarbsTotal(JSON.parse(localStorage.getItem("carbs")))
      }
    }, [])

    useEffect(() => {
      localStorage.setItem("dailyFood", JSON.stringify(dailyfood))  
      localStorage.setItem("sugar", JSON.stringify(sugarTotal))
      localStorage.setItem("cals", JSON.stringify(caloriesTotal))
      localStorage.setItem("protein", JSON.stringify(proteinTotal))
      localStorage.setItem("carbs", JSON.stringify(carbsTotal))
      localStorage.setItem("satFat", JSON.stringify(satFatTotal))
      localStorage.setItem("fat", JSON.stringify(fatTotal))
    }, [dailyfood, sugarTotal, caloriesTotal, proteinTotal, carbsTotal, satFatTotal, fatTotal])

  const getNutrition = async () =>{
    const response = await fetch (
      `https://api.nutritionix.com/v1_1/search/${search}?results=0:10&fields=item_name,brand_name,item_id,nf_calories,nf_protein,nf_sugars,nf_total_fat,nf_total_carbohydrate,nf_saturated_fat,nf_serving_weight_grams&appId=${APP_ID}&appKey=${APP_KEY}`
    );
      const data = await response.json();
      setitems(data.hits)
  }

  const getSearch = e =>{
    setsearch(e.target.value)
  }

  const updateSearch = () =>{
    getNutrition()
    setopen(true)
  }

  const toggleOpen = () =>{
    setopen(false)
  }

    const addNutrition = async (n)=>{
      setdailyfood(dailyfood => dailyfood.concat(n.item_name))
      setsugarTotal(Math.floor(sugarTotal + n.nf_sugars)) 
      setproteinTotal(Math.floor(proteinTotal + n.nf_protein))
      setcaloriesTotal(Math.floor(caloriesTotal + n.nf_calories))
      setcarbsTotal(Math.floor(carbsTotal + n.nf_total_carbohydrate))
      setsatFatTotal(Math.floor(satFatTotal + n.nf_saturated_fat))
      setfatTotal(Math.floor(fatTotal + n.nf_total_fat))
    }

    const customNutrition = (y) =>{
      setdailyfood(dailyfood => dailyfood.concat(y.item_name))
      setsugarTotal(Math.floor(sugarTotal + ((y.nf_sugars / y.nf_serving_weight_grams)*grams)))
      setproteinTotal(Math.floor(proteinTotal + ((y.nf_protein / y.nf_serving_weight_grams)*grams)))
      setcaloriesTotal(Math.floor(caloriesTotal + ((y.nf_calories / y.nf_serving_weight_grams)*grams)))
      setcarbsTotal(Math.floor(carbsTotal + ((y.nf_total_carbohydrate / y.nf_serving_weight_grams)*grams)))
      setsatFatTotal(Math.floor(satFatTotal + ((y.nf_saturated_fat / y.nf_serving_weight_grams)*grams)))
      setfatTotal(Math.floor(fatTotal + ((y.nf_total_fat / y.nf_serving_weight_grams)*grams)))
    }

    const settingGrams = (event) =>{
      setgrams(event.target.value)
    }


  return (
    <div className="search"> 
      <div className="tracker_dash_btn"><button onClick={trackerFunc}>Dash</button></div>
      <div className="stats">
        <Stats
          calsTotal={caloriesTotal}
          carbsTotal={carbsTotal}
          proteinTotal={proteinTotal}
          fatTotal={fatTotal}
          satFatTotal={satFatTotal}
          dailyfood={dailyfood}
          sugarTotal={sugarTotal}
        />
      </div>
      <div className="searching">
        <input className="search_bar" type="text" placeholder="Search..." onChange={getSearch}/>
        <div>
          <button className="search_btn" onClick={updateSearch}>Search!</button>{` `}
          <button className="search_btn" onClick={toggleOpen}>Close!</button>
        </div>
      </div>
      <div className={open?"open":"close"}>
        {items.map((x,i) => (
          <div className="items" key={i}>
            <h5>
              <span 
                className="title">
                {x.fields.item_name}{' '}
              </span>
                 ({x.fields.brand_name}) {Math.floor(x.fields.nf_calories)}kal  
              <span 
                className={x.fields.nf_serving_weight_grams != null
                ?"grams"
                :"no_grams"}
                >
                (per {x.fields.nf_serving_weight_grams} grams)
              </span>
                <div className="add_food_btn">
              <button 
                onClick={() => {addNutrition(x.fields)}}
                className="add_food">
                <FaPlus />
              </button>
              </div>
                <div 
                  className={x.fields.nf_serving_weight_grams !== null
                  ?"input_text"
                  :"no_input"}
                >
                  <span 
                    className="white">Enter Custom Weight: {"  "} 
                  </span>
                  <input 
                    className="grams_input" 
                    type="text" 
                    placeholder="grams" 
                    onChange={settingGrams}
                  />
                  <button 
                    className="add_food" 
                    onClick={() => {customNutrition(x.fields)}}>
                    <FaPlus />
                  </button>
                </div>
            </h5>
          </div>
        ))}
      </div>
        <div className="todays_food">
          <TodaysFood 
            dailyfood={dailyfood}
          />
        </div>
    </div>
  )
}



export default Search