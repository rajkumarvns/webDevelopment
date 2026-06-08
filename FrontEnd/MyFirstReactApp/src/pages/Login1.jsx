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
    <>
    <img src={foodTable} alt="bg Image" />;
    <div className="d-flex justify-content-center">
      <div className="border p-3 w-50 mt-5 bg-white text-black shadow rounded">
        <h1 className="text-center">Welcome Back</h1>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button type="submit" className="btn btn-danger w-100">
            Login
          </button>
        </form>

        <p className="mt-3">
          Don't have an Account?
          <Link to="/register"> Register Here</Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Login1;