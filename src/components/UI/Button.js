import React from 'react'
import styles from './Button.module.css'
function Button(props) {
  const submitHandler = () => {
    if(props.onClick){
      props.onClick()
    }
  }
  return (
    <button className={styles.button} type='submit' onClick={submitHandler}>{props.buttonName}</button>
  )
}

export default Button