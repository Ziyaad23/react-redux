import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import CharacterDetail from './Components/CharacterDetail/CharacterDetail';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:characterID" element={<CharacterDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
