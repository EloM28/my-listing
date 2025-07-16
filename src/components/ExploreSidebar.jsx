import React, { useState } from "react";

const categories = [
  {
    name: "Apartment",
    listings: 1,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01"/></svg>
    )
  },
  {
    name: "House",
    listings: 1,
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21V9h6v12"/></svg>
    )
  },
  {
    name: "Office",
    listings: 1,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h6v6H9z"/></svg>
    )
  },
  {
    name: "Studio",
    listings: 1,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01"/></svg>
    )
  },
  {
    name: "Villa",
    listings: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21V9h6v12"/></svg>
    )
  },
];

const ExploreSidebar = () => {
  const [tab, setTab] = useState("filters");
  return (
    <aside className="bg-white rounded-2xl shadow p-4 flex flex-col gap-4 min-h-[400px] h-full overflow-y-auto max-h-[calc(100vh-120px)]">
      <div className="flex gap-6 border-b pb-2 mb-4">
        <button onClick={() => setTab("filters")} className={`font-bold ${tab === "filters" ? "text-rose-500 border-b-2 border-rose-500 pb-1" : "text-gray-700"}`}>Filters</button>
        <button onClick={() => setTab("categories")} className={`font-bold ${tab === "categories" ? "text-rose-500 border-b-2 border-rose-500 pb-1" : "text-gray-700"}`}>Categories</button>
      </div>
      {tab === "filters" && (
        <>
          <label className="text-gray-700 text-sm">What are you looking for?</label>
          <input type="text" className="bg-gray-100 rounded px-3 py-2 mb-2 outline-none" placeholder="Search..." />
          <label className="text-gray-700 text-sm">Where to look?</label>
          <div className="flex items-center bg-gray-100 rounded px-3 py-2 mb-2 mt-1">
            <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414A6 6 0 1 0 12.414 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414z"/></svg>
            <input type="text" className="bg-transparent outline-none w-full" placeholder="City, address..." />
          </div>
          <label className="text-gray-700 text-sm">Category</label>
          <div className="relative bg-gray-100 rounded px-3 py-2 mb-2 mt-1">
            <select className="bg-transparent outline-none w-full">
              <option value="">All categories</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▼</span>
          </div>
          <label className="text-gray-700 text-sm">Number of rooms</label>
          <div className="relative bg-gray-100 rounded px-3 py-2 mb-2 mt-1">
            <select className="bg-transparent outline-none w-full">
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▼</span>
          </div>
          <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 mb-2 mt-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.15 10.15Z"/></svg>
            Search
          </button>
          <button className="w-full flex items-center justify-center gap-2 text-gray-500 text-sm mt-2" onClick={() => {}}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            Reset Filters
          </button>
        </>
      )}
      {tab === "categories" && (
        <div className="flex flex-col gap-4">
          {categories.map((cat, idx) => (
            <div key={cat.name + idx} className="relative rounded-2xl overflow-hidden shadow group cursor-pointer min-h-[110px]" style={{ minHeight: 110 }}>
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 group-hover:opacity-90 transition-transform duration-200" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
              <div className="relative flex flex-col justify-end h-full z-10 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white drop-shadow-lg">{cat.icon}</span>
                  <span className="text-white text-lg font-bold drop-shadow-lg">{cat.name}</span>
                </div>
                <span className="text-white text-sm drop-shadow-lg opacity-90">{cat.listings} listing{cat.listings > 1 ? 's' : ''}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default ExploreSidebar; 