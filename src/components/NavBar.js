import {Link,BrowserRouter as Router} from 'react-router-dom'

const NavBar = () => {
    return ( 
        <>
        <nav>
        <Link to='/'>Flipkart</Link>
        <Link to='/cart'>Go to Cart</Link>
        </nav>
        </> );
}
 
export default NavBar;