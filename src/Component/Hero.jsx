import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";

function Hero() {
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

  const item = products.length > 0 ? products[1] : null;

  return (
    <>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Ku Soo Dhowow Mustaqbalka Adeegga Online-ka!
            </h1>
            <p className="text-lg text-indigo-100">
              Halkan ka hel agabka ugu tayada sarreeya, qiimaha ugu jaban, iyo soo gaarsiin degdeg ah oo albaabkaaga ah.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition inline-block">
                Iibso Hada
              </a>
              <a href="#" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition inline-block">
                Sii Akhri
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            {item && (
              <img 
                src={item.images} 
                alt={item.title} 
                className="rounded-2xl shadow-2xl w-full object-cover h-96" 
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;