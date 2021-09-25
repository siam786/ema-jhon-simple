import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    //console.log(newCart);
    setCart(newCart);
    //save local storage
    addToDb(product.key);
  };

  useEffect(() => {
    fetch("./../../products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const savedCart= getStoredCart();
    for(const key in savedCart){
      const addedProduct = products.find(product =>product === key);
      console.log(key,addedProduct);

    }
  }, []);
  return (
    <div className="shop-container">
      <div className="shop">
        {products.map((product) => (
          <Product
            key={product.key}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
asma59906990786!@#$