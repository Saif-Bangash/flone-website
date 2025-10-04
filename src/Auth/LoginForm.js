/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import "./Auth.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    // Example: after validation, navigate to Register page (or dashboard)
    console.log("Login successful:", { email, password });
    navigate("/register"); // Change to your desired page
   };

  return (
    <>
      <div className="my-4 p-5" style={{ background: "#eeebeb" }}>
        {/* Breadcrumb 2 */}
        <nav aria-label="breadcrumb" className="d-flex justify-content-center">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none text-dark">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/account" className="text-decoration-none text-dark">
                Account
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Profile
            </li>
          </ol>
        </nav>
      </div>

      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-body login-card-body p-5">
                <h2 className="card-title login-card-title text-center mb-4">
                  Login
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="loginEmail"
                      className="form-control rounded-pill"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="loginPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control rounded-pill"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                    />
                  </div>

                  {/* Forgot Password Link */}
                  <div className="text-end mb-4">
                    <Link
                      to="/forgot-password"
                      className="login-link small text-decoration-none"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn login-btn btn-lg w-100 rounded-pill"
                  >
                    Login
                  </button>
                </form>

                <p className="text-center mt-4">
                  Don’t have an account?{" "}
                  <Link to="/register" className="login-link">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
