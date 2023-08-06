
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Header() {

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    auth.logout()
    navigate('/login', { replace: true })
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Bolttech To-Do</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogout}>Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default Header;
