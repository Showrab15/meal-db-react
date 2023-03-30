import React from 'react';

const Cart = (props) => {
     const  cart = props.cart;
     console.log(cart)


 let totalPrice = 0 ;
 let quantity = 0;


for(const meal of cart){

    meal.quantity =  meal.quantity || 1;

   totalPrice = totalPrice + meal.price * meal.quantity;
   quantity= quantity + meal.quantity;

}
const tax = totalPrice * 5 / 100;
const grandTotal = totalPrice + tax 

    return (
        <div>
            <h3 className='text-center mt-2'> Order Summary </h3>
            <div className='cart-details ms-5 mt-5'>

            <p className=' fw-semibold '>Selected Items : {quantity} </p>
            <p className=' fw-semibold '>Total Price : ${totalPrice} </p>
            <p className='fw-semibold '> Tax: ${tax} </p>
            <h4 > GrandTotal : ${grandTotal} </h4>
            </div>
        
        </div>
    );
};

export default Cart;