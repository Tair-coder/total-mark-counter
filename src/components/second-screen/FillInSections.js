import React, { useState } from "react";
import Title from "../UI/Title";
import Button from "../UI/Button";
import styles from "./FillInSections.module.css";
import Form from "../UI/Form";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../../store/main-slice";
function FillInSections() {
  const [error, setError] = useState("");
  const amountOfSections = useSelector((state) => state.main.amountSections);
  const [inputsValue, setInputsValue] = useState(
    Array(+amountOfSections).fill("")
  );
  const dispatchFunction = useDispatch();
  const maxValueHandler = (value, index) => {
    if (
      value.match(/[а-яА-Яa-zA-Z]/) ||
      value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
    )
      return;
    if (value.length >= 4 || value > 100) return;
    const newInputValues = [...inputsValue];
    newInputValues[index] = +value;
    setInputsValue(newInputValues);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    for (let i = 0; i < inputsValue.length; i++) {
      if (inputsValue[i] === "") {
        setError("*Заполните все пустые поля");
        return;
      }
    }
    setError("");
    dispatchFunction(mainActions.counterOfMark(inputsValue));
    dispatchFunction(mainActions.changeBlock("third"));
  };
  return (
    <Card>
      <Title title={"Заполните пустые ячейки оценками "} />
      <Form submitHandler={submitHandler}>
        <div className={styles.wrapper}>
          {inputsValue.map((item, index) => (
            <input
              key={index}
              className={styles.inputbox}
              onChange={(event) =>
                maxValueHandler(event.target.value, index, event)
              }
              type="text"
              value={item}
              maxLength={3}
              pattern="[0-9]*"
              inputmode="numeric"
            />
          ))}
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <Button buttonName="Подсчитать" />
      </Form>
    </Card>
  );
}

export default FillInSections;
