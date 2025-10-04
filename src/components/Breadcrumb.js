import React from "react";
import { Link } from "react-router-dom"; // Agar aap react-router use kar rahe ho

const Breadcrumb = ({ currentPage }) => {
  return (
    <div className="my-4 p-5" style={{ background: "#eeebeb" }}>
      <nav aria-label="breadcrumb" className="d-flex justify-content-center">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-dark">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currentPage}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
