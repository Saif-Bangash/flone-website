/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  blogMenu,
  demoGroup1,
  demoGroup2,
  demoGroup3,
  pagesMenu,
  products,
  shopGroup1,
  shopGroup2,
  shopGroup3,
} from "../utlis/data";
import { useCart } from "../context/CartContext";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const menuGroups = [
    { title: "Demo Group 01", data: demoGroup1 },
    { title: "Demo Group 02", data: demoGroup2 },
    { title: "Demo Group 03", data: demoGroup3 },
  ];

  const shopMenuGroups = [
    { title: shopGroup1.title, data: shopGroup1.items },
    { title: shopGroup2.title, data: shopGroup2.items },
    { image: shopGroup3.image, link: shopGroup3.link },
  ];
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="main-menu bg-white border-bottom">
      <nav className="navbar navbar-expand-lg container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand me-3">
          <img
            src="https://htmldemo.net/flone/flone/assets/img/logo/logo.png"
            alt="Logo"
            style={{ height: "24px" }}
          />
        </Link>

        <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0 d-flex d-lg-none">
          <Link href="/search" className="text-dark">
            <i className="bi bi-search fs-5"></i>
          </Link>
          <Link href="/wishlist" className="text-dark">
            <i className="bi bi-heart fs-5"></i>
          </Link>
          <Link href="/account" className="text-dark">
            <i className="bi bi-person fs-5"></i>
          </Link>
          <Link to="/cart" className="text-dark position-relative">
            <i className="bi bi-cart fs-5"></i>
            {totalItems > 0 && (
              <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        {/* Mobile toggle */}
        <button
          className="navbar-toggler shadow-none mt-2"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i class="bi bi-list display-2 "></i>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse mobile-menu-animated ">
          <ul className="navbar-nav mx-auto text-start gap-lg-3 d-none d-lg-flex">
            {/* Home Mega Menu */}
            <li className="nav-item dropdown mega-dropdown position-relative">
              <Link
                to={"/"}
                className="nav-link d-flex align-items-center home-link"
                role="button"
              >
                Home <i className="fa fa-angle-down mt-1 ms-1 small"></i>
              </Link>
              <div className="mega-menu shadow-lg p-4">
                <div className="row">
                  {menuGroups.map((group, i) => (
                    <div className="col-md-4 p-4" key={i}>
                      <h6 className="fw-bold mb-3 text-start">{group.title}</h6>
                      <ul className="list-unstyled m-0">
                        {group.data.map((item, index) => (
                          <li key={index}>
                            <a href={item.url} className="dropdown-item">
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            {/* Shop Mega Menu */}
            <li className="nav-item dropdown mega-dropdown position-relative">
              <Link
                to="/shop"
                className="nav-link d-flex align-items-center"
                role="button"
              >
                Shop <i className="fa fa-angle-down mt-1 ms-1 small"></i>
              </Link>
              <div className="mega-menu shadow-lg p-4">
                <div className="row">
                  {shopMenuGroups.map((group, i) =>
                    group.image ? (
                      <div className="col-md-4 p-4" key={i}>
                        <a href={group.link}>
                          <img
                            src={group.image}
                            alt="Mega Menu Banner"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    ) : (
                      <div className="col-md-4 p-4" key={i}>
                        <h6 className="fw-bold mb-3 text-start text-uppercase">
                          {group.title}
                        </h6>
                        <ul className="list-unstyled m-0">
                          {group.data.map((item, index) => (
                            <li key={index}>
                              <a href={item.url} className="dropdown-item">
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </li>

            {/* products  */}
            <li className="nav-item">
              <Link to={`/product/${products[0].id}`} className="nav-link">
                Products
              </Link>
            </li>

            {/* Pages Mega Menu */}
            <li className="nav-item dropdown pages-mega-dropdown position-relative">
              <a href="#" className="nav-link" role="button">
                Pages <i className="fa fa-angle-down mt-1 ms-1 small"></i>
              </a>

              <div className="mega-menu shadow-lg p-4">
                <div className="row">
                  <div className="col-12">
                    <ul className="list-unstyled">
                      {pagesMenu.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.url}
                            className="dropdown-item px-2 py-1"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* blogs */}
            {/* Blogs Mega Menu */}
            <li className="nav-item dropdown pages-mega-dropdown position-relative">
              <Link to={"/blog"} className="nav-link" role="button">
                Blogs
              </Link>
            </li>
            <li className="nav-item dropdown pages-mega-dropdown position-relative">
              <Link to={"/about"} className="nav-link" role="button">
                About
              </Link>
            </li>
            <li className="nav-item dropdown pages-mega-dropdown position-relative">
              <Link to={"/contact"} className="nav-link" role="button">
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 d-none d-lg-flex">
            <>
              {/* Trigger Button */}
              <a
                className="text-dark"
                data-bs-toggle="offcanvas"
                href="#searchOffcanvas"
                role="button"
                aria-controls="searchOffcanvas"
              >
                <i className="bi bi-search fs-5"></i>
              </a>

              {/* Custom Offcanvas */}
              <div
                className="offcanvas custom-offcanvas"
                tabIndex="-1"
                id="searchOffcanvas"
                aria-labelledby="searchOffcanvasLabel"
              >
                <div className="offcanvas-body search-box-wrapper p-3">
                  <form className="d-flex justify-content-end">
                    <div className="input-group" style={{ maxWidth: "300px" }}>
                      <input
                        type="text"
                        className="form-control rounded-start"
                        placeholder="Search our store"
                      />
                      <button
                        className="btn search-btn text-white"
                        type="submit"
                      >
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
            <div className="position-relative account-dropdown">
              {/* Icon */}
              <button
                onClick={toggleDropdown}
                className="btn text-dark position-relative shadow-none"
              >
                <i className="bi bi-person fs-5"></i>
              </button>

              {/* Dropdown */}
              <div className={`dropdown-menu ${open ? "show" : ""}`}>
                <Link to="/login" className="dropdown-item">
                  Login
                </Link>
                <Link to="/register" className="dropdown-item">
                  Register
                </Link>
                <Link to="/wishlist" className="dropdown-item">
                  Wishlist
                </Link>
                <Link to="/account" className="dropdown-item">
                  My Account
                </Link>
              </div>
            </div>

            <Link to="/wishlist" className="text-dark">
              <i className="bi bi-heart fs-5"></i>
            </Link>
            <Link to="/cart" className="text-dark position-relative">
              <i className="bi bi-cart fs-5"></i>
              {totalItems > 0 && (
                <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Accordion */}
      <div
        className={`mobile-menu-accordion mobile-menu accordion w-100 mt-3 ${
          isOpen ? "d-block" : "d-none"
        }`}
        id="mobileMenuAccordion"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="homeHeading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#homeCollapse"
            >
              Home
            </button>
          </h2>
          <div
            id="homeCollapse"
            className="accordion-collapse collapse"
            data-bs-parent="#mobileMenuAccordion"
          >
            <div className="accordion-body">
              {menuGroups.map((group, i) => (
                <div key={i}>
                  <h6 className="fw-bold">{group.title}</h6>
                  <ul className="list-unstyled">
                    {group.data.map((item, index) => (
                      <li key={index}>
                        <a href={item.url} className="dropdown-item px-0">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="shopHeading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#shopCollapse"
            >
              Shop
            </button>
          </h2>
          <div
            id="shopCollapse"
            className="accordion-collapse collapse"
            data-bs-parent="#mobileMenuAccordion"
          >
            <div className="accordion-body">
              {shopMenuGroups.map((group, i) =>
                group.image ? (
                  <a href={group.link} key={i}>
                    <img
                      src={group.image}
                      alt="Menu"
                      className="img-fluid mb-2"
                    />
                  </a>
                ) : (
                  <div key={i}>
                    <h6 className="fw-bold">{group.title}</h6>
                    <ul className="list-unstyled">
                      {group.data.map((item, index) => (
                        <li key={index}>
                          <a href={item.url} className="dropdown-item px-0">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="pagesHeading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pagesCollapse"
            >
              Pages
            </button>
          </h2>
          <div
            id="pagesCollapse"
            className="accordion-collapse collapse"
            data-bs-parent="#mobileMenuAccordion"
          >
            <div className="accordion-body">
              <ul className="list-unstyled">
                {pagesMenu.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="dropdown-item px-0">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Blogs */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="blogsHeading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#blogsCollapse"
            >
              Blogs
            </button>
          </h2>
          <div
            id="blogsCollapse"
            className="accordion-collapse collapse"
            data-bs-parent="#mobileMenuAccordion"
          >
            <div className="accordion-body">
              <ul className="list-unstyled">
                {blogMenu.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="dropdown-item px-0">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Static Links */}
        {["Collection", "About", "Contact"].map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <Link
                to={`/${item.toLowerCase()}`}
                className="accordion-button collapsed text-decoration-none"
              >
                {item}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </header>
  );
}
