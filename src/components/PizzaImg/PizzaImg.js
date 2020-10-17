import React from 'react'

import styles from './PizzaImg.css'
import PizzaImage from '../../assets/pizza.jpg'

const PizzaImg = () => {
  return (
    <div className={ styles.PizzaImage } >
      <img src={ PizzaImage } className={ styles.Pizza } />
    </div>
  )
}

export default PizzaImg
