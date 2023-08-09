import React from 'react'
import Button from '../UI/Button'
import Title from '../UI/Title'
import styles from './AmountOfMarks.module.css'
import Form from '../UI/Form'
function AmountOfMarks() {
    const submitHandler = () => {

    }
  return (
    <React.Fragment>
        <Title title="Введите количество оценок"/>
        <Form submitHandler={submitHandler}>
          <input type='text'className={styles.input} maxlength="2"/>
            <Button buttonName='Продолжить'/>
        </Form>
    </React.Fragment>
  )
}

export default AmountOfMarks