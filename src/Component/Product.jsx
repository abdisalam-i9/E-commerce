import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  const getProduct = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-15 sm:text-4xl">
          Badeecadahayada Cusub
        </h1>

        <div className="grid gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 px-4 sm:px-10">
          {products.map((item) => {
            // 1. Wixii ka baxsan URL sax ah ka sifee liiska sawirrada (mararka qaar API-gu wuxuu soo dhex diraa ["[\"https://...\"]"])
            let imageUrl = "https://via.placeholder.com/600?text=No+Image+Available";
            
            if (item.images && item.images.length > 0) {
              // Halkan waxaan ku nadiifinaynaa haddii uu sanamyada API-gu wata calaamado khaldan [] ama ""
              const cleanUrl = item.images[0].replace(/[\[\]"]/g, "");
              if (cleanUrl.startsWith("http")) {
                imageUrl = cleanUrl;
              }
            }

            return (
              <div
                key={item.id}
                className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between mx-auto"
              >
                <div className="w-full aspect-square bg-gray-50 overflow-hidden relative group">
                  <img
                    src={imageUrl} // Halkan waxaan u dhiibnay URL-kii la sifeeyay
                    alt={item.title}
                    className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
                    // 2. Haddii uu sawirku si uun u jabo (404), kani wuxuu gelinayaa sawir caalami ah
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/600?text=No+Image+Available";
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight text-left line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xl font-extrabold text-indigo-600">
                      ${item.price}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {/* Link-ga waxaan ka dhignay inuu badanka badanka badhamada wada daboolo */}
                    <Link 
                      to={`/product/${item.id}`} 
                      className="bg-gray-100 text-gray-700 font-semibold py-1.5 px-2 rounded-xl hover:bg-gray-200 active:scale-[0.98] transition-all duration-200 text-center flex items-center justify-center"
                    >
                      Fiiri
                    </Link>
                    <button className="bg-indigo-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-indigo-700 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-indigo-100">
                      Iibso Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;