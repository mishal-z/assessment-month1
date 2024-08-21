import React, { useEffect, useState } from "react";
import { Product } from "../utils/types";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCart(cartItems);
  }, []);

  useEffect(() => {
    setTotalPrice(cart.reduce((sum, item) => sum + item.price, 0));
  }, [cart]);

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item: Product) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(item.id)}>
              Remove From Cart
            </button>
          </li>
        ))}
      </ul>
      <h4>Total: PKR {totalPrice}</h4>
      <button
        className="checkout-button"
        onClick={() => {
          navigate("/checkout");
        }}
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
