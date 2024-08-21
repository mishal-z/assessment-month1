import React from "react";
import { Product } from "../utils/types";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>PKR {product.price}</p>
      <div className="card-button">
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
