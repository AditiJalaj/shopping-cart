import './App.css';
import Listing from './components/listings/Listing';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import CartContainer from './components/cart/CartContainer';
import Context from './context/context';

import useCart from '../src/custom-hooks/useCart'

function App() {

  const [cartval,setCartVal,refresh,setRefresh]=useCart()
 
  return (
    <div>
    <Router>
    <NavBar/>
    <Switch>
    <Route path='/' exact component={() => <Listing cartval={cartval} refresh={refresh} setRefresh={setRefresh} setCartVal={setCartVal} />}/>
    <Route path='/cart' exact component={() => <CartContainer refresh={refresh} setRefresh={setRefresh} cartval={cartval} setCartVal={setCartVal} />} />
    </Switch>
    </Router>

    </div>
  );
}

export default App;
