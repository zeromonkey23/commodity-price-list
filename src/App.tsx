import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import PriceList from './pages/PriceList';
import CreatePriceList from './pages/PriceList/components/Create';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/price-list" replace/>}/>
        <Route path="/price-list" element={<PriceList/>}/>
        <Route path="/price-list/create" element={<CreatePriceList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
