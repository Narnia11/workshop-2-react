import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
  console.log('props:',props)

  return (
<nav className="navbar navbar-expand-lg bg-light">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className='nav-link' to="/">welcome </Link>
        </li>
        <li className="nav-item">
        <Link  className='nav-link' to="/about">About </Link>
        </li>
        <li className="nav-item">
        <Link  className='nav-link' to="/CrudDemo">People </Link>
        </li>
      </ul>


</nav>

  );
}

export default Header