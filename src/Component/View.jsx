import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function View() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // Halkan ayaad ka tagtay! Haddii product-ku wali yahay null, koodhkan hoose ayaa iska hor istaagaya error-ka
  if (!product) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <p className="text-xl font-medium text-gray-500 animate-pulse">
          Waa la soo kicinayaa xogta...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/product" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 mb-8 transition gap-1">
        <i className="fas fa-arrow-left text-xs"></i> Ka laabo
      </Link>

      <div className="grid md:grid-cols-2 gap-10 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
        
        <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden group flex items-center justify-center p-4">
          <img
            src={product.image} 
            alt={product.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="flex flex-col justify-between py-2">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider bg-indigo-50 text-indigo-700 font-bold px-3 py-1 rounded-full">
              Gadiidka Bilaash ah
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {product.title} 
            </h1>
            <p className="text-3xl font-black text-indigo-600">
              ${product.price ? product.price.toFixed(2) : "0.00"}
            </p>
            
            <div className="border-t border-gray-100 pt-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Faahfaahinta</h3>
              <p className="mt-2 text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 active:scale-[0.99] transition shadow-md hover:shadow-indigo-200">
              <i className="fas fa-shopping-bag mr-2"></i> Iibso Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default View;