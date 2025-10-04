import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb currentPage="Contact" />

      <div className="container my-5">
        <div className="row g-4 ">
          {/* Left Column - Contact Info */}
          <div className="col-12 col-md-4 bg-light rounded shadow-sm  p-sm-3">
            <h3 className="fw-bold mb-4">Get In Touch</h3>
            <div className="mb-4 d-flex align-items-start gap-3">
              <i className="bi bi-telephone fs-3"></i>
              <div>
                <p className="mb-0">+012 345 678 102</p>
                <p className="mb-0">+012 345 678 102</p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start gap-3">
              <i className="bi bi-globe fs-3"></i>
              <div>
                <p className="mb-0">urname@email.com</p>
                <p className="mb-0">urwebsitename.com</p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start gap-3">
              <i className="bi bi-geo-alt fs-3"></i>
              <div>
                <p className="mb-0">Address goes here,</p>
                <p className="mb-0">street, Crossroad 123.</p>
              </div>
            </div>

            <h5 className="fw-bold mt-4">Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-pinterest"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-tumblr"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-vimeo"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-12 col-md-8">
            <form
              onSubmit={handleSubmit}
              className="p-sm-4 bg-light rounded shadow-sm py-4"
            >
              <div className="row g-3 ">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control shadow-none"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control shadow-none"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control shadow-none"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-3">
                <textarea
                  name="message"
                  className="form-control shadow-none"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mt-3 text-end">
                <button type="submit" className="btn btn-dark px-4">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
