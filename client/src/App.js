import {useState} from 'react';
import './App.css';
import {Gnb} from './components/gnb/Gnb';
import {Board} from './components/board/Board';
import {Main} from './components/main/Main';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {



  return (
    <div className="App">
      <Gnb />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
