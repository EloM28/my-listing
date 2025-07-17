import React from "react";

const ExploreMap = ({ onClose }) => {
  return (
    <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Barre de recherche */}
      <div className="absolute top-4 left-4 z-10 flex items-center bg-white rounded-lg shadow px-4 py-2 w-80">
        <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/></svg>
        <input
          type="text"
          placeholder="Search as I move the map"
          className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
        />
      </div>
      {/* Bouton fermer */}
      <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100">
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      {/* Carte (maquette) */}
      <div className="flex-1 relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Map_of_Los_Angeles_County%2C_California%2C_USA_with_Labels.svg/1200px-Map_of_Los_Angeles_County%2C_California%2C_USA_with_Labels.svg.png"
          alt="Los Angeles Map"
          className="w-full h-full object-cover"
        />
        {/* Marqueurs fictifs */}
        <div className="absolute left-[40%] top-[45%]">
          <span className="flex items-center justify-center w-12 h-12 bg-rose-500 text-white rounded-full shadow-lg text-xl font-bold">3</span>
        </div>
        <div className="absolute left-[55%] top-[35%]">
          <span className="flex items-center justify-center w-12 h-12 bg-rose-500 text-white rounded-full shadow-lg text-xl font-bold">2</span>
        </div>
        <div className="absolute left-[60%] top-[55%]">
          <span className="flex items-center justify-center w-12 h-12 bg-rose-500 text-white rounded-full shadow-lg text-xl font-bold">1</span>
        </div>
      </div>
      {/* Footer Mapbox/OpenStreetMap (maquette) */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white bg-opacity-80 rounded px-2 py-1 shadow">
        © Mapbox © OpenStreetMap Improve this map
      </div>
    </div>
  );
};

export default ExploreMap; 