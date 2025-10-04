import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function Wishlist() {
  // Start with empty wishlist
  const [items, setItems] = useState([]);

  return (
    <>
      <Breadcrumb currentPage="Wishlist" />

      <div className="wishlist-container container my-5">
        {items.length === 0 ? (
          <div className="text-center text-muted py-5">
            <h2>Your wishlist is currently empty!</h2>
            <p>Add some products to see them here.</p>
          </div>
        ) : (
          <div className="row">
            {items.map((item) => (
              <div key={item.id} className="col-12 col-md-4 mb-3">
                <div className="card shadow-sm p-3">
                  <h5>{item.name}</h5>
                  <p className="text-muted">{item.price}</p>
                  <button className="btn btn-sm btn-primary">View</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
