import React, { useState } from "react";
import { blogs, menuItems } from "../utlis/data";
import Breadcrumb from "../components/Breadcrumb";

const Blog = () => {
  const [isRotated, setIsRotated] = useState(true);
  const [isMenuRotated, setIsMenuRotated] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track which submenu is open

  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb currentPage="Blog" />

      {/* Main Container */}
      <div className="container my-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-12 col-md-3">
            <div className="accordion" id="accordionExample">
              {/* Accordion 1 - Search */}
              <div className="accordion-item border-0 shadow-sm mb-3 rounded-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button shadow-none d-flex justify-content-between align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSearch"
                    aria-expanded="true"
                    aria-controls="collapseSearch"
                    onClick={() => setIsRotated(!isRotated)}
                  >
                    <span className="text-dark fw-bold">Search</span>
                    <span
                      className={`text-dark fw-bold fs-4 ms-2 ${
                        isRotated ? "rotate-90" : ""
                      }`}
                    >
                      ×
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseSearch"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    <div className="custom-search-wrapper d-flex">
                      <input
                        type="text"
                        className="form-control shadow-none rounded-start"
                        placeholder="Search our store"
                      />
                      <button className="btn btn-dark rounded-end">
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion 2 - Custom Menu */}
              <div className="accordion-item border-0 shadow-sm rounded-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button shadow-none collapsed d-flex justify-content-between align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseMenu"
                    aria-expanded="false"
                    aria-controls="collapseMenu"
                    onClick={() => setIsMenuRotated(!isMenuRotated)}
                  >
                    <span className="text-dark fw-bold">Custom Menu</span>
                    <span
                      className={`text-dark fw-bold fs-4 ms-2 ${
                        isMenuRotated ? "rotate-90" : ""
                      }`}
                    >
                      ×
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseMenu"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body p-0">
                    <ul className="list-unstyled mb-0">
                      {menuItems.map((item, index) => (
                        <li key={index} className="border-bottom">
                          {/* Parent Item */}
                          <button
                            className="btn w-100 d-flex justify-content-between align-items-center p-2 shadow-none"
                            type="button"
                            onClick={() =>
                              setActiveSubmenu(
                                activeSubmenu === index ? null : index
                              )
                            }
                          >
                            <span className="fw-semibold">{item.label}</span>
                            <span className="fw-bold">
                              {activeSubmenu === index ? "−" : "+"}
                            </span>
                          </button>

                          {/* Submenu */}
                          {activeSubmenu === index && (
                            <div className="ps-4 bg-light">
                              <ul className="list-unstyled pb-2">
                                {item.subItems.map((sub, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="py-1 small text-muted"
                                  >
                                    {sub}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9">
            <div className="row g-4">
              {blogs.map((blog, index) => (
                <div className="col-12 col-md-6" key={index}>
                  <div className="blog-card">
                    <div className="blog-img-wrapper">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-100 rounded blog-img"
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-muted mb-1">
                        {blog.date} | {blog.comments}
                      </p>
                      <h2 className="fw-bold h4 mt-3">{blog.title}</h2>
                      <p className="text-muted mt-3 fs-6">{blog.desc}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <a
                          href="#"
                          className="text-dark text-decoration-none fw-bold"
                        >
                          Read more →
                        </a>
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-muted fs-5">Share:</span>
                          <a href="#" className="text-dark">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="#" className="text-dark">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="#" className="text-dark">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="#" className="text-dark">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
