import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import data_products from '../data_products'

const ProductScreen = () => {

  // 🦄c10. useParams
  /* 
  🍀c10-10. 
  useParams 사용방법  (수업에서 한 방식과는 다름)
  const {id} = useParams(); 사용함  

  🍀c10-20. useNavigate
  */
  const { id } = useParams();
  const product = data_products.find((p)=> p._id === id);

  console.log(product)

  // 🍀c10-20.
  const navigate = useNavigate();

  return (
    <div>
        <h3 className='components_name'>ProductScreen</h3>
 
        <div>🍀c10-10. </div>
        <div>{product.name}</div>
        

        <p>  🍀c10-20. </p>
        <button onClick={()=>{navigate(-1) }}>  navigate(-1) </button>
        <button onClick={()=>{navigate(-2) }}>  navigate(-2) </button>
        <button onClick={()=>{navigate('/product/2') }}>  navigate('/product/2') </button>
        <button onClick={()=>{navigate('/') }}>  navigate('/') </button>
    </div>
  )
}

export default ProductScreen