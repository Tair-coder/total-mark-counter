import React from 'react'
import styles from './Form.module.css'
function Form(props) {
  return (
    <form onSubmit={props.submitHandler} className={styles.form}>
        {props.children}
    </form>
  )
}

export default Form