import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-info shadow rounded">
          <h1 className="text-center">Welcome to Home Page!!!</h1>
          <p className="text-center text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit eius neque eum modi. Ducimus veniam necessitatibus
            voluptatum, illum debitis delectus.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-primary me-2"
              onClick={() => navigate("/product")}
            >
              Check our Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
