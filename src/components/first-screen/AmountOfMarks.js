import React from 'react'
import Button from '../UI/Button'
import Title from '../UI/Title'
import styles from './AmountOfMarks.module.css'
function AmountOfMarks() {
    const submitHandler = () => {

    }
  return (
    <React.Fragment>
        <Title title="Введите количество оценок"/>
        <form onSubmit={submitHandler} className={styles.form}>
            <input type='text'className={styles.input}/>
            <Button buttonName='Продолжить'/>
        </form>
    </React.Fragment>
  )
}

export default AmountOfMarks