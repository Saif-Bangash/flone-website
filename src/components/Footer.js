/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false); // top pe button hide
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setVisible(false); // scroll complete hone se hide
  };
  return (
    <>
      <footer className="bg-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2 mb-4">
              <a href="/">
                <img
                  src="https://htmldemo.net/flone/flone/assets/img/logo/logo.png"
                  alt="flone icon"
                  className="img-fluid mt-4"
                />
              </a>
              <p className="pt-3 text-muted small">
                Copyright © 2025 HasThemes | Built with Flone by HasThemes.
              </p>
            </div>

            <div className="col-12 col-md-2 mb-4">
              <h5 className="fw-bold mb-3 fs-6">ABOUT US</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/contact">Store location</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/contact">Orders tracking</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-2 mb-4">
              <h5 className="fw-bold mb-3 fs-6">USEFUL LINKS</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Support Policy</a>
                </li>
                <li>
                  <a href="#">Size guide</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-2 mb-4">
              <h5 className="fw-bold mb-3 fs-6">FOLLOW US</h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <h5 className="fw-bold mb-3 fs-6">SUBSCRIBE</h5>
              <p className="text-muted">
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="email@example.com"
                />
                <button className="btn custom-subscribe-btn text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 text-center text-muted small">
              Flone - Minimalist Fashion Shopify Theme <br />
              Copyright © 2025 HasThemes | Built with Flone by HasThemes.
            </div>
          </div>
        </div>
      </footer>

      <a
      href="#"
      className={`scroll-top-btn ${visible ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
       <i class="bi bi-chevron-double-up text-white fs-5"></i>
      </a>
    </>
  );
}
