import React, {useState} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Link } from 'react-router-dom';

function AppNavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
        </Navbar>
    </div>
    );
}

export default AppNavBar