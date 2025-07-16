import React from "react";

const ExploreCard = ({ image, price, name, address, area, rooms, bathrooms, beds, featured }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col w-full">
    {/* Image + prix + nom/adresse */}
    <div className="relative h-48 w-full">
      <img src={image} alt={name} className="object-cover w-full h-full rounded-t-2xl" />
      {/* Prix en haut à gauche */}
      <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
        {featured && (
          <span className="bg-yellow-400/90 text-white rounded px-1.5 py-0.5 text-xs font-bold flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.38 8.38 0 01-7.5-4.5A8.38 8.38 0 0112 3.5a8.38 8.38 0 017.5 12.5A8.38 8.38 0 0112 20.5z" /></svg>
          </span>
        )}
        <span className="bg-white/80 text-gray-900 font-semibold rounded px-2 py-1 text-sm shadow">{price} <span className="text-xs font-normal">PER MONTH</span></span>
      </div>
      {/* Nom + adresse en bas à gauche */}
      <div className="absolute left-3 bottom-3 flex items-center gap-2 z-10 bg-rose-500 rounded-full px-4 py-2 shadow">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414A6 6 0 1 0 12.414 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414z" /></svg>
        <div>
          <div className="font-bold text-white text-base leading-tight truncate max-w-[120px]">{name}</div>
          <div className="text-xs text-white/90 truncate max-w-[120px]">{address}</div>
        </div>
      </div>
    </div>
    {/* Détails */}
    <div className="flex justify-between items-center px-6 py-3 border-t border-gray-200 text-gray-700 text-sm gap-2">
      <div className="flex flex-col items-center min-w-0">
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        <span className="truncate">{area} sq ft</span>
      </div>
      <div className="flex flex-col items-center min-w-0">
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01" /></svg>
        <span className="truncate">{rooms} rooms</span>
      </div>
      <div className="flex flex-col items-center min-w-0">
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v6a2 2 0 002 2h6a2 2 0 002-2v-6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3" /></svg>
        <span className="truncate">{bathrooms} bathrooms</span>
      </div>
      <div className="flex flex-col items-center min-w-0">
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h16a1 1 0 001-1V7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 21V10h14v11" /></svg>
        <span className="truncate">{beds} beds</span>
      </div>
    </div>
    {/* Actions */}
    <div className="flex justify-center gap-4 py-4 bg-white border-t border-gray-100">
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /></svg>
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.657l1.318-1.339a4.5 4.5 0 116.364 6.364L12 21.35l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /></svg>
      </button>
    </div>
  </div>
);

export default ExploreCard; 