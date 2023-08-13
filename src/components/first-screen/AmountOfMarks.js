import React, { useRef, useState } from 'react'
import Button from '../UI/Button'
import Title from '../UI/Title'
import styles from './AmountOfMarks.module.css'
import Form from '../UI/Form'
import Card from '../UI/Card'
function AmountOfMarks() {
  const [error,setError] = useState("")
  const enteredNumber = useRef()
    const submitHandler = (e) => {
      e.preventDefault()
      if(enteredNumber.current.value > 56 ) {
        setError('Введите число меньшь или равное 56')
        return
      } else if (enteredNumber.current.value < 1) {
        setError('Введите число равное 1 или больше')
        return
      }
      setError('')
      
    }
  return (
    <Card>
        <Title title="Введите количество оценок"/>
        <Form submitHandler={submitHandler}>
          <input type='number'className={styles.input} max="56" min='1' ref={enteredNumber}/>
          {error && <p className={styles.error}>{error}</p>}
            <Button buttonName='Продолжить'/>
        </Form>
    </Card>
  )
}

export default AmountOfMarks