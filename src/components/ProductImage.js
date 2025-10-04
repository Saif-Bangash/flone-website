import React from "react";
import { useCart } from "../context/CartContext";

const ProductImage = ({ frontSrc, backSrc, name, price, oldprice, onSale, product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1); // add 1 by default
  };

  return (
    <div className="card border-0 product-img-card position-relative">
      {onSale && (
        <span className="position-absolute top-0 start-0 mt-2 ms-2 text-white fw-semibold px-2 rounded sale-badge">
          SALE -15%
        </span>
      )}

      <div className="product-img-wrapper position-relative">
        <img src={frontSrc} alt={`${name} front`} className="front-img" />
        {backSrc && <img src={backSrc} alt={`${name} back`} className="back-img" />}

        <div className="overlay-btns position-absolute bottom-0 start-50 translate-middle d-flex gap-2">
          <button className="btn btn-light btn-sm">
            <i className="bi bi-eye"></i>
          </button>
          <button className="btn btn-light btn-sm" onClick={handleAddToCart}>
            <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>

      <div className="card-body text-center">
        <h6 className="card-title fs-5">{name}</h6>

        {/* Price Row */}
        <div className="d-flex justify-content-center align-items-center gap-2">
          <span className="fw-bold text-dark">{price}</span>
          {oldprice && (
            <span className="text-muted text-decoration-line-through">
              {oldprice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
