import React from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";
import styles from "./TotalMark.module.css";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";

import { mainActions } from "../../store/main-slice";
function TotalMark() {
  const dispatchFunction = useDispatch()
  const returnMainBlockHandler = () => {
    dispatchFunction(mainActions.changeBlock())
  }
  return (
    <Card>
      <Title title={"Итоговая оценка"} />
      <h3 className={styles.mark}>Удовлетворительно</h3>
        <ul className={styles.list}>
          <li>
            <h3 className={styles.title0fMark}>В виде буквы</h3>
            <h2 className={styles.markInOtherWays}>A</h2>
          </li>

          <li>
            <h3 className={styles.title0fMark}>В виде процентов</h3>
            <h2 className={styles.markInOtherWays}>78</h2>
          </li>

          <li>
            <h3 className={styles.title0fMark}>Цифровой эквивалент</h3>
            <h2 className={styles.markInOtherWays}>2.33</h2>
          </li>
        </ul>
      <Button buttonName={"Подсчитать снова"} onClick={returnMainBlockHandler} />
    </Card>
  );
}

export default TotalMark;
