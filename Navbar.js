import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">My App</h1>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white md:hidden focus:outline-none"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} md:flex space-x-4`}>
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
