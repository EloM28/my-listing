import React from "react";

const ExploreNavbar = () => (
  <nav className="w-full bg-white flex items-center justify-between px-4 md:px-10 py-3 shadow-sm sticky top-0 z-30">
    {/* Logo + search */}
    <div className="flex items-center gap-4 min-w-0">
      <span className="text-3xl text-rose-500 font-bold flex items-center">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#fff"/><path d="M18 6C12.477 6 8 10.477 8 16c0 5.523 10 14 10 14s10-8.477 10-14c0-5.523-4.477-10-10-10zm0 13a3 3 0 110-6 3 3 0 010 6z" fill="#FF3B3F"/></svg>
      </span>
      <div className="relative flex items-center w-48 md:w-72">
        <svg className="absolute left-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"/></svg>
        <input type="text" className="bg-transparent border-0 border-b border-gray-200 pl-10 pr-2 py-2 outline-none w-full text-gray-700 placeholder-gray-400" placeholder="Type your search..." />
      </div>
    </div>
    {/* Links + actions */}
    <div className="hidden md:flex items-center gap-6">
      <a href="#" className="font-medium text-gray-700">Home</a>
      <div className="relative group">
        <button className="font-medium text-gray-700 flex items-center gap-1">Explore <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg></button>
      </div>
      <div className="relative group">
        <button className="font-medium text-gray-700 flex items-center gap-1">Listings <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg></button>
      </div>
      <div className="relative group">
        <button className="font-medium text-gray-700 flex items-center gap-1">More <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg></button>
      </div>
      <a href="#" className="flex items-center gap-1 text-gray-700 font-medium"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.847.657 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Sign in or Register</a>
      <a href="#" className="flex items-center gap-1 text-gray-700 font-medium"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/></svg></a>
      <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-2 rounded-lg ml-2 flex items-center gap-2 text-base"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg> Add Listing</button>
    </div>
    {/* Burger menu mobile */}
    <div className="md:hidden">
      <button className="bg-rose-500 text-white px-3 py-2 rounded-lg font-semibold">☰</button>
    </div>
  </nav>
);

export default ExploreNavbar; 