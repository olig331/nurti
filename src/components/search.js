import React, {useState, useEffect} from 'react'
import Stats from './stats'

import '../style.css'

export const Search = () => {

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

  React.useEffect(() => {
    const data = localStorage.getItem("dailyFood")
      if(data){
        setdailyfood(JSON.parse(data))
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
      `https://api.nutritionix.com/v1_1/search/${search}?results=0:5&fields=item_name,brand_name,item_id,nf_calories,nf_protein,nf_sugars,nf_total_fat,nf_total_carbohydrate,nf_saturated_fat,nf_serving_weight_grams&appId=${APP_ID}&appKey=${APP_KEY}`
    );
      const data = await response.json();
      setitems(data.hits)
      console.log(data.hits)
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
    setdailyfood(dailyfood => dailyfood.concat(n))
    setsugarTotal(Math.floor(sugarTotal + n.nf_sugars)) 
    setproteinTotal(Math.floor(proteinTotal + n.nf_protein))
    setcaloriesTotal(Math.floor(caloriesTotal + n.nf_calories))
    setcarbsTotal(Math.floor(carbsTotal + n.nf_total_carbohydrate))
    setsatFatTotal(Math.floor(satFatTotal + n.nf_saturated_fat))
    setfatTotal(Math.floor(fatTotal + n.nf_total_fat))
  }


  return (
    <div className="search"> 
      <div className="searching">
        <input className="search_bar" type="text" placeholder="Search..." onChange={getSearch}/>
        <div>
          <button className="search_btn" onClick={updateSearch}>Search!</button>
          <button className="search_btn" onClick={toggleOpen}>Close!</button>
        </div>
      </div>
      <div className={open?"open":"close"}>
        {items.map((x,i) => (
          <div className="items" key={i}>
            <h5>
              <span 
                className="title">
                {x.fields.item_name}
              </span>
                ({x.fields.brand_name}) {Math.floor(x.fields.nf_calories)}kal  
              <span 
                className={x.fields.nf_serving_weight_grams != null?"grams":"hide_grams"}>
                (per {x.fields.nf_serving_weight_grams} grams)
              </span>
              <button 
                onClick={() => {addNutrition(x.fields);}}
                className="add_food">Add Food
              </button>
            </h5>
          </div>
        ))}
      </div>
        <div>
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
    </div>
  )
}




export default Search