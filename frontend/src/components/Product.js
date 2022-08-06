
/* 
    🍀c6.
*/

import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({p_product}) => {
  return (
    <div>
        <h3 className='components_name'>Product</h3>

        <Card className='my-3 p-3 rounded'>
            <a href={'/product/${p_product._id}'}>
                <Card.Img src={p_product.image} variant='top'/>
            </a>
        </Card>
    </div>
  )
}

export default Product