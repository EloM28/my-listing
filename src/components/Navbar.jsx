import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Logo et recherche */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl text-rose-500">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#F43F5E" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.2 10.54 8.13 11.21a1 1 0 0 0 1.14 0C13.8 21.54 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.88C9.13 18.07 5 14.61 5 11a7 7 0 0 1 14 0c0 3.61-4.13 7.07-7 9.88ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
          </span>
          <span className="font-bold text-xl">MyListing</span>
        </div>
        {/* Barre de recherche */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 ml-4">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.15 10.15Z"/></svg>
          <input type="text" placeholder="Type your search..." className="bg-transparent outline-none w-48" />
        </div>
      </div>
      {/* Liens de navigation */}
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex items-center gap-4 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-rose-500">Home</a></li>
          <li><a href="#" className="hover:text-rose-500">Explore</a></li>
          <li><a href="#" className="hover:text-rose-500">Listings</a></li>
          <li><a href="#" className="hover:text-rose-500">More <span className="ml-1">▼</span></a></li>
        </ul>
        <button className="hidden md:block px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition">Sign in or Register</button>
        <button className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-semibold transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
          Add Listing
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 