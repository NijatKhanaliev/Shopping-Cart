import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state=>state.cart);
  const removeToCart =(id)=>{
 dispatch(remove(id))
  }

 const carts = cartProducts.map(cartProduct=>{
  return(
  <div className="col-md-12" style={{marginBottom:'10px'}}>
  <Card key={cartProduct.id} className='h-100'>
    <div className='text-center'>
  <Card.Img variant="top" src={cartProduct.image} style={{width:'100px', height:'130px'}} />
  </div>
  <Card.Body>
    <Card.Title>{cartProduct.title}</Card.Title>
    <Card.Text>INR: {cartProduct.price}</Card.Text>
  </Card.Body>
  <Card.Footer style={{backgroundColor:'white'}}>
  <Button variant="danger" onClick={()=>removeToCart(cartProduct.id)}>Remove</Button>
  </Card.Footer>
</Card>
  </div>
  )
 }) 
  return(
<>
<h1>Cart</h1>
{carts}
</>
  )
  }

export default Cart