import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
    return (
        <div>
            <nav>
              <Link to='/'>Dashboard</Link> 
              <Link to='about'>About</Link>  
              <Link to='products'>ProductsPage</Link>  
            </nav>
        </div>
    );
}

export default Navbar;