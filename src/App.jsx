
import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage'
import MainPage from './Components/MainPage'

function App() {
 const [gamePage, setgamePage] = useState(' ');
  return (
    <>
    
{gamePage == 'PlayNow' ?    
    <MainPage></MainPage> :  <HomePage gamePage={gamePage} setgamePage={setgamePage}></HomePage>}
   

    </>
  )
}

export default App
