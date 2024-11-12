// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-4 text-gray-200 bg-gray-900 h-full hover:bg-gray-800 transition-colors duration-200  z-20 flex relative"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <div
        className={`fixed inset-y-0 left-0 z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64 bg-gray-900 text-white shadow-lg lg:relative lg:inset-0 transition-transform duration-300 ease-in-out`}
      >
        <h2 className="p-6 font-bold text-xl text-gray-100 border-b border-gray-700">
          Dashboard
        </h2>
        <nav className="p-6">
          <ul>
            <li className="mb-4">
              <Link
                to="/"
                className="flex items-center gap-3 p-3 text-gray-200 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h7m-7 0H5m0 0l-2 2m16-2h3m0 8h-3m0 0l2 2m0 0l-7 7-7-7m7 7v-6H5"></path>
                </svg>
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/profile"
                className="flex items-center gap-3 p-3 text-gray-200 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19a9 9 0 1012.757 0M15 9h.01M9 9h.01M12 15v.01"></path>
                </svg>
                Profile
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/settings"
                className="flex items-center gap-3 p-3 text-gray-200 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm6.364-4.364l1.415-1.415a2 2 0 000-2.828l-2.828-2.828a2 2 0 00-2.828 0l-1.415 1.415"></path>
                </svg>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Dark overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
