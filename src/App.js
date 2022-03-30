import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

//  Page imports
import Homepage from './pages/HomePage';
import OrderPage from './pages/OrderPage';

function App() {

  return (


    <div className="App">
      {/* <Route exact path="/" component={Homepage} />
      <Route exact path="/Order" component={OrderPage} /> */}


      {/* <Router> */}
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/order' element={<OrderPage />} />
          {/* <Route exact path='/' element={Homepage} />
          <Route exact path='/order' element={OrderPage} /> */}


        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;