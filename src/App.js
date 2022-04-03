import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import CharacterDetail from './Components/CharacterDetail/CharacterDetail';
import DeathGenerator from './Components/DeathGenerator/DeathGenerator';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:char_id" element={<CharacterDetail />} />
          <Route path="/death_generator" element={<DeathGenerator />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
