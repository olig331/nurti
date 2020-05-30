import React,{useState, useEffect} from 'react';
import {SetUpPage} from './components/setUpPage'
import './style.css';
import Dashbaord from './components/dashbaord';
import History from './components/history';
import Search from './components/search';
import Settings from './components/settings'
import Tips from './components/tips'


const App = () =>{

  const [setUpComplete, setsetUpComplete] = useState(false)
  const [tracker, settracker] = useState(false)
  const [history, sethistory] = useState(false)
  const [settings, setsettings] = useState(false)
  const [tips, settips] = useState(false)

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

  const toggleTracker = () =>{
    tracker?settracker(false):settracker(true)
  }

  const toggleHistory = () =>{
    history?sethistory(false):sethistory(true)
  }

  const toggleSettings = () =>{
    settings?setsettings(false):setsettings(true)
  }

  const toggleTips =()=>{
    tips?settips(false):settips(true)
  }

  return(
    <div className="App">
      {setUpComplete && tracker === false && history === false 
        && settings === false &&tips === false
          ?<Dashbaord 
            tipsFunc={toggleTips} 
            settingsFunc={toggleSettings}
            historyFunc={toggleHistory}
            trackerFunc={toggleTracker}
          />
          : setUpComplete && tracker
            ?<Search 
              trackerFunc={toggleTracker}
            />
          :setUpComplete && history
            ?<History 
              historyFunc={toggleHistory}
            />
          :setUpComplete && settings
            ?<Settings 
              settingsFunc={toggleSettings}
            />
          :setUpComplete && tips
            ?<Tips
              tipsFunc={toggleTips}
            />
          :<SetUpPage 
            setup={togggleSetUp}
          />}
    </div>
  )
}

export default App;