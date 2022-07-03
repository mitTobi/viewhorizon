import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Eigene Imports */
import Home from './pages/Home';
import Tour from './pages/Tour';
import MyNavi from './components/MyNavi';

function App() {
  return (
    <Router>
      <MyNavi />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/tour' element={<Tour />} />
      </Routes>
    </Router>
  )
}

export default App;
