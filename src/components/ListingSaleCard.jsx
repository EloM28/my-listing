import React from "react";

const ListingSaleCard = ({
  image,
  price,
  name,
  address,
  area,
  rooms,
  bathrooms,
  beds,
  featured,
}) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col w-full max-w-sm">
    {/* Image + prix + nom/adresse */}
    <div className="relative h-56 w-full">
      <img src={image} alt={name} className="object-cover w-full h-full" />
      <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
        {featured && (
          <span className="bg-yellow-400/90 text-white rounded px-1.5 py-0.5 text-xs font-bold flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.38 8.38 0 01-7.5-4.5A8.38 8.38 0 0112 3.5a8.38 8.38 0 017.5 12.5A8.38 8.38 0 0112 20.5z" />
            </svg>
            Featured
          </span>
        )}
        <span className="bg-white/80 text-gray-900 font-semibold rounded px-2 py-1 text-sm shadow">
          {price}
        </span>
      </div>
      {/* Nom + adresse en bas à gauche */}
      <div className="absolute left-3 bottom-3 flex items-center gap-2 z-10">
        <span className="bg-red-500 p-2 rounded-full">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <circle cx="12" cy="11" r="3" />
          </svg>
        </span>
        <div>
          <div className="font-bold text-lg text-white drop-shadow-sm leading-tight">{name}</div>
          <div className="text-sm text-white/90 -mt-1">{address}</div>
        </div>
      </div>
    </div>
    {/* Détails */}
    <div className="flex justify-between items-center px-6 py-3 border-t text-gray-700 text-sm gap-2">
      <div className="flex flex-col items-center">
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        {area} sq ft
      </div>
      <div className="flex flex-col items-center">
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v7a2 2 0 002 2z" />
        </svg>
        {rooms} rooms
      </div>
      <div className="flex flex-col items-center">
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3" />
        </svg>
        {bathrooms} bathrooms
      </div>
      <div className="flex flex-col items-center">
        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h16a1 1 0 001-1V7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 21V10h14v11" />
        </svg>
        {beds} beds
      </div>
    </div>
    {/* Actions */}
    <div className="flex justify-center gap-4 py-4">
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
        </svg>
      </button>
      <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.657l1.318-1.339a4.5 4.5 0 116.364 6.364L12 21.35l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>
    </div>
  </div>
);

export default ListingSaleCard; 