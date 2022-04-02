import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProduct';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import './Orders.css'

const Orders = () => {
    const[product,setProducts]=useProducts();
    const [cart,setCart]=useCart(product)
  const removeProduct=product =>{
    
      const newCart=cart.filter(x => x.id !== product.id);
      setCart(newCart)
      removeFromDb(product.id)
  }
    return (
        <div className='shop-container'>
           <div className="review-container">
            {
                cart.map(x=> <ReviewOrder key={x.id} cart={x} removeProduct={removeProduct} />)
            }

        
           </div>
           <div className="cart-container">
               <Cart cart={cart}>
                  
               </Cart>
           </div>
        </div>
    );
};

export default Orders;