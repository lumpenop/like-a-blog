import {useState} from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import {Gnb} from './components/header/Gnb';
import {Board} from './components/board/Board';
import {Main} from './components/main/Main';
import { Profile } from './components/profile/Profile';
import { Write } from './components/write/Write';


function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Gnb />}>
          <Route index element={<Main />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/user/:board" element={<Board />} />
          <Route path="/write" element={<Write />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
