import React, {useState} from 'react'
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

  const getNutrition = async () =>{
    const response = await fetch (
      `https://api.nutritionix.com/v1_1/search/${search}?results=0:5&fields=item_name,brand_name,item_id,nf_calories,nf_protein,nf_sugars, nf_total_fat,nf_total_carbohydrate,nf_saturated_fat,nf_serving_weight_grams&appId=${APP_ID}&appKey=${APP_KEY}`
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

  const showFood =()=>{
    console.log(dailyfood)
  }

  const addNutrition = (n)=>{
    console.log(dailyfood)
    setsugarTotal(Math.floor(n))
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
                onClick={async() =>  {setdailyfood(dailyfood => dailyfood.concat(x.fields));   addNutrition(x.fields.nf_sugars);}}
                className="add_food">Add Food
              </button>
            </h5>
          </div>
        ))}
      </div>
          <button onClick={showFood}>show Food</button>
          <button onClick={()=> console.log(sugarTotal)}>showSugar TOtal</button>
        <div>
          
            <Stats
              // sugar={x.nf_sugars}
              // cals={x.nf_calories}
              // carbs={x.nf_total_carbohydrate}
              // protien={x.nf_protein}
              // fat={x.nf_total_fat}
              // satFat={x.nf_saturated_fat}
              // serving={x.nf_serving_weight_grams}
              dailyfood={dailyfood}
              dailySugar={sugarTotal}
            />
       
        </div>
    </div>
  )
}




export default Search