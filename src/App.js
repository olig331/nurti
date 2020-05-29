import React,{useState} from 'react';
import {Search} from './components/search';
import {SetUpPage} from './components/setUpPage'
import './style.css';


const App = () =>{

  const [setUpComplete, setsetUpComplete] = useState(false)

  const togggleSetUp =() =>{
    setsetUpComplete(true)
  }

  return(
    <div className="App">
      {setUpComplete?<Search />:<SetUpPage setup={togggleSetUp}/>}
    </div>
  )
}

export default App;