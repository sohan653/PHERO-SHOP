import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';
const auth=getAuth(app)


const Header = () => {

    const [user]=useAuthState(auth)
    return (
        <nav className='header'>
           <Link to='/'> <img src={logo} alt="" /></Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
              {user? <button onClick={()=> signOut(auth)} className='btn'>signout</button> :   <Link to="/login">Login</Link>}
                <Link to="signup">Sign Up</Link>
            </div>
           
        </nav>
    );
};

export default Header;