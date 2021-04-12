import React from 'react';

const Cart = (props) => {
const cart = props.cart;
let total = 0;
for(let i = 0; i< cart.length; i++){
    const product = cart[i];
    total = total + product.price;
}
let shipping = 0;
if(total > 35){
    shipping = 0;
}
else if (total > 15){
    shipping = 4.99;
}
const tax = total / 10;

const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}

    return (
        <div>
            <h4>Order Summary :</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>product price : {formatNumber(total)}</p>
            <p>Shipping Cost: {formatNumber(shipping)}</p>
            <p><small>Vat tax & Ait :{formatNumber(tax)}</small></p>
            <p>Total Price : {formatNumber(total + shipping + tax)}</p>
        </div>
    );
};

export default Cart;