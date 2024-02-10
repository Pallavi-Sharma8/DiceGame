import React from 'react'
import styles from './HomePage.module.css'
const HomePage = ({gamePage, setgamePage}) => {
  return (
    <>
    <div className={styles.Container}>
    
<img src='\src\images\dices 1.png'/>
<div  className={styles.Container2}>
<h1>Dice Game</h1>
<button className={styles.button} onClick={ () => {setgamePage('PlayNow')}}>Play Now</button>

    </div>

</div>

    </>
  )
}

export default HomePage