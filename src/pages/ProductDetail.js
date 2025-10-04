/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import ProductImage from "../components/ProductImage";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const mainProduct = products?.find((p) => p.id === parseInt(id));
  const sliderRef = useRef(null);

  if (!mainProduct) return <p>Product not found</p>;

  const [selectedProduct, setSelectedProduct] = useState(mainProduct);
  const [mainImage, setMainImage] = useState(mainProduct.front);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const allImages = products
    .flatMap((p) => [{ img: p.front, product: p }])
    .filter((item) => item.img);

  const scrollAmount = 100;

  const scrollRight = () => {
    const slider = sliderRef.current;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    if (slider.scrollLeft >= slider.scrollWidth / 2) slider.scrollLeft = 0;
  };

  const scrollLeft = () => {
    const slider = sliderRef.current;
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    if (slider.scrollLeft <= 0) slider.scrollLeft = slider.scrollWidth / 2;
  };

  const { addToCart } = useCart();
  const handleAddToCart = () => addToCart(selectedProduct, quantity);

  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      setReviews((prev) => [...prev, newReview]);
      setNewReview("");
      setShowReviewModal(false);
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment]);
      setNewComment("");
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb currentPage="Product" />

      <div className="container py-5">
        <div className="row">
          {/* Left Column: Images */}
          <div className="col-md-6">
            <div className="mb-3">
              <img
                src={mainImage}
                alt={selectedProduct.name}
                className="img-fluid w-100 rounded"
              />
            </div>

            <div className="position-relative">
              <button
                className="btn btn-light position-absolute start-0 top-50 translate-middle-y"
                style={{ zIndex: 2 }}
                onClick={scrollLeft}
              >
                &#8249;
              </button>

              <div
                className="d-flex gap-2 overflow-hidden"
                ref={sliderRef}
                style={{ scrollBehavior: "smooth", padding: "0 40px" }}
              >
                {allImages.map((item, idx) => (
                  <div
                    key={idx}
                    className="border p-1 rounded"
                    style={{ minWidth: "80px", cursor: "pointer" }}
                    onClick={() => {
                      setMainImage(item.img);
                      setSelectedProduct(item.product);
                    }}
                  >
                    <img
                      src={item.img}
                      alt={`Thumbnail ${idx}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>

              <button
                className="btn btn-light position-absolute end-0 top-50 translate-middle-y"
                style={{ zIndex: 2 }}
                onClick={scrollRight}
              >
                &#8250;
              </button>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="col-md-6">
            <span>{selectedProduct.vendor}</span>
            <h2>{selectedProduct.name}</h2>
            <span className="pt-2">{selectedProduct.sku}</span>
            <p className="fs-5 text-danger pt-3">{selectedProduct.price}</p>

            {/* Main Description (always visible) */}
            {selectedProduct.description && (
              <p
                className="mt-4 text-muted"
                style={{ fontSize: "18px", lineHeight: "1.9" }}
              >
                {selectedProduct.description}
              </p>
            )}

            {/* Quantity selector */}
            <div className="d-flex align-items-center gap-2 mt-3">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-3">{quantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3 mt-4">
              <button
                className="btn btn-dark w-75 rounded-pill border-0"
                onClick={handleAddToCart}
                style={{
                  backgroundColor: "#9b4dff",
                  color: "#fff",
                  padding: "10px 0",
                }}
              >
                Add to Cart
              </button>
              <button className="btn fs-2 d-flex align-items-center gap-2">
                <FaHeart className="text-secondary" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-5 d-flex justify-content-center align-items-center gap-3 border-bottom pb-2 flex-wrap">
          <button
            className={`btn btn-link text-decoration-none text-dark fs-6 fs-md-4 shadow-none ${
              activeTab === "description"
                ? "fw-bold text-dark text-decoration-none"
                : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`btn btn-link text-decoration-none text-dark fs-6 fs-md-4 shadow-none ${
              activeTab === "reviews"
                ? "fw-bold text-dark text-decoration-none"
                : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({reviews.length})
          </button>
          <button
            className={`btn btn-link text-decoration-none text-dark fs-6 fs-md-4 shadow-none ${
              activeTab === "comments"
                ? "fw-bold text-dark text-decoration-none"
                : ""
            }`}
            onClick={() => setActiveTab("comments")}
          >
            Comments ({comments.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-3">
          {activeTab === "description" && (
            <div>
              <p className="text-muted fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla.
              </p>
              <p className="text-muted fs-6">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur sodales ligula in
                libero. Sed dignissim lacinia nunc. Curabitur tortor.
                Pellentesque nibh.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button
                className="btn btn-secondary px-4 rounded-pill mb-3"
                onClick={() => setShowReviewModal(true)}
              >
                Add Review
              </button>
              {reviews.length === 0 ? (
                <p className="text-muted fs-2">No reviews yet.</p>
              ) : (
                <ul className="list-group">
                  {reviews.map((r, idx) => (
                    <li key={idx} className="list-group-item">
                      {r}
                    </li>
                  ))}
                </ul>
              )}

              {/* Review Modal */}
              {showReviewModal && (
                <div className="modal d-block" tabIndex="-1" role="dialog">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header bg-light">
                        <h5 className="modal-title ">Add Review</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setShowReviewModal(false)}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <textarea
                          className="form-control"
                          rows="4"
                          value={newReview}
                          onChange={(e) => setNewReview(e.target.value)}
                          placeholder="Write your review..."
                        ></textarea>
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-secondary rounded-pill"
                          onClick={() => setShowReviewModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="btn btn-danger rounded-pill"
                          onClick={handleReviewSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "comments" && (
            <div className="w-50">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="3"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                ></textarea>
                <button
                  className="btn btn-secondary rounded-pill px-4 mt-4"
                  onClick={handleCommentSubmit}
                >
                  Submit
                </button>
              </div>
              {comments.length === 0 ? (
                <p className="text-muted fs-4">No comments yet.</p>
              ) : (
                <ul className="list-group">
                  {comments.map((c, idx) => (
                    <li key={idx} className="list-group-item">
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <div className="row py-5">
          <div className="col-12">
            <h2 className="d-flex align-items-center justify-content-center text-center mb-4">
              <span
                className="me-3"
                style={{ width: "50px", borderTop: "3px solid #000" }}
              ></span>
              Related Products
              <span
                className="ms-3"
                style={{ width: "50px", borderTop: "3px solid #000" }}
              ></span>
            </h2>
          </div>
          <div className="d-flex overflow-auto gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0"
                style={{ minWidth: "220px" }}
              >
                <Link
                  to={`/product/${product.id}`}
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
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
