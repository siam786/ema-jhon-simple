import React from "react";

const Cart = (props) => {
  //destructure
  const { cart } = props;
  //let total = 0;
  const totalReducer = (previous, product) => previous + product.price;
  const total = cart.reduce(totalReducer, 0);
  /*   for(const product of cart){
        total = total + product.price;
        console.log(total.toFixed(2));
    } */

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order SUmmary:</h3>
      <h5>Item Order:{props.cart.length}</h5>
      <br />
      <p>Total: {total.toFixed(2)}</p>
      <p>Shipping : {shipping}</p>
      <p>Shipping : {tax.toFixed(2)}</p>
      <p>
        <strong>Grand Total:</strong>
        {grandTotal.toFixed(2)}
      </p>
    </div>
  );
};

export default Cart;
