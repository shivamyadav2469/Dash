// src/pages/Dashboard.jsx
import React, { useState } from 'react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cnrNumber, setCnrNumber] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCNRButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleInputChange = (e) => {
    setCnrNumber(e.target.value); 
  };

  const handleSubmit = () => {
    alert(`CNR Number Submitted: ${cnrNumber}`);
    setIsModalOpen(false); 
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center border border-gray-300 p-3 rounded-md">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-grow p-2 rounded-md focus:outline-none"
          placeholder="Search..."
        />
        <button className="ml-2 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md">
          Search
        </button>
      </div>

      <div>
        <button
          onClick={handleCNRButtonClick}
          className="text-white bg-green-500 hover:bg-green-600 p-3 rounded-md"
        >
          Add CNR Number
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Enter CNR Number</h2>
            <input
              type="text"
              value={cnrNumber}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter CNR Number"
            />
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleCloseModal}
                className="text-gray-700 hover:text-gray-900 p-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
