import React, { useEffect } from 'react';
import "../assets/styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {

    const item = useSelector((state) => state.items)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className='cart'>
                    <span className='cart-logo'><FontAwesomeIcon icon={faShoppingCart} /></span>
                    <span className="badge badge-pill bg-danger">{item.number}</span>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
