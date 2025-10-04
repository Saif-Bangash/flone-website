import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    // Here you can call your API for password reset
    console.log("Reset link sent to:", email);
    alert(`Password reset link sent to ${email}`);

    // Optional: navigate back to login page
    navigate("/login");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body login-card-body p-5">
              <h2 className="card-title login-card-title text-center mb-4">
                Forgot Password
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control rounded-pill"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <button
                  type="submit"
                  className="btn login-btn   w-100 rounded-pill"
                >
                  Send Reset Link
                </button>
              </form>

              <p className="text-center mt-4">
                Remembered your password?{" "}
                <Link to="/login" className="login-link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
