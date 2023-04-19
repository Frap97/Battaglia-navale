import './App.css';
import React from 'react';
import Homepage from './pages/homepage';
import Menu from './pages/menu';
import Game from './pages/game';
import Opzioni from './pages/opzioni';
import Profile from './pages/profile';
import Tutorial from './pages/tutorial';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/registrazione';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registrazione" element={<Registration />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/opzioni" element={<Opzioni />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;