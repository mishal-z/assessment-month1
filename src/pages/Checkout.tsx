import React, { useEffect, useState } from "react";
import { Product } from "../utils/types";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const [noOfItems, setNoOfItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setNoOfItems(cartItems.length);
    setTotalPrice(
      cartItems.reduce((sum: number, item: Product) => sum + item.price, 0)
    );
  }, []);

  const completePurchase = () => {
    alert(
      noOfItems > 0 ? "Thank you for the purchase" : "Please add items in cart"
    );
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Order Summary</h3>
        <p>Items: {noOfItems}</p>
        <p>Subtotal: PKR {totalPrice}</p>
      </div>
      <button className="complete-purchase-button" onClick={completePurchase}>
        Complete Purchase
      </button>
    </div>
  );
}

export default Checkout;
