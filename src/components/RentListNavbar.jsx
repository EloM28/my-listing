import React from "react";

const RentListNavbar = () => (
  <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-3">
    <div className="flex items-center gap-2">
      <span className="text-2xl text-rose-500">🏠</span>
      <input
        type="text"
        className="bg-gray-100 rounded px-3 py-2 outline-none"
        placeholder="Type your search..."
      />
    </div>
    <div className="flex items-center gap-6">
      <a href="#" className="font-semibold text-gray-700">Home</a>
      <a href="#" className="font-semibold text-gray-700">Explore</a>
      <a href="#" className="font-semibold text-gray-700">Listings</a>
      <a href="#" className="font-semibold text-gray-700">More</a>
      <a href="#" className="font-semibold text-gray-700">Sign in or Register</a>
      <button className="bg-rose-500 text-white px-4 py-2 rounded-lg font-semibold ml-2">+ Add Listing</button>
    </div>
  </nav>
);

export default RentListNavbar; 