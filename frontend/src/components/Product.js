
/* 
    🦄c6.
*/

import React from 'react'
import { Card } from 'react-bootstrap'
import data_products from '../data_products'
import Rating from './Rating'

const Product = ({p_product}) => {
  return (
    <div>
        <h3 className='components_name'>Product</h3>

        <Card className='my-3 p-3 rounded'>
            <a href={'/product/${p_product._id}'}>
            {/*🍉 "~~~" 👉{~~~}로 바꾸어서 쓸 수 있음 */}
                <Card.Img src={p_product.image} variant='top'/>   
            </a>

            <Card.Body>
              <a href={'/product/${p_product._id}'}>
                <Card.Title as="div">
                  <strong>{p_product.name}</strong>
                </Card.Title>                
              </a>
              
              <Card.Text as='div'>
                {/*  <div className='my-3'>
                        ⭐{p_product.rating} rating from {p_product.price}
                      </div> */}

                {/* 🍀c7 */}
                <Rating value={data_products.rating} text={`${data_products.numReviews}`}  />
              </Card.Text>
              
              <Card.Text as='h3'>${p_product.price}</Card.Text>

            </Card.Body>
        </Card>
    </div>
  )
}

export default Product