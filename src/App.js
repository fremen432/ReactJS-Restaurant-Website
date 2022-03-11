import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//  Page imports
import Homepage from './pages/HomePage/HomePage';
import OrderPage from './pages/OrderPage/OrderPage';

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