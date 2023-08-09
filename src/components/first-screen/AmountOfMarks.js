import React from 'react'
import Button from '../UI/Button'
import Title from '../UI/Title'

function AmountOfMarks() {
    const submitHandler = () => {

    }
  return (
    <React.Fragment>
        <Title title="Введите количество оценок"/>
        <form onSubmit={submitHandler}>
            <input type='number'/>
            <Button buttonName='Продолжить'/>
        </form>
    </React.Fragment>
  )
}

export default AmountOfMarks