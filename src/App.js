import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

//  Page imports
import Homepage from './pages/HomePage/HP_Index';
import OrderPage from './pages/OrderPage/OP_Index';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/order' element={<OrderPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;