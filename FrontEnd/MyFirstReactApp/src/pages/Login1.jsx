import { useState } from "react";
import { Link } from "react-router-dom";
import foodTable from "../assets/foodTable.webp";

function Login1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email :", email);
    console.log("password :", password);
  };

  return (
    <div
      className="auth-page d-flex justify-content-center align-items-start"
      style={{ backgroundImage: `url(${foodTable})` }}
    >
      <div className="auth-card shadow rounded-4 p-4 mt-5">
        <h1 className="text-center mb-4">Welcome Back</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button type="submit" className="btn btn-danger w-100">
            Login
          </button>
        </form>

        <p className="mt-3 text-center mb-0">
          Don't have an Account?
          <Link to="/register" className="ms-1">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login1;
