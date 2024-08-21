import React from "react";
import ProductsList from "../components/ProductList";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <button className="cart-button" onClick={goToCart}>
        Cart
      </button>
      <h1>Products List</h1>
      <ProductsList />
    </div>
  );
}

export default Home;
