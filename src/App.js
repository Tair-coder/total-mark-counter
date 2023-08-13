import './App.css';
import Card from './components/UI/Card'
import AmountOfMarks from './components/first-screen/AmountOfMarks';
// import FillInSections from './components/second-screen/FillInSections';
import IsLoading from './components/loader/IsLoading';
import TotalMark from './components/third-screen/TotalMark';
function App() {
  return (
    <div className="App">
      <h1 className='title'>счетчик итоговой оценки</h1>
      <AmountOfMarks/>
      
    </div>
  );
}

export default App;
