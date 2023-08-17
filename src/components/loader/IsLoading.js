import React, { useEffect, useState } from 'react'
import styles from './IsLoading.module.css'
import { useDispatch } from 'react-redux'
import { mainActions } from '../../store/main-slice'
function IsLoading() {
  const [count,setCount] = useState(0)
  const dispatchFunction = useDispatch()
  useEffect(()=> {
      const loading = setInterval(()=> {
      setCount(prevNum => prevNum + Math.floor(Math.random() * 15))
      if(count >= 97){
        setCount(100)
        setTimeout(()=> {
          if(count === 100){
            dispatchFunction(mainActions.changeBlock('fourth'))
          }
        },1000)
        return
      }
    },100)
      return () => clearInterval(loading)
  },[count])
  return (
    <div className={styles.container}>
        <h1 className={styles.counter}>{count}%</h1>
    </div>
  )
}

export default IsLoading