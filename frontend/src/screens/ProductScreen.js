import React from 'react'
import { useParams } from 'react-router-dom';
import data_products from '../data_products'

const ProductScreen = () => {

  // 🦄c10. useParams
  /* 
  🍀c10-10. 
  useParams 사용방법  (수업에서 한 방식과는 다름)
  const {id} = useParams(); 사용함  
  */
  const { id } = useParams();
  const product = data_products.find((p)=> p._id === id);

  console.log(product)

  return (
    <div>
        <h3 className='components_name'>ProductScreen</h3>
 
        <div>🍀c10-10. </div>
        <div>{product.name}</div>
    </div>
  )
}

export default ProductScreen