
/* 
    🦄c6.
*/

import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


// 🦄c9
import {Link} from 'react-router-dom'

// 🦄c6, 🦄c7
const Product = ({product}) => {
  return (
    <div>
        <h3 className='components_name'>🦄c6,🦄c7.Product</h3>

        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
            
            {/*🍉 "~~~" 👉{~~~}로 바꾸어서 쓸 수 있음 */}
                <Card.Img src={product.image} variant='top'/>   
            </Link>

            <Card.Body>
              <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>                
              </Link>
              
              <Card.Text as='div'>
                {/*  <div className='my-3'>
                        ⭐{product.rating} rating from {product.price}
                      </div> */}

                {/* 🍀c7 */}
                <Rating value={product.rating} text={`${product.numReviews}`}  />
              </Card.Text>
              
              <Card.Text as='h3'>${product.price}</Card.Text>

            </Card.Body>
        </Card>
    </div>
  )
}

export default Product