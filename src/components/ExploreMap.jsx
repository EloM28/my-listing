import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'; // ✅ Import du CSS

mapboxgl.accessToken = 'pk.eyJ1IjoiZHVraXp3ZSIsImEiOiJjbGg3bm5oNzYwMGVvM2dxbTRiZjZmeW12In0.TJradzMRAhzFkxkMNoY35A';

const ExploreMap = ({ onClose }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [29.365, -3.37972], // Centré sur Bujumbura Mairie
      zoom: 7,
    });
  
    // Liste des provinces avec coordonnées
    const provinces = [
      { id: 3, name: 'Bujumbura Mairie', lat: -3.37972, lng: 29.365 },
      { id: 1, name: 'Bubanza', lat: -3.08535, lng: 29.3573 },
      { id: 6, name: 'Cibitoke', lat: -2.88775, lng: 29.1244 },
      { id: 9, name: 'Kayanza', lat: -2.91792, lng: 29.622 },
      { id: 15, name: 'Ngozi', lat: -2.91054, lng: 29.8263 },
      { id: 10, name: 'Kirundo', lat: -2.58742, lng: 30.0944 },
      { id: 13, name: 'Muyinga', lat: -2.84414, lng: 30.3418 },
      { id: 8, name: 'Karusi', lat: -3.10365, lng: 30.1558 },
      { id: 12, name: 'Muramvya', lat: -3.26922, lng: 29.6156 },
      { id: 7, name: 'Gitega', lat: -3.4262, lng: 29.933 },
      { id: 14, name: 'Mwaro', lat: -3.51027, lng: 29.7041 },
      { id: 18, name: 'Ruyigi', lat: -3.47102, lng: 30.2463 },
      { id: 5, name: 'Cankuzo', lat: -3.2171, lng: 30.551 },
      { id: 16, name: 'Rumonge', lat: -3.97607, lng: 29.4363 },
      { id: 4, name: 'Bururi', lat: -3.94454, lng: 29.6186 },
      { id: 11, name: 'Makamba', lat: -4.13431, lng: 29.803 },
      { id: 17, name: 'Rutana', lat: -3.92786, lng: 29.9891 },
      { id: 2, name: 'Bujumbura Rural', lat: -3.49889, lng: 29.3968 },
    ];
  
    // Ajouter un marqueur pour chaque province
    provinces.forEach((province) => {
      new mapboxgl.Marker()
        .setLngLat([province.lng, province.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(province.name)) // optionnel: nom en popup
        .addTo(map);
    });
  
    // Contrôles de navigation
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  
    return () => map.remove();
  }, []);
  

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-auto z-10 flex items-center bg-white rounded-lg shadow px-2 py-2 sm:px-4 sm:py-2 w-full sm:w-80 max-w-full">
        <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/>
        </svg>
        <input
          type="text"
          placeholder="Search as I move the map"
          className="flex-1 bg-transparent outline-none text-gray-700 text-sm min-w-0"
        />
      </div>

      <button onClick={onClose} className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100">
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      {/* Conteneur de la carte */}
      <div ref={mapContainerRef} className="flex-1 relative z-0" />

      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white bg-opacity-80 rounded px-2 py-1 shadow">
        © Mapbox © OpenStreetMap Improve this map
      </div>
    </div>
  );
};

export default ExploreMap;
