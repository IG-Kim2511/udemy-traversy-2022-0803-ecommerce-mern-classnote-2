

// 🦄c6. c13

/* 
🍀13-10. server.js 에서 fetch api할 계획
frontend/data_products.js 파일 지움

🍀
.then.....이렇게 해도되지만, 
강사가 async syntax를 더 좋아함
*/

import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

import axios from 'axios'


// import data_products from '../data_products'


// 🍀c6
const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        /* 
        🍀.then.....이렇게 해도되지만, 
        강사가 async syntax를 더 좋아함

        axios.get('/api/products').then();
         */

        /*🍀
        react localhost : 3000
        server localhost : 5000
        👉react localhost address를 5000으로 맞춰줘야함
        */

        const fetchProducts = async ()=>{
            const res = await axios.get('/api/products');

        
            setProducts(res.data);
        }

        fetchProducts();
        
    }, [])
    




  return (
    <div>
        <h3 className="components_name"> 🦄c6.HomeScreen</h3>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <h3>{product.name}</h3>
                    <Product product={product}/>
                </Col>
            ))}
        
        </Row>

    </div>
  )
}

export default HomeScreen