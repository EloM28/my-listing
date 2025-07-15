import React from "react";

const listings = [
  {
    title: "Union square",
    address: "South Figueroa Street",
    price: "$4,500",
    image: "/uploads/sites/7/2019/11/n2-2-768x524.jpg",
    area: "1250 sq ft",
    rooms: 4,
    bathrooms: 3,
    beds: 3,
    featured: true,
  },
  {
    title: "Glass Walls",
    address: "1431 W 24th St",
    price: "$1,600",
    image: "/uploads/sites/7/2019/11/r2-2-768x512.jpg",
    area: "365 sq ft",
    rooms: 1,
    bathrooms: 1,
    beds: 1,
    featured: false,
  },
  {
    title: "Elegant Apartment",
    address: "South Olive Street",
    price: "$1,900",
    image: "/uploads/sites/7/2019/11/n1-1-768x575.jpg",
    area: "1170 sq ft",
    rooms: 3,
    bathrooms: 2,
    beds: 2,
    featured: false,
  },
];

const RecentListings = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Recent listings for rent</h2>
      <div className="flex flex-wrap gap-y-8 gap-x-6 justify-center px-2 sm:px-4">
        {listings.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col w-full max-w-sm mx-auto my-4">
            {/* Image + badge prix */}
            <div className="relative h-48 sm:h-56 w-full">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                {item.featured && (
                  <span className="bg-yellow-100 text-yellow-600 rounded-full p-1 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </span>
                )}
                <span className="bg-white/80 text-gray-900 font-semibold rounded px-3 py-1 text-sm shadow">{item.price} <span className="text-xs font-normal">PER MONTH</span></span>
              </div>
              {/* Badge localisation */}
              <div className="absolute left-3 bottom-3 flex items-center gap-2">
                <span className="bg-red-500 rounded-full p-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" /></svg>
                </span>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">{item.title}</div>
                  <div className="text-white text-sm opacity-80 -mt-1">{item.address}</div>
                </div>
              </div>
            </div>
            {/* Infos */}
            <div className="flex justify-between items-center px-4 sm:px-6 py-3 border-b border-gray-100 text-gray-700 text-sm gap-2">
              <div className="flex flex-col items-center"><svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 21V7a2 2 0 012-2h12a2 2 0 012 2v14" /></svg>{item.area}</div>
              <div className="flex flex-col items-center"><svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21V13h8v8" /></svg>{item.rooms} rooms</div>
              <div className="flex flex-col items-center"><svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21V10a5 5 0 0110 0v11" /></svg>{item.bathrooms} bathrooms</div>
              <div className="flex flex-col items-center"><svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21V7a2 2 0 00-2-2H6a2 2 0 00-2 2v14" /></svg>{item.beds} beds</div>
            </div>
            {/* Footer boutons */}
            <div className="flex justify-center gap-4 py-4">
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"><svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10m6 0h6" /></svg></button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"><svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.293l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg></button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center max-w-7xl mx-auto mt-8 px-4">
        <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-100 text-gray-400 font-semibold" disabled>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Previous
        </button>
        <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">
          Next
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default RecentListings; 