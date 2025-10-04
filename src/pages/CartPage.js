import React from "react";
import { useCart } from "../context/CartContext";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleQuantityChange = (id, qty) => {
    if (qty >= 1) updateQuantity(id, qty);
  };

  if (cart.length === 0)
    return (
      <div className="container py-5 text-center">
        <p className="fs-2 text-muted">Your cart is empty</p>
        <Link to="/" className="btn btn-secondary rounded-pill mt-3 px-4 py-2">
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-md-start" style={{ fontWeight: "700", color: "#2F4066" }}>
        Your Cart Items
      </h2>

      <div className="row g-4">
        {cart.map((item) => (
          <div key={item.id} className="col-12">
            <div className="card p-3 shadow-sm d-flex flex-row align-items-center">
              <img
                src={item.front}
                alt={item.name}
                className="img-fluid"
                style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "6px" }}
              />
              <div className="flex-grow-1 ms-md-4 mt-2 mt-md-0 text-center text-md-start">
                <h5>{item.name}</h5>
                <p className="mb-1">Price: ${Number(item.price).toFixed(2)}</p>
                <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <input type="text" value={item.quantity} className="form-control form-control-sm text-center" style={{ width: "50px" }} readOnly />
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <div className="mt-2 mt-md-0 text-center text-md-end">
                <p className="mb-1">Total: ${(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
                <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Actions */}
      <div className="d-flex flex-column flex-md-row justify-content-between mt-4 gap-3">
        <Link to="/" className="btn btn-secondary rounded-pill">Continue Shopping</Link>
        <button className="btn btn-danger rounded-pill" onClick={() => clearCart()}>Clear Cart</button>
      </div>

      {/* Cart Totals */}
      <div className="row mt-4">
        <div className="col-12 col-md-4 offset-md-8">
          <div className="card p-4 shadow-sm bg-light border-0">
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${getTotalPrice()}</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <strong>Total</strong>
              <strong>${getTotalPrice()}</strong>
            </div>
            <Link to="/checkout" className="btn w-100 mt-3 rounded-pill text-center" style={{ backgroundColor: "#9b4dff", color: "#fff", padding: "10px" }}>
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
