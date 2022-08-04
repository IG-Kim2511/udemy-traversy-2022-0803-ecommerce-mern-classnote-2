import React from 'react'

import {Container, Navbar, Nav} from 'react-bootstrap';



const Header = () => {
  return (
    <div>
        <h3 className="components_name">Header</h3>

        {/*  bg="dark" variant='dark'collapseOnSelect */}
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">Proshop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/cart"><i class="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
                <Nav.Link href="/login"><i class="fa-solid fa-user"></i>Sign In</Nav.Link>        
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </div>
  )
}

export default Header