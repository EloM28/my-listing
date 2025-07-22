import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHVraXp3ZSIsImEiOiJjbGg3bm5oNzYwMGVvM2dxbTRiZjZmeW12In0.TJradzMRAhzFkxkMNoY35A';

const defaultCenter = { lat: -3.49889, lng: 29.3968  }; // Bujumbura par défaut

const LocationPicker = ({ value = {}, onChange, onRemove }) => {
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);
  const mapRef = useRef(null);
  const { address = '', lat = defaultCenter.lat, lng = defaultCenter.lng } = value;

  useEffect(() => {
    if (mapRef.current) return; // Ne crée la carte qu'une seule fois
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 12,
    });
    mapRef.current = map;

    markerRef.current = new mapboxgl.Marker({ draggable: true })
      .setLngLat([lng, lat])
      .addTo(map);

    markerRef.current.on('dragend', () => {
      const { lat, lng } = markerRef.current.getLngLat();
      fetchAddress(lat, lng);
    });

    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      markerRef.current.setLngLat([lng, lat]);
      fetchAddress(lat, lng);
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Si lat/lng changent via props, déplacer le marker
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLngLat([lng, lat]);
    }
  }, [lat, lng]);

  // Fonction pour faire le reverse geocoding
  const fetchAddress = async (lat, lng) => {
    try {
      const resp = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`);
      const data = await resp.json();
      const place = data.features && data.features[0] ? data.features[0].place_name : '';
      onChange && onChange({ address: place, lat, lng });
    } catch (e) {
      onChange && onChange({ address: '', lat, lng });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 mt-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-gray-700">Location</span>
        <button type="button" onClick={onRemove} className="bg-gray-100 hover:bg-red-200 text-gray-500 rounded-full p-2 ml-2" title="Remove location">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <input
        className="block w-full border border-gray-200 rounded px-3 py-2 mb-2 text-base"
        type="text"
        placeholder='e.g. "Bujumbura"'
        value={address}
        onChange={e => onChange && onChange({ ...value, address: e.target.value })}
      />
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 text-sm"><svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>Lock Pin Location</span>
        <button type="button" className="text-xs text-blue-600 hover:underline">Enter coordinates manually</button>
      </div>
      <div ref={mapContainerRef} className="rounded-lg w-full h-64 mb-2" />
    </div>
  );
};

export default LocationPicker; 