import React from 'react';
import './Header.css';
import Logo from '../../images/logos/Group 1329.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="navbar-brand" >
    <a href="/#"><img src={Logo} alt=""/></a>
  </div>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarSupportedContent " >
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Donation</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/#">Events</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Blog</a>
      </li>
       <li className="nav-item active">
        <button className="nav-link registerR"> <Link to ="/register"><h6>Register</h6> </Link> </button>
      </li>
      <li className="nav-item">
        <button className="nav-link adminN"><h6>Admin</h6></button>
      </li> 
    </ul>

  </div>
</nav>
        </div>
    );
};

export default Header;