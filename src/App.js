import './App.scss';

// import Router from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';


//  Page imports
import Homepage from './pages/HomePage/HomePage';
import OrderPage from './pages/OrderPage/OrderPage';

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">

      <Homepage />
      {/* <OrderPage countCartItems={cartItems.length}/> */}


      {/* <Router>
        <Switch>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </Router> */}

    </div>
  );
}

export default App;