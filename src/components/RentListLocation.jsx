import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHVraXp3ZSIsImEiOiJjbGg3bm5oNzYwMGVvM2dxbTRiZjZmeW12In0.TJradzMRAhzFkxkMNoY35A';

const RentListLocation = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [29.365, -3.37972], // Bujumbura Mairie
      zoom: 7,
    });

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

    provinces.forEach((province) => {
      new mapboxgl.Marker()
        .setLngLat([province.lng, province.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(province.name))
        .addTo(map);
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.remove();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-2 font-bold text-lg">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Location
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div ref={mapContainerRef} className="rounded-lg w-full h-64 mb-2" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span className="text-gray-700">Carte des provinces du Burundi</span>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg ml-auto">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentListLocation;
