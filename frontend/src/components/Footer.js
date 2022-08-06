import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';


const Footer = () => {
  return (
    <div>
       <h3 className="components_name">Footer</h3>

       <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy: Proshop</Col>
        </Row>
       </Container>
    </div>
  )
}

export default Footer