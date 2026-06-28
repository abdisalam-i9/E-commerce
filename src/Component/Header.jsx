import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5"; 
import { useState } from "react";

function Header() {
  const [open, setopen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-md relative">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          E-commerce
        </Link>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/Product">Product</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/Blog">Blog</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/contact">contact</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Cart 🛒
          </Link>

          <button onClick={() => setopen(!open)} className="md:hidden text-3xl text-gray-700 focus:outline-none">
            {open ? <IoClose /> : <CiMenuBurger />}
          </button>
        </div>

        {open && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-lg md:hidden z-50">
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => setopen(false)}><Link to="/">Home</Link></li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => setopen(false)}><Link to="/Product">product</Link></li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => setopen(false)}><Link to="/contact">Contact</Link></li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => setopen(false)}><Link to="/cart">Cart</Link></li>
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;