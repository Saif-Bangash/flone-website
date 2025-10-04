/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import ProductImage from "../components/ProductImage";
import { blogData, products, slides } from "../utlis/data";
import { Link } from "react-router-dom";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6s wait before auto-slide
    return () => clearTimeout(timer);
  }, [activeSlide]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <main className="py-4 heroSection position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="row align-items-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`col-12 d-flex align-items-center ${
                  activeSlide === index ? "fade-in-bottom" : "d-none"
                }`}
              >
                <div className="row align-items-center">
                  {/* Left Text */}
                  <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <div className="text-center text-md-start">
                      <h3 className="mb-3 fw-bold">{slide.heading}</h3>
                      <p className="mb-4 display-2 fw-semibold">
                        {slide.subheading}
                      </p>
                      <div className="sliderBtn">
                        <a href="shop.html" className="animatedBtn">
                          SHOP NOW
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="col-12 col-md-6 text-center">
                    <img
                      src={slide.image}
                      alt={slide.heading}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            className="slider-arrow left-arrow"
            onClick={prevSlide}
            aria-label="Previous"
          >
            &#10094;
          </button>
          <button
            className="slider-arrow right-arrow"
            onClick={nextSlide}
            aria-label="Next"
          >
            &#10095;
          </button>
        </div>
      </main>

      {/* flone icons */}
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <img
                src="https://flone-demo.myshopify.com/cdn/shop/files/support-1_compact.png?v=1613705307"
                alt="flone icon"
                className="img-fluid animated "
              />
              <div className="text-start">
                <h4 className="mt-2 fs-5">Free shipping</h4>
                <p className="mb-0">Free shipping on all orders</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <img
                src="https://flone-demo.myshopify.com/cdn/shop/files/support-2_compact.png?v=1613705307"
                alt="flone icon"
                className="img-fluid animated "
              />
              <div className="text-start">
                <h4 className="mt-2 fs-5">24/7 Online Support</h4>
                <p className="mb-0">Free shipping on all order</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <img
                src="https://flone-demo.myshopify.com/cdn/shop/files/support-3_compact.png?v=1613705307"
                alt="flone icon"
                className="img-fluid animated "
              />
              <div className="text-start">
                <h4 className="mt-2 fs-5">Money Return</h4>
                <p className="mb-0">Free shipping on all order</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <img
                src=" https://flone-demo.myshopify.com/cdn/shop/files/support-4_compact.png?v=1613705307"
                alt="flone icon"
                className="img-fluid animated "
              />
              <div className="text-start">
                <h4 className="mt-2 fs-5">Order Discount</h4>
                <p className="mb-0">Free shipping on all order</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Deals */}
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h2 className="d-flex align-items-center justify-content-center text-center mb-4">
              <span
                className="me-3"
                style={{ width: "50px", borderTop: "3px solid #000" }}
              ></span>
              Daily Deals
              <span
                className="ms-3"
                style={{ width: "50px", borderTop: "3px solid #000" }}
              ></span>
            </h2>

            <ul className="list-unstyled d-flex justify-content-center gap-4">
              <li>
                <a
                  href="#best-sellers"
                  className="text-decoration-none text-dark fs-5"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#new-arrivals"
                  className="text-decoration-none text-dark fs-5"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#top-sell"
                  className="text-decoration-none text-dark fs-5"
                >
                  Top Sell
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="row g-4 pt-4">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
              <Link
                to={`/product/${product.id}`} // dynamic id
                className="text-decoration-none text-dark"
              >
                <ProductImage
                  frontSrc={product.front}
                  backSrc={product.back}
                  name={product.name}
                  price={product.price}
                  onSale={product.onSale} // true hone pe badge show hoga
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="d-flex align-items-center justify-content-center text-center mb-4">
              <span
                className="me-3"
                style={{ width: "50px", borderTop: "3px solid #000" }}
              ></span>
              OUR BLOG
              <span
                className="ms-3"
                style={{ width: "50px", borderTop: "3px solid #000" }}
              ></span>
            </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {blogData.map((blog, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="blog-card position-relative">
                <div className="blog-image position-relative overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="img-fluid" />
                  <span className="badge position-absolute top-0 start-0 m-2">
                    {blog.badge}
                  </span>
                </div>
                <div className="blog-content bg-white text-center shadow rounded p-3 position-absolute start-50 translate-middle-x">
                  <h4 className="fw-medium mb-1">{blog.title}</h4>
                  <p className="text-muted fst-italic mb-0">{blog.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
