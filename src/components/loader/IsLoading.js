import React, { useEffect, useState } from 'react'
import styles from './IsLoading.module.css'
function IsLoading() {
  const [count,setCount] = useState(0)
  useEffect(()=> {
      const loading = setInterval(()=> {
      setCount(prevNum => prevNum + Math.floor(Math.random() * 5))
      if(count >= 97){
        setCount(100)
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