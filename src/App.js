
import './App.css';
import Listing from './components/listings/Listing';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import CartContainer from './components/cart/CartContainer';
import Context from '../src/context/context'
import Each from './components/listings/Each';

function App() {
  return (
    <div>
    <Router>
    <NavBar/>

    <Switch>
    <Route path='/' exact component={Listing}/>
    <Route path='/cart' exact component={CartContainer}/>
    </Switch>
    
    <Context>
    <Each/>
    </Context>
    </Router>
     
  
    </div>
  );
}

export default App;
