import React, { useState } from "react";
import Navbar from "./Navbar";

const listings = [
  {
    id: 1,
    title: "Union square",
    address: "South Figueroa Street",
    price: 4500,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    area: 1250,
    rooms: 4,
    baths: 3,
    beds: 3,
    featured: true,
  },
  {
    id: 2,
    title: "Zaetta Studio",
    address: "Columbia Ave",
    price: 2800,
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
    area: 4500,
    rooms: 7,
    baths: 3,
    beds: 12,
    featured: false,
  },
  {
    id: 3,
    title: "Elegant Apartment",
    address: "South Olive Street",
    price: 1900,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    area: 1170,
    rooms: 3,
    baths: 2,
    beds: 2,
    featured: false,
  },
  {
    id: 4,
    title: "Elegant Apartment",
    address: "South Olive Street",
    price: 1900,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    area: 1170,
    rooms: 3,
    baths: 2,
    beds: 2,
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
    <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
    </div>
    <div className="bg-gray-50 min-h-screen pb-8 pt-16">
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
        {listings.map(listing => (
          <div
            key={listing.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg"
          >
            {/* Image & badges */}
            <div className="relative">
              <img
                src={listing.img}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />

              {/* Price */}
              <div className="absolute top-3 left-3 bg-white/90 text-gray-900 px-3 py-1 rounded font-semibold text-sm border border-white shadow">
                ${listing.price.toLocaleString()} PER MONTH
              </div>

              {/* Featured badge */}
              {listing.featured && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              )}

              {/* Location */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-full shadow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414A6 6 0 1 0 12.414 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414z" />
                </svg>
                <div>
                  <div className="font-bold text-sm leading-tight">{listing.title}</div>
                  <div className="text-xs opacity-80">{listing.address}</div>
                </div>
              </div>
            </div>

            {/* Description with icons */}
            <div className="flex justify-around text-center text-sm text-gray-700 px-6 py-4">
              <div className="flex flex-col items-center">
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16M4 10h16M10 3h4" />
                </svg>
                {listing.area} sq ft
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 17v-6a4 4 0 1 1 8 0v6" />
                </svg>
                {listing.rooms} rooms
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 10V6a5 5 0 0 1 10 0v4" />
                </svg>
                {listing.baths} bathrooms
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
                {listing.beds} beds
              </div>
            </div>

            {/* Red separator */}
            <div className="w-full border-t border-[#ddd]" />

            {/* Action buttons */}
            <div className="flex justify-center gap-4 py-4 bg-white">
              <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 0 1-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
                </svg>
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
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