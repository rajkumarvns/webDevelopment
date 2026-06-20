import { useState } from "react";
import { Link } from "react-router-dom";
import foodTable from "../assets/foodTable.webp";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UserName :", userName);
    console.log("Password :", password);
  };

  return (
    <div
      className="auth-page d-flex justify-content-center align-items-start"
      style={{ backgroundImage: `url(${foodTable})` }}
    >
      <div className="auth-card shadow rounded-4 p-4 mt-5">
        <h1 className="text-center mb-4">Register Here</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="form-control"
            placeholder="Choose a username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <br />

          <label htmlFor="new-password" className="form-label">
            Password
          </label>
          <input
            id="new-password"
            type="password"
            className="form-control"
            placeholder="Create a password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />

          <div className="text-end">
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </div>
        </form>

        <p className="mt-3 text-center mb-0">
          Already have an Account?
          <Link to="/login" className="ms-1">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
