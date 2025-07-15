import React, { useState } from "react";

const HeroSection = () => {
  const [price, setPrice] = useState([1600, 4500]);
  const [activeTab, setActiveTab] = useState("rent");

  return (
    <section
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center"
    >
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(/category-avatar.jpeg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
      <div className="relative z-10 flex flex-col items-center w-full px-2 sm:px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 sm:mb-8 text-center max-w-xs sm:max-w-xl md:max-w-3xl">
          Find your next<br />apartment or home
        </h1>
        <div className="flex gap-2 mb-4 sm:mb-6 flex-row items-center">
          <button
            className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2 rounded-tl-lg rounded-bl-lg border border-r-0 border-white text-base sm:text-lg font-semibold transition-colors duration-200 ${activeTab === "rent" ? "bg-white text-gray-900" : "bg-transparent text-white hover:bg-white/20"}`}
            onClick={() => setActiveTab("rent")}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
            For rent
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2 rounded-tr-lg rounded-br-lg border border-white text-base sm:text-lg font-semibold transition-colors duration-200 ${activeTab === "sale" ? "bg-white text-gray-900" : "bg-transparent text-white hover:bg-white/20"}`}
            onClick={() => setActiveTab("sale")}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21V9a3 3 0 013-3h0a3 3 0 013 3v12" /></svg>
            For sale
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-2xl flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
            <div className="flex-1 flex items-center border-b border-gray-300 pr-2">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
              <input
                type="text"
                placeholder="Where to look?"
                className="w-full py-2 outline-none text-gray-700 bg-transparent"
              />
            </div>
            <div className="flex-1 flex items-center border-b border-gray-300 mt-2 sm:mt-0">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7" /></svg>
              <select className="w-full py-2 outline-none text-gray-700 bg-transparent">
                <option>All categories</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Studio</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <label className="block text-gray-500 text-sm mb-1">Price per month</label>
              <div className="flex items-center gap-2 w-full">
                <span className="font-bold text-gray-800">${price[0]}</span>
                <input
                  type="range"
                  min="1600"
                  max="4500"
                  value={price[0]}
                  onChange={e => setPrice([Number(e.target.value), price[1]])}
                  className="w-full accent-red-500"
                />
                <span className="font-bold text-gray-800">${price[1]}</span>
                <input
                  type="range"
                  min="1600"
                  max="4500"
                  value={price[1]}
                  onChange={e => setPrice([price[0], Number(e.target.value)])}
                  className="w-full accent-red-500"
                />
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg px-6 py-3 rounded transition-colors duration-200 w-full sm:w-auto mt-4 sm:mt-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 