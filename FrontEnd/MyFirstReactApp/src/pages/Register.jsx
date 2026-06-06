import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UserName :", userName);
    console.log("Password :", password);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-info shadow rounded">
          <h1 className="text-center">Register Here</h1>

          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <br />

            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>

          <p>
            Already have an Account?
            <Link to="/login"> Login Here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
