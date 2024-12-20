import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white px-4 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Athar Snack House</h1>
        <button
          className="text-white text-3xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className={`md:flex space-x-6 hidden`}>
          <li>
            <a href="#home" className="font-medium hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="font-medium hover:underline">
              Menu
            </a>
          </li>
          <li>
            <a href="#order" className="font-medium hover:underline">
              Checkout
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 space-y-2 md:hidden">
          <li>
            <a href="#home" className="block text-lg hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="block text-lg hover:underline">
              Menu
            </a>
          </li>
          <li>
            <a href="#order" className="block text-lg hover:underline">
              Checkout
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
