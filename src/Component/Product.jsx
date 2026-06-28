import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=30")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-10 sm:text-4xl">
        Badeecadahayada Cusub
      </h1>

      <div className="grid gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 px-4 sm:px-10">
        {products.map((item) => {
          const imageUrl =
            item.thumbnail ||
            "https://via.placeholder.com/600?text=No+Image+Available";

          return (
            <div
              key={item.id}
              className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between mx-auto"
            >
              <div className="w-full aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600?text=No+Image+Available";
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xl font-extrabold text-indigo-600">
                    ${item.price}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Link
                    to={`/product/${item.id}`}
                    className="bg-gray-100 text-gray-700 font-semibold py-2 rounded-xl hover:bg-gray-200 text-center"
                  >
                    Fiiri
                  </Link>

                  <button className="bg-indigo-600 text-white font-semibold py-2 rounded-xl hover:bg-indigo-700">
                    Iibso Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;