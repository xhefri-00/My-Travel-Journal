import React from 'react';
import globeIcon from '../images/globe.png';

const Header = () => {
  return (
    <header>
      <img src={globeIcon} alt="Globe" className="header-icon" />
      <span>my travel journal.</span>
    </header>
  );
};

export default Header;
