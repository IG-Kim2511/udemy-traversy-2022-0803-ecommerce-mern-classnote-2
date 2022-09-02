import React from 'react'

import {Container, Navbar, Nav} from 'react-bootstrap';

// 🦄c9
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
  return (
    <div>
        <h3 className="components_name">Header</h3>

        {/*  bg="dark" variant='dark'collapseOnSelect */}
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
          <Container>
           <LinkContainer to="/">           
            <Navbar.Brand >Proshop</Navbar.Brand>
           </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">

                <LinkContainer to="/cart">            
                  <Nav.Link href=""><i class="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/login">           
                 <Nav.Link href=""><i class="fa-solid fa-user"></i>Sign In</Nav.Link>        
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </div>
  )
}

export default Header