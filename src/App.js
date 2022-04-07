import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import './animations.scss';

import HomePage from './pages/index.jsx'
import OrderPage from './pages/Orderpage.jsx';

function App() {
  // let windowWidth = 0;
  // window.addEventListener('resize', () => windowWidth = window.innerWidth)


  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/order' element={<OrderPage />} />
        </Routes>
    </div>
  );
}

export default App;