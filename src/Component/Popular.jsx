import Data from "./Data";
import { Link } from "react-router-dom";

function Popular() {
  const popularProducts = Array.isArray(Data) ? Data.slice(0, 4) : [];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Alaabta Ugu Caansan</h2>
            <p className="text-gray-500 mt-2">Kuwa ugu iibsiga badnaa todobaadkan.</p>
          </div>
          <Link to="/Product" className="text-indigo-600 font-bold hover:underline flex items-center space-x-1">
            <span>Arag Dhammaan</span> 
            <i className="fas fa-arrow-right text-sm"></i>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((product) => (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-56 object-cover" 
                />
                <div className="p-5 space-y-3">
                  <span className="text-xs bg-indigo-100 text-indigo-800 font-semibold px-2.5 py-0.5 rounded">
                    Premium
                  </span>
                  <h3 className="font-bold text-gray-900 text-lg line-clamp-1">
                    {product.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-5 pt-0 flex justify-between items-center">
                <span className="text-xl font-extrabold text-gray-900">
                  ${product.price ? product.price.toFixed(2) : "0.00"}
                </span>
                <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Popular;