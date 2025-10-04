import { useState } from "react";
import { filterSections, products, shopProducts } from "../utlis/data";
import { Link } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import Breadcrumb from "../components/Breadcrumb";

const Shop = () => {
  const [isRotated, setIsRotated] = useState(false);

  const toggleRotate = () => setIsRotated(!isRotated);

  return (
    <main>
      {/* Breadcrumb */}
      <Breadcrumb currentPage="Shop" />

      <div className="container">
        <div className="row">
          {/* Sidebar Accordion */}
          <div className="col-12 col-md-3">
            <div className="accordion shadow-sm bg-light" id="accordionExample">
              {filterSections.map((section, index) => (
                <div key={section.id} className="accordion-item border-0">
                  <h2 className="accordion-header" id={`heading-${section.id}`}>
                    <button
                      className="accordion-button d-flex justify-content-between align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${section.id}`}
                      aria-expanded="true"
                      aria-controls={`collapse-${section.id}`}
                      onClick={toggleRotate}
                    >
                      <span className="text-dark ls-2 fw-bold">
                        {section.title}
                      </span>
                      <span
                        className={`text-dark fw-bold fs-4 ms-2 rotate-icon ${
                          isRotated ? "rotated" : ""
                        }`}
                      >
                        ×
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`collapse-${section.id}`}
                    className="accordion-collapse collapse show"
                    aria-labelledby={`heading-${section.id}`}
                  >
                    <div className="accordion-body">
                      {section.type === "price" ? (
                        <>
                          <div className="d-flex gap-2 mb-3">
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              placeholder="Min $"
                            />
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              placeholder="Max $"
                            />
                          </div>
                          <button className="btn btn-dark btn-sm w-100">
                            Filter
                          </button>
                        </>
                      ) : (
                        <ul className="list-unstyled mb-0">
                          {section.items.map((item) => (
                            <li
                              key={item.id}
                              className="d-flex justify-content-between align-items-center py-2 px-2 hover-item"
                            >
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={item.id}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.id}
                                >
                                  {item.label}{" "}
                                  <span className="text-muted">
                                    ({item.count})
                                  </span>
                                </label>
                              </div>
                              <span className="text-danger fw-bold d-none hover-x">
                                ×
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product List */}
          <div className="col-12 col-md-9">
            <div className="row">
              {shopProducts.slice(0, 8).map((product, index) => (
                <div key={index} className="col-12 col-md-4  mb-4">
                  <ProductImage
                    frontSrc={product.front}
                    backSrc={product.back}
                    name={product.name}
                    price={product.price}
                    oldprice={product.oldprice}
                    onSale={product.onSale}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
