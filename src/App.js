import React,{useState, useEffect} from 'react';
import {SetUpPage} from './components/setUpPage'
import './style.css';
import Dashbaord from './components/dashbaord';


const App = () =>{

  const [setUpComplete, setsetUpComplete] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("setup"))
    if(data){
      setsetUpComplete(JSON.parse(localStorage.getItem("setup")))
    }
  }, [])

  const togggleSetUp =() =>{
    setsetUpComplete(true);
    localStorage.setItem("setup" , JSON.stringify(true))
  }

  return(
    <div className="App">
      {setUpComplete?<Dashbaord />:<SetUpPage setup={togggleSetUp}/>}
    </div>
  )
}

export default App;