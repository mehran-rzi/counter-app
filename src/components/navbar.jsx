import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
  return ( 
      <nav className="navbar bg-body-tertiary">
<div className="container-fluid">
  <a className="navbar-brand" href="#">
      Navbar <span className="badge bg-pill bg-secondary">{totalCounters}</span>
      </a>
</div>
</nav>
      
   );
}

export default NavBar;