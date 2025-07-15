import React, { useState } from "react";
import Navbar from "./Navbar";
import ListingSaleCard from "./ListingSaleCard"

const listings = [
  {
    image: "/uploads/sites/7/2019/11/r2-2-768x512.jpg",
    price: "$3,200,000",
    name: "Era square",
    address: "South Figueroa Street",
    area: 1250,
    rooms: 4,
    bathrooms: 3,
    beds: 3,
    featured: true,
  },
  {
    image: "/uploads/sites/7/2019/11/n1-1-768x575.jpg",
    price: "$4,500,000",
    name: "Berlin Complex",
    address: "South Olive Street",
    area: 1170,
    rooms: 3,
    bathrooms: 2,
    beds: 2,
    featured: false,
  },
  {
    image: "/uploads/sites/7/2019/11/n2-2-768x524.jpg",
    price: "$1,800,000",
    name: "Chelsea point",
    address: "Columbia Ave",
    area: 4500,
    rooms: 7,
    bathrooms: 3,
    beds: 12,
    featured: false,
  },
];

const ListingPage = () => {
  const [activeTab, setActiveTab] = useState("rent");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(1600);
  const [category, setCategory] = useState("");
  const [rooms, setRooms] = useState("");
  const [acceptsCredit, setAcceptsCredit] = useState(false);

  return (
    <>
    <div className="bg-gray-50 min-h-screen pb-8">
    {/* <div className="bg-gray-50 min-h-screen pb-8"> */}
      {/* Barre de filtres */}
      <div className="bg-white border-t py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
            
            {/* Titre principal */}
            <h2 className="font-bold text-lg md:text-xl whitespace-nowrap mr-6">
            What are you looking for?
            </h2>

            {/* Onglets Rent / Sale */}
            <div className="flex items-center gap-6">
            {/* For Rent */}
            <button
                onClick={() => setActiveTab("rent")}
                className={`relative flex items-center gap-2 font-semibold transition-colors pb-1 ${
                activeTab === "rent"
                    ? "text-rose-500"
                    : "text-gray-600 hover:text-gray-800"
                }`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12"/>
                </svg>
                For rent
                {activeTab === "rent" && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-rose-500 rounded-full"></span>
                )}
            </button>

            {/* For Sale */}
            <button
                onClick={() => setActiveTab("sale")}
                className={`relative flex items-center gap-2 font-semibold transition-colors pb-1 ${
                activeTab === "sale"
                    ? "text-rose-500"
                    : "text-gray-600 hover:text-gray-800"
                }`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12"/>
                </svg>
                For sale
                {activeTab === "sale" && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-rose-500 rounded-full"></span>
                )}
            </button>
            </div>
        </div>
      </div>


      {/* Barre de recherche */}
      {/* <div className="max-w-5xl mx-auto mt-8 px-4"> */}
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <div className="flex items-center bg-white rounded-xl shadow px-4 py-3 gap-4">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.15 10.15Z"/></svg>
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-gray-700 text-base"
            placeholder="What are you looking for?"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            className="flex items-center gap-2 text-rose-500 font-semibold px-4 py-2 rounded-lg hover:bg-rose-50 transition"
            onClick={() => setDrawerOpen(true)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            Filters
          </button>
        </div>
        <div className="text-center text-gray-700 mt-6 mb-2 font-medium">
          Showing <span className="font-bold">{listings.length}</span> results
        </div>
      </div>
      {/* Grille de résultats */}
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {listings.map((item, idx) => (
          <ListingSaleCard key={idx} {...item} />
        ))}
      </div>
      {/* Drawer de filtres */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 flex">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
            {/* Drawer */}
            <div className="relative w-full max-w-xs bg-white h-full shadow-xl z-50 p-6 flex flex-col">
            <div className="flex gap-6 border-b pb-2 mb-4">
                <button className="font-bold text-rose-500 border-b-2 border-rose-500 pb-1">Filters</button>
                <button className="font-bold text-gray-700 pb-1">Categories</button>
            </div>
            <label className="text-gray-700 text-sm mt-2">What are you looking for?</label>
            <input 
                type="text" 
                className="bg-gray-100 rounded px-3 py-2 mb-4 mt-1 outline-none" 
                placeholder="Search..." 
            />
            <label className="text-gray-700 text-sm">Where to look?</label>
            <div className="flex items-center bg-gray-100 rounded px-3 py-2 mb-4 mt-1">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414A6 6 0 1 0 12.414 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414z"/>
                </svg>
                <input 
                type="text" 
                className="bg-transparent outline-none w-full" 
                placeholder="City, address..." 
                />
            </div>
            <label className="text-gray-700 text-sm">Category</label>
            <div className="relative bg-gray-100 rounded px-3 py-2 mb-4 mt-1">
                <select 
                className="bg-transparent outline-none w-full" 
                value={category} 
                onChange={e => setCategory(e.target.value)}
                >
                <option value="">All categories</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="studio">Studio</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▼</span>
            </div>
            <label className="text-gray-700 text-sm">Number of rooms</label>
            <div className="relative bg-gray-100 rounded px-3 py-2 mb-4 mt-1">
                <select 
                className="bg-transparent outline-none w-full" 
                value={rooms} 
                onChange={e => setRooms(e.target.value)}
                >
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▼</span>
            </div>
            <label className="text-gray-700 text-sm">Price per month</label>
            <div className="flex flex-col mb-4 mt-1">
                <span className="font-semibold mb-1">${price} — $4500</span>
                <input
                type="range"
                min="1600"
                max="4500"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="w-full accent-rose-500"
                />
            </div>
            <label className="text-gray-700 text-sm flex items-center gap-2 mb-4">
                <input 
                type="checkbox" 
                checked={acceptsCredit} 
                onChange={e => setAcceptsCredit(e.target.checked)} 
                className="accent-rose-500" 
                />
                Accepts Credit Cards
            </label>
            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.15 10.15Z"/>
                </svg>
                Search
            </button>
            <button className="w-full flex items-center justify-center gap-2 text-gray-500 text-sm mt-2" onClick={() => {
                setCategory(""); 
                setRooms(""); 
                setPrice(1600); 
                setAcceptsCredit(false);
            }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                Reset Filters
            </button>
            </div>
        </div>
        )}
    </div>
    </>
  );
};

export default ListingPage; 