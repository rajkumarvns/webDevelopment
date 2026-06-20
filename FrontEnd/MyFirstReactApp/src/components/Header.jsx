import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-danger d-flex justify-content-between align-items-center p-2">
        <div className="d-flex align-items-center ps-3">
          <Link to="/" className="text-white fs-4">
            🏠
          </Link>
        </div>
        <div className="d-flex gap-3 pe-3">
          <Link to="/login">
            <button className="btn bg-outline-light">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn bg-white">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
