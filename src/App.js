import React from 'react';
import HomePage from './features/containers/homePage';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
            <Route exact path="/" element={<HomePage />}/>
      </Routes>
    </div>
  )
}

export default App;