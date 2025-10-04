import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, getTotalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    shipping: "standard",
    payment: "cod",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.zip || !formData.country) {
      alert("Please fill all required fields!");
      return;
    }
    alert("Order placed successfully!");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="fs-2 text-muted">Your cart is empty</p>
        <Link to="/" className="btn btn-secondary rounded-pill mt-3 px-4 py-2">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const shippingCost = formData.shipping === "express" ? 10 : 5; // Example shipping costs
  const totalPrice = (Number(getTotalPrice()) + shippingCost).toFixed(2);

  return (
    <div className="container py-5">
      <h2 className="mb-4" style={{ fontWeight: "700", color: "#2F4066" }}>
        Checkout
      </h2>

      <div className="row">
        {/* Billing & Shipping */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0 mb-4">
            <h5 className="mb-3">Billing Details</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Zip / Postal Code</label>
                <input type="text" className="form-control" name="zip" value={formData.zip} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Country</label>
                <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} />
              </div>

              <h5 className="mb-2 mt-4">Shipping Method</h5>
              <div className="mb-3">
                <select className="form-select" name="shipping" value={formData.shipping} onChange={handleChange}>
                  <option value="standard">Standard Shipping ($5)</option>
                  <option value="express">Express Shipping ($10)</option>
                </select>
              </div>

              <h5 className="mb-2 mt-4">Payment Method</h5>
              <div className="mb-3">
                <select className="form-select" name="payment" value={formData.payment} onChange={handleChange}>
                  <option value="cod">Cash on Delivery</option>
                  <option value="card">Credit / Debit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0 mb-4">
            <h5 className="mb-3">Order Summary</h5>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name} x {item.quantity}
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Shipping
                <span>${shippingCost.toFixed(2)}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                Total
                <span>${totalPrice}</span>
              </li>
            </ul>
            <button
              className="btn w-100 rounded-pill text-center"
              style={{ backgroundColor: "#9b4dff", color: "#fff", padding: "10px 0" }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
