import './App.css';
import Card from './components/UI/Card'
import AmountOfMarks from './components/first-screen/AmountOfMarks';
// import FillInSections from './components/second-screen/FillInSections';
function App() {
  return (
    <div className="App">
      <h1 className='title'>счетчик итоговой оценки</h1>
      <Card>
        <AmountOfMarks/>
      </Card>
    </div>
  );
}

export default App;
