import React, { useState, useRef, useEffect } from "react";

const products = [
  {
    name: "Advanced",
    price: "230.000BIF",
    image: null,
  },
  {
    name: "Basic",
    price: "100.000BIF",
    image: null,
  },
  {
    name: "Premium",
    price: "180.000BIF",
    image: null,
  },
];

const sortOptions = [
  "Default sorting",
  "Sort by popularity",
  "Sort by average rating",
  "Sort by latest",
  "Sort by price: low to high",
  "Sort by price: high to low",
];

const ShopProducts = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const sortRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-row items-center justify-between gap-2 mb-6">
        <div className="text-gray-700 text-sm whitespace-nowrap">Showing all 3 results</div>
        <div className="relative w-40" ref={sortRef}>
          <button
            className="flex items-center justify-between w-40 px-2 py-1 border-b border-gray-200 font-normal text-gray-900 bg-white focus:outline-none text-sm"
            onClick={() => setSortOpen((o) => !o)}
          >
            {selectedSort}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {sortOpen && (
            <div className="absolute right-0 mt-2 w-40 left-0 bg-white rounded shadow-lg border border-gray-100 z-30 animate-fade-in">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  className={`w-full text-left px-3 py-2 text-gray-900 hover:bg-gray-50 font-normal text-sm ${selectedSort === option ? 'bg-gray-100' : ''}`}
                  onClick={() => { setSelectedSort(option); setSortOpen(false); }}
                >
                  {option} {selectedSort === option && <span className="float-right">✔</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((prod) => (
          <div key={prod.name} className="bg-white rounded-lg shadow flex flex-col items-center p-6">
            <div className="w-full aspect-square bg-red-400 flex items-center justify-center rounded mb-4">
              {/* Icône maison+localisation blanche */}
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 64 64"><circle cx="32" cy="24" r="10" strokeWidth="4" /><path d="M32 34v14" strokeWidth="4" /><path d="M22 48h20" strokeWidth="4" /><path d="M32 34l-8 8h16l-8-8z" strokeWidth="4" /><path d="M32 14v-4" strokeWidth="4" /><path d="M32 58c14-10 20-18 20-28A20 20 0 0 0 12 30c0 10 6 18 20 28z" strokeWidth="4" /></svg>
            </div>
            <div className="w-full flex flex-col items-start">
              <div className="font-bold text-lg mb-1">{prod.name}</div>
              <div className="text-gray-500 mb-2">{prod.price}</div>
              <button className="flex items-center gap-2 text-sm font-bold text-gray-800 mt-2 hover:underline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;
