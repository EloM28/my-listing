import React from "react";

const RentListLocation = () => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col">
    <div className="flex items-center gap-2 mb-2 font-bold text-lg">
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      Location
    </div>
    <div className="flex-1 flex flex-col gap-3">
      <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-118.278,33.924,12,0/600x300?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xvZ2Z2b2MwM2JwMnBvN2Z2b2N2b2N2In0.1234567890abcdef" alt="map" className="rounded-lg w-full h-64 object-cover mb-2" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <span className="text-gray-700">South Figueroa Street, Los Angeles, CA, United States</span>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg ml-auto">Get Directions</button>
      </div>
    </div>
  </div>
);

export default RentListLocation; 