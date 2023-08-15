import React, { useEffect,useState } from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";
import styles from "./TotalMark.module.css";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";

import { mainActions } from "../../store/main-slice";
const ratignMark = {
  "excellent":[ [95,'4.00','A','Отлично'],
  [90,'3.67','A-','Отлично']
],
  "good":[ [85,'3.33','B+','Хорошо'],
  [80,'3.00','B','Хорошо'],
  [75,'2.67','B-','Хорошо'],
  [70,'2.33','C+','Хорошо']
],
  "satisfactory":[
    [65,'2.00','C','Удовлетворительно'],
  [60,'1.67','C-','Удовлетворительно'],
  [55,'1.33','D+','Удовлетворительно'],
  [50,'1.00','D','Удовлетворительно']
  ],
  "bad":[
    [49,'0.00','F','Неудовлетворительно']
  ],
}
function TotalMark() {
  const mark = useSelector(state => state.main.mark)
  const [totalMark,setTotalMark] = useState({'word': '','mark':'','digitalEquivalent':''})
  const dispatchFunction = useDispatch()
  useEffect(()=> {
    let sectionMarkNum = 0;
    if(mark >= 90) {
      sectionMarkNum = ratignMark.excellent
    }else if(mark >= 70){
      sectionMarkNum = ratignMark.good
    }else if(mark >=50){
      sectionMarkNum = ratignMark.satisfactory
    }else if(mark <= 49){
      sectionMarkNum = ratignMark.bad
      setTotalMark({
        word:sectionMarkNum[0][2],
        mark:sectionMarkNum[0][3],
        digitalEquivalent:sectionMarkNum[0][1]
      })
    }
    for (let i = 0; i < sectionMarkNum.length; i++) {
      if(mark >= sectionMarkNum[i][0]){
        setTotalMark({
          word:sectionMarkNum[i][2],
          mark:sectionMarkNum[i][3],
          digitalEquivalent:sectionMarkNum[i][1]
        })
        return;
      }
        
    }

  },[mark])
  const returnMainBlockHandler = () => {
    dispatchFunction(mainActions.changeBlock())
  }
  return (
    <Card>
      <Title title={"Итоговая оценка"} />
      <h3 className={styles.mark}>{totalMark.mark}</h3>
        <ul className={styles.list}>
          <li>
            <h3 className={styles.title0fMark}>В виде буквы</h3>
            <h2 className={styles.markInOtherWays}>{totalMark.word}</h2>
          </li>

          <li>
            <h3 className={styles.title0fMark}>В виде процентов</h3>
            <h2 className={styles.markInOtherWays}>{mark}</h2>
          </li>

          <li>
            <h3 className={styles.title0fMark}>Цифровой эквивалент</h3>
            <h2 className={styles.markInOtherWays}>{totalMark.digitalEquivalent}</h2>
          </li>
        </ul>
      <Button buttonName={"Подсчитать снова"} onClick={returnMainBlockHandler} />
    </Card>
  );
}

export default TotalMark;
