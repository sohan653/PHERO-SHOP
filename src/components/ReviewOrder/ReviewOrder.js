import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import './ReviewOrder.css'

const ReviewOrder = ({cart,removeProduct}) => {
    const{name,price,shipping,quantity,img,id}=cart
    console.log(id)
   
    return (
        <div className='review-item'>
         <div className='img'>
             <img src={img} alt="" />
         </div>
         <div>
             <h1>{name.length>10? name.slice(0,10): name}</h1>
             <h3>price:{price}</h3>
             <p>Shipping fee: {shipping}</p>
             <p>quantity:{quantity}</p>
         </div>
         <div>
             <button className='btn' onClick={()=>{removeProduct(cart)}}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
         </div>
        </div>
    );
};

export default ReviewOrder;