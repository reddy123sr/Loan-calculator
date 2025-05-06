import React, { useEffect, useState } from 'react';

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark class on <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={toggleDarkMode}
        className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
          darkMode ? 'bg-gray-700' : 'bg-blue-500'
        }`}
      >{/* 🌗 Dark Mode Toggle Switch */}
      <div className="ml-4">
         <label className="relative inline-flex items-center cursor-pointer">
           <input
             type="checkbox"
             checked={darkMode}
             onChange={toggleDarkMode}
             className="sr-only peer"
           />
           <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
         </label>
       </div>
       <div className={`md:flex space-x-4 ${isOpen ? 'block mt-3' : 'hidden'} md:block`}>
          <a href="src\App.jsx" className="rounded-sm px-2 bg-blue-400 hover:bg-blue-800 text-white">HOME</a>
          <a href="#" className="px-2 rounded-sm hover:bg-blue-800 text-white">EXCHANGE RATES</a>
          <a href="#" className="px-2 rounded-sm hover:bg-blue-800 text-white">ABOUT</a>
          <a href="#" className="px-2 rounded-sm hover:bg-blue-800 text-white">ERROR PAGE</a>
        </div>
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
            darkMode ? 'translate-x-7' : ''
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
