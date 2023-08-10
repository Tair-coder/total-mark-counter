import React, { useState } from 'react'
import Button from '../UI/Button'
import Title from '../UI/Title'
import styles from './AmountOfMarks.module.css'
import Form from '../UI/Form'
import Card from '../UI/Card'
function AmountOfMarks() {
  const [isEnteredInputCorrect,setIsEntredInputCorrect] = useState(true);
    const submitHandler = () => {

    }
  return (
    <Card>
        <Title title="Введите количество оценок"/>
        <Form submitHandler={submitHandler}>
          <input type='text'className={styles.input} maxlength="2"/>
          {!isEnteredInputCorrect && <p className={styles.error}>Введите число корректно</p>}
            <Button buttonName='Продолжить'/>
        </Form>
    </Card>
  )
}

export default AmountOfMarks