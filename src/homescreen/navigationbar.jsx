import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div style={{ background: "rgba(0, 0, 0, 0.7)" }}>
        <Navbar bg="red" variant="dark">
          <Container>
            <Navbar.Brand href="/">DMOVIE</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#trending">Trending</Nav.Link>
              <Nav.Link href="#superhero">Superhero</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Button variant="outline-light">Login</Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;
