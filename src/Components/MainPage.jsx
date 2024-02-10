import React, { useState } from 'react'
import styles from './MainPage.module.css'
import RulesPage from './RulesPage'
const MainPage = () => {
  const [rules,setrules] = useState(' ')

const [selectedNumber, setselectedNumber] = useState('')
const [error, seterror] = useState('');
const [score, setscore] = useState('0');
const [DiceNumber, setDiceNumber] = useState('1');
const generaterandomNumber= (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const roleDice = () => {
  

const randomNumber = generaterandomNumber(1,7);
setDiceNumber((prev) => randomNumber);

if(!selectedNumber) {
  seterror("You have not selected any number");
  return; 
    } 

if(selectedNumber === randomNumber) {
  setscore((prev) => prev + randomNumber)
}
else {
  setscore((prev) => prev-2)
}
setselectedNumber(undefined);
};

const resetScore = () => {
  setscore(0);
};
const arrNumber = [1, 2, 3, 4, 5, 6];

const numberSelectorHandler = (value) => {
  setselectedNumber(value);
  seterror("");
};

 
  return (
    <>
    <div className={styles.ContainerHead}>
      <div className={styles.flex1}>

<h1 >{score}</h1>
<div>
<p>Total Score</p>
      </div>
      </div>
      <div className={styles.flex2}>
      <p style={{color: 'red', fontFamily: 'poppins'}}>{error}</p>
<div className={styles.btnflex}  >
 
{arrNumber.map((value, i) => (
  <div className={styles.btn} 
isselected = {value === selectedNumber}
key={i}
onClick={() => numberSelectorHandler(value)}

 

>
{value} 
</div>
))
}
 


</div>
<h3>Select Number</h3>


      </div>
    </div>
<div className={styles.ContainerMain} >
 
<img src={` /src/images/Dice${DiceNumber}.png`} onClick={(roleDice)}/> 
 
<p>Click on Dice to roll</p>
<button className={styles.Mainbtn} onClick={resetScore}>Reset Score</button>
<button className={styles.Mainbtn} onClick={() => {setrules('Show Rules')}}>Show Rules</button>
</div>
{rules == 'Show Rules' && <RulesPage></RulesPage>}

    </>
  )
}

export default MainPage