import { Route, Routes } from 'react-router';
import './App.css';
import Main from './components/Main';
import Memo from './components/Memo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='memo' element={<Memo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
