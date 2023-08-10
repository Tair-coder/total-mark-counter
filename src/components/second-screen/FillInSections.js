import React from "react";
import Title from "../UI/Title";
import Button from "../UI/Button";
import styles from "./FillInSections.module.css";
import Form from "../UI/Form";
import Card from "../UI/Card";
function FillInSections() {
//   const [first, setfirst] = useState([]);
//   const amountOfInput = 27;

//   useEffect(() => {
//     let arr = [];
//     for (let i = 0; i < amountOfInput; i++) {
//       arr.push("text");
//     }
//     setfirst(arr);
//   }, [amountOfInput]);
  const submitHandler = () => {};
  return (
    <Card>
      <Title title={"Заполните пустые ячейки оценками "} />
      <Form submitHandler={submitHandler}>
        <div className={styles.wrapper}>
          {/* {first.map((item) => {
            return (
              <input type={item} className={styles.inputbox} maxlength="3" />
            );
          })} */}
        </div>
        <p className={styles.error}>Заполните все пустые поля</p>
        <Button buttonName="Подсчитать" />
      </Form>
    </Card>
  );
}

export default FillInSections;
