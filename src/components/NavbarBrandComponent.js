import { useState } from 'react';
import { NavbarBrand } from 'reactstrap';

const NavbarBrandComponent = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <NavbarBrand
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href="/"
      style={{
        display: 'inline-block',
        fontFamily: 'Amatic SC, cursive',
        fontSize: '40px',
      }}
    >
      <span style={{ color: isHovering ? 'lightgray' : 'white' }}>Cook</span>
      <span
        style={{
          display: 'inline-block',
          transform: 'rotate(14deg)',
          color: isHovering ? 'orange' : 'white',
        }}
      >
        ₿
      </span>
      <span style={{ color: isHovering ? 'lightgray' : 'white' }}>ook</span>
    </NavbarBrand>
  );
};

export default NavbarBrandComponent;
