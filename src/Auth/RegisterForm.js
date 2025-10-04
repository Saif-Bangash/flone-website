import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // External CSS

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Registration logic here
    console.log("Register:", { name, email, password });

    // Navigate after successful registration
    navigate("/login"); // You can change to dashboard page
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
             
            <li className="breadcrumb-item active" aria-current="page">
              Create Account
            </li>
          </ol>
        </nav>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-body login-card-body p-5">
                <h2 className="card-title login-card-title text-center mb-4">
                  Register
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="registerName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="registerName"
                      className="form-control shadow-none rounded-pill"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="registerEmail"
                      className="form-control shadow-none rounded-pill"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="registerPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="registerPassword"
                      className="form-control shadow-none rounded-pill"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control shadow-none rounded-pill"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Confirm your password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn login-btn btn-lg w-100 rounded-pill"
                  >
                    Register
                  </button>
                </form>

                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <a href="/login" className="login-link">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
