

// 🦄c13


import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating';


// import data_products from '../data_products'

const ProductScreen = () => {

  // 🦄c10. useParams
  /* 
  🍀c10-10. 
  useParams 사용방법  (수업에서 한 방식과는 다름)
  const {id} = useParams(); 사용함  

  🍀c10-20. useNavigate
  */
  const { id } = useParams();
  
  
  // const product = data_products.find((p)=> p._id === id);

  // 🍀c13
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    const fetchProduct = async ()=>{
        const res = await axios.get(`/api/products/${id}`);    
        setProduct(res.data);
    }

    fetchProduct();    
}, [])



  // 🍀c10-20.
  const navigate = useNavigate();

  return (
    <div>
        <h3 className='components_name'>ProductScreen</h3>
 
        <div>🍀c10-10. </div>
        <div>{product.name}</div>
        

        <div>
          <p>  🍀c10-20. </p>
          <button onClick={()=>{navigate(-1) }}>  navigate(-1) </button>
          <button onClick={()=>{navigate(-2) }}>  navigate(-2) </button>
          <button onClick={()=>{navigate('/product/2') }}>  navigate('/product/2') </button>
          <button onClick={()=>{navigate('/') }}>  navigate('/') </button>
        </div>
        
        <Row>
          <Col md={6}>
          <Image src={product.image} fluid ></Image>
            <img src={product.image} alt=""></img>
          </Col>

          <Col md={3}>
            <ListGroup>
              <ListGroupItem>
                <h2>{product.name}</h2>
              </ListGroupItem>

              <ListGroupItem>
                <Rating value={product.rating} text={`${product.numReviews}`}></Rating>
              </ListGroupItem>

              <ListGroupItem>
                Price : ${product.price}
              </ListGroupItem>

              <ListGroupItem>
                Description : ${product.description}
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroupItem>
                  <Row>
                    <Col>Price : </Col>
                    <Col>
                      ${product.price}
                    </Col>                  
                  </Row>
                </ListGroupItem>   
                
                <ListGroupItem>
                  <Row>
                    <Col>Status : </Col>
                    <Col>
                     <p>🍀c10-30. conditional rendering</p>
                    </Col>
                    <Col>
                      {
                        product.countInStock > 0 
                        ? 'In Stock'
                        : 'Out of Stock'
                      }
                    </Col>                  
                  </Row>
                </ListGroupItem>                  

                            
                <ListGroupItem>
                  <button disabled>Add to Cart</button>

                  <p>🍀c10-40. conditional rendering : inStock이 0이면, 버튼 클릭안되게 함 </p>
                  <button disabled={product.countInStock ===0 }>🍀disabled={product.countInStock ===0 }</button>                  
                </ListGroupItem>   

              </ListGroup>
            </Card>
          </Col>

        </Row>


    </div>
  )
}

export default ProductScreen