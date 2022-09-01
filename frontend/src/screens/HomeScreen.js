

/* 
    🦄c6.
*/

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import data_products from '../data_products'

// 🍀c6
const HomeScreen = () => {
  return (
    <div>
        <h3 className="components_name"> 🦄c6.HomeScreen</h3>
        <h1>Latest Products</h1>
        <Row>
            {data_products.map((product)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                    <h3>{product.name}</h3>
                    <Product product={product}/>
                </Col>
            ))}
        
        </Row>

    </div>
  )
}

export default HomeScreen