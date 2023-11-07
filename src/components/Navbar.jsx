import React from 'react';
import "../assets/styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className='cart'>
                    <span className='cart-logo'><FontAwesomeIcon icon={faShoppingCart} /></span>
                    <span className="badge badge-pill bg-danger">1</span>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
