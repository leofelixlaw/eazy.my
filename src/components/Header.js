import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed-top">
      {
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="logo" to="/">easy<small>.my</small></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Notification</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Login /Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Help</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      }
    </header>
  )
}

export default Header
