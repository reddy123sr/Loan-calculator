import React from 'react'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-100 text-black'} min-h-screen`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet/>
    </div>
  );
};



export default Layout;