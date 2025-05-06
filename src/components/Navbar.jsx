import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'}`}>
      {/* Navbar container */}
      <div className="max-w-7xl px-4 py-3 flex items-center justify-between mx-auto relative">

        {/* LEFT: Hamburger + Desktop heading */}
        <div className="flex items-center space-x-2 flex-1">
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              ☰
            </button>
          </div>
          <div className="text-xl font-bold hidden md:block">Loan Calculator</div>
        </div>

        {/* CENTER: Mobile heading */}
        <div className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2 md:hidden">
          Loan Calculator
        </div>

        {/* CENTER: Desktop nav links */}
        <div className="hidden md:flex flex-nowrap whitespace-nowrap space-x-4 justify-center flex-1">
          <Link to="/" className="rounded-sm px-2 bg-blue-400 hover:bg-blue-800 text-white">HOME</Link>
          <Link to="/Exchangerates" className="px-2 rounded-sm hover:bg-blue-800 text-white">EXCHANGE RATES(LIVE)</Link>
          <Link to="/about" className="px-2 rounded-sm hover:bg-blue-800 text-white">ABOUT</Link>
          <Link to="/Errorpage" className="px-2 rounded-sm hover:bg-blue-800 text-white">ERROR PAGE</Link>
        </div>

        {/* RIGHT: Dark mode toggle */}
        <div className="flex justify-end flex-1">
          <label className="relative inline-flex items-center cursor-pointer gap-2">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          Theme</label>
        </div>
      </div>

      {/* Mobile Side Drawer Menu */}
      <div
        className={`
          md:hidden fixed top-0 left-0 h-full w-2/3 max-w-xs bg-blue-500 text-white px-4 py-4 space-y-4 z-50 
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <button onClick={() => setIsOpen(false)} className="text-white text-2xl absolute top-2 right-4">×</button>
        <Link to="/" onClick={() => setIsOpen(false)} className="block hover:bg-blue-700 rounded px-2 py-1">HOME</Link>
        <Link to="/Exchangerates" onClick={() => setIsOpen(false)} className="block hover:bg-blue-700 rounded px-2 py-1">EXCHANGE RATES(LIVE)</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:bg-blue-700 rounded px-2 py-1">ABOUT</Link>
        <Link to="/Errorpage" onClick={() => setIsOpen(false)} className="block hover:bg-blue-700 rounded px-2 py-1">ERROR PAGE</Link>
      </div>
    </nav>
  );
};

export default Navbar;
