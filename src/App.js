import { useSelector } from 'react-redux';
import './App.css';
import AmountOfMarks from './components/first-screen/AmountOfMarks';
import FillInSections from './components/second-screen/FillInSections';
// import IsLoading from './components/loader/IsLoading';
// import TotalMark from './components/third-screen/TotalMark';

function App() {
  
  const stateCurrentPage = useSelector(state => state.main.currentBlock)
  return (
    <div className="App">
      <h1 className='title'>счетчик итоговой оценки</h1>
      {stateCurrentPage === 'second' ? <FillInSections/> : <AmountOfMarks/>}      
    </div>
  );
}

export default App;
