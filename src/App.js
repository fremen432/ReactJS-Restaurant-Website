import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

//  Page imports
import Homepage from './pages/HomePage/HP_Index';
import OrderPage from './pages/OrderPage/OP_Index';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  document.onclick = (e) => {
    if (e.target.id !== 'dropdown_btn') { 
      console.log(isOpen);
      setIsOpen(false) 
    }
  }

  document.body.onscroll = function(){console.log('this is being scrolled')}

  // document.addEventListener('scroll', e => {
  //   console.log('this is scrolled')
  // })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage setIsOpen={ setIsOpen } isOpen={ isOpen } />} />
          <Route exact path='/order' element={<OrderPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;