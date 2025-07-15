import React from "react";

const amenities = [
  { label: "Accepts Credit Cards", icon: "M5 13l4 4L19 7" },
  { label: "Bike Parking", icon: "M5 13l4 4L19 7" },
  { label: "Coupons", icon: "M5 13l4 4L19 7" },
  { label: "Parking Street", icon: "M5 13l4 4L19 7" },
  { label: "Smoking Allowed", icon: "M5 13l4 4L19 7" },
  { label: "Wireless Internet", icon: "M5 13l4 4L19 7" },
];

const RentListAmenities = () => (
  <div className="bg-white rounded-xl shadow p-6">
    <div className="flex items-center gap-2 mb-2 font-bold text-lg">
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      Amenities
    </div>
    <div className="flex flex-wrap gap-4 mt-2">
      {amenities.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/></svg>
          <span className="truncate max-w-[120px]">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default RentListAmenities; 