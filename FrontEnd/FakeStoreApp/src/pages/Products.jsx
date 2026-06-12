import React, { useEffect, useState } from "react";
import loading from "../assets/loading.gif";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isError) {
    return (
      <h1 className="text-red-500 text-center text-2xl">
        {errorMessage}
      </h1>
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={loading} alt="Loading" className="w-20" />
        </div>
      ) : (
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              className="border rounded-lg p-3 shadow"
              key={product.id}
            >
              <div className="w-full h-40">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-between min-h-[200px] mt-3">
                <div>
                  <p className="text-lg font-semibold">
                    {product.title}
                  </p>

                  <p className="text-sm capitalize text-gray-500">
                    {product.category}
                  </p>

                  <p className="font-bold">
                    ₹ {(product.price * 100).toFixed(0)}
                  </p>

                  <p>{product.rating?.rate}/5 ⭐</p>
                </div>

                <button className="bg-orange-400 rounded-full px-4 py-2 mt-3">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;