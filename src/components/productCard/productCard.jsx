
import React from "react";
import "./productCard.css";

function ProductCard({ title, englishTitle, description, price, oldPrice, rating, image }) {
  return (
    <div className="product-card shadow-sm">
      <img src={image} alt={title} className="product-img" />

      <h4>{title}</h4>
      <small className="text-muted">({englishTitle})</small>
      <p className="desc">{description}</p>

      <div className="price-box">
        <span className="new-price">{price} ج.م</span>
        <span className="old-price">{oldPrice} ج.م</span>
      </div>

      <div className="rating"> {rating}⭐</div>
      <button className="btn btn-orangehome w-100 mt-2">أضف إلى عربة التسوق</button>
    </div>
  );
}

export default ProductCard;
