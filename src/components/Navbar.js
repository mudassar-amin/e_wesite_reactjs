import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h2 className="text-white text-xl font-bold">ShopEase</h2>

        {/* Hamburger menu for mobile */}
        <div className="sm:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Links (hidden on mobile, visible on desktop) */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/Products" className="text-white hover:text-gray-300">Products</Link>
          </li>
          <li>
            <Link to="/Cart" className="text-white hover:text-gray-300">Cart</Link>
          </li>
          <li>
            <Link to="/Login" className="text-white hover:text-gray-300">Login</Link>
          </li>
          <li>
            <Link to="/Checkout" className="text-white hover:text-gray-300">Checkout</Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu (shown when isOpen is true) */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col space-y-4 mt-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/Products" className="text-white hover:text-gray-300">Products</Link>
          </li>
          <li>
            <Link to="/Cart" className="text-white hover:text-gray-300">Cart</Link>
          </li>
          <li>
            <Link to="/Login" className="text-white hover:text-gray-300">Login</Link>
          </li>
          <li>
            <Link to="/Checkout" className="text-white hover:text-gray-300">Checkout</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
