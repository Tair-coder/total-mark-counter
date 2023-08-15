import { useSelector } from "react-redux";
import "./App.css";
import AmountOfMarks from "./components/first-screen/AmountOfMarks";
import FillInSections from "./components/second-screen/FillInSections";
import IsLoading from "./components/loader/IsLoading";
import { useEffect, useState } from "react";
import TotalMark from './components/third-screen/TotalMark';

function App() {
  const stateCurrentPage = useSelector((state) => state.main.currentBlock);
  const [currentBlock,setCurrentBlock] = useState(<AmountOfMarks />);
  useEffect(() => {
    if (stateCurrentPage === "second") {
      setCurrentBlock(<FillInSections />);
    } else if (stateCurrentPage === 'third'){
      setCurrentBlock(<IsLoading/>)
    }else if(stateCurrentPage === 'fourth'){
      setCurrentBlock(<TotalMark/>)
    } else{
      setCurrentBlock(<AmountOfMarks/>)
    }
  }, [stateCurrentPage]);
  return (
    <div className="App">
      {currentBlock != <IsLoading/> ? <h1 className="title">счетчик итоговой оценки</h1> : '' }
      {currentBlock}
    </div>
  );
}

export default App;
