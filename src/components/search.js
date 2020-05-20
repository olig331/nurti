import React,{useState} from 'react';
import Info from './info'
import Stats from './stats'

const Search = () =>{

  const APP_ID = "fd252eb4";
  const APP_KEY = "d4916eb493b2039e2b8fa3f54b096386";

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false)


  const getItems = () =>{
    getNutrition();
    setToggle(true)
  }

  const getNutrition = async () => {
    const response = await fetch (
      `https://api.nutritionix.com/v1_1/search/${search}?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_protien,nf_sugars,nf_total_fat,nf_total_carbohydrate&appId=${APP_ID}&appKey=${APP_KEY}`
    );
    const data = await response.json();
    setItems(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
    console.log(search)
  }


  return(
    <div className="app">
      <input 
        className="search_box" type="text" 
        value={search} onChange={updateSearch}
      />
      <button 
        className="search_btn" onClick={getItems}
        >Search
      </button>
      <div className={toggle?"search_results":"no_search_box"}>
      {items.map((x, i) =>(
          <Info 
            key={i}
            title={x.fields.item_name}
            cals={x.fields.nf_calories}
            carbs={x.fields.nf_total_carbohydrate}
            sugar={x.fields.nf_sugars}
            fat={x.fields.nf_total_fat}
            brand={x.fields.brand_name}
            items={items}
            increment={i}
          />
      ))}
      </div>
    <div>
        <Stats 
          
        />
    </div>
  </div>
)
}

export default Search