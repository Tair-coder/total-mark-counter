import React from 'react'
import styles from './Card.module.css'
function Card(props) {
  const classes = props.classes ? ` ${styles.props.classes} ${styles.card}` : styles.card
  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default Card