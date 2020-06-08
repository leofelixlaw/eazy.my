import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link className='logo link' to="/">Product</Link>
      <nav>
        <ul className='nav' >
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
