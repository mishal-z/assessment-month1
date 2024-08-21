import React, { useEffect, useState } from "react";
import { Product } from "../utils/types";
import ProductCard from "./ProductCard";

function ProductsList() {
  const products: Product[] = [
    {
      id: 1,
      name: "T-shirt",
      description: "Its a white colored t-shirt",
      price: 2000,
    },
    {
      id: 2,
      name: "T-shirt",
      description: "Its a red colored t-shirt",
      price: 1500,
    },
    {
      id: 3,
      name: "T-shirt",
      description: "Its a lilac colored t-shirt",
      price: 2500,
    },
    {
      id: 4,
      name: "T-shirt",
      description: "Its a black colored t-shirt",
      price: 1000,
    },
  ];

  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    !cart.length || localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="products-list">
      {products.map((product: Product, index: number) => (
        <ProductCard key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductsList;
