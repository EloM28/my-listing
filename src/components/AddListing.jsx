import React from "react";
import { useNavigate } from "react-router-dom";

const AddListing = () => {
  const navigate = useNavigate();

  const handleChoose = (type) => {
    navigate(`/choose-package?type=${type}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-2 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Choose listing type</h1>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-md md:max-w-4xl justify-center items-center">
        <button
          className="w-full md:w-1/2 h-40 md:h-48 bg-white hover:bg-red-50 transition-colors duration-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-red-500 text-xl md:text-2xl font-semibold border border-red-200 focus:outline-none transform hover:scale-105 cursor-pointer mb-4 md:mb-0"
          onClick={() => handleChoose('for-sale')}
        >
          <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
          </svg>
          For sale
        </button>
        <button
          className="w-full md:w-1/2 h-40 md:h-48 bg-white hover:bg-red-50 transition-colors duration-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-red-500 text-xl md:text-2xl font-semibold border border-red-200 focus:outline-none transform hover:scale-105 cursor-pointer"
          onClick={() => handleChoose('for-rent')}
        >
          <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path d="M12 16v-4M12 8h.01" strokeWidth="2" />
          </svg>
          For rent
        </button>
      </div>
    </div>
  );
};

export default AddListing; 