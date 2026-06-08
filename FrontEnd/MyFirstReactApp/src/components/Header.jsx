import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-danger d-flex justify-content-between align-items-center p-2 ">
        <div className="d-flex gap-4 ">
          {/* <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/product"}>Products</Link>
          <Link to={"/ContactUs"}>Contact Us</Link> */}
        </div>
        <div className=" d-flex gap-3">
          <Link to={"/login"}>
            <button className="btn bg-outline-light">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn bg-white">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
