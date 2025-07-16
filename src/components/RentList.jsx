import React from "react";
import RentListHeader from "./RentListHeader";
import RentListTabs from "./RentListTabs";
import RentListActions from "./RentListActions";
import ListingSaleCard from "./ListingSaleCard";
import RentListAmenities from "./RentListAmenities";
import RentListCategories from "./RentListCategories";
import RentListLocation from "./RentListLocation";
import RentListAuthor from "./RentListAuthor";
import RentListGallery from "./RentListGallery";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: "$4,500",
    name: "Union square",
    address: "South Figueroa Street",
    area: 1250,
    rooms: 4,
    bathrooms: 3,
    beds: 3,
    featured: true,
  },
  {
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
    price: "$2,800",
    name: "Zaetta Studio",
    address: "Columbia Ave",
    area: 4500,
    rooms: 7,
    bathrooms: 3,
    beds: 12,
    featured: false,
  },
  {
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    price: "$1,900",
    name: "Elegant Apartment",
    address: "South Olive Street",
    area: 1170,
    rooms: 3,
    bathrooms: 2,
    beds: 2,
    featured: false,
  },
];

const RentList = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <RentListHeader />
      <RentListTabs />
      <RentListActions />

      {/* Section info cards responsive, 2 colonnes */}
      <div className="max-w-7xl mx-auto mt-8 px-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Colonne gauche */}
        <div className="flex flex-col gap-6">
          {/* Description */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-2 font-bold text-lg">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              Description
            </div>
            <p className="text-gray-700 text-base">
              Whether you're looking for a coworking membership, a 2-15 person private office, a large collaborative team space for your sales team or a 50-person satellite office, we can accommodate a workplace experience that inspires and is in your budget. Fully scalable and interconnecting office spaces are paired with TechSpace’s premier technology platform, private data networking, burstable bandwidth and enterprise-class Wi-Fi. TechSpace helps you manage the day-to-day details so you can better manage your business.
            </p>
          </div>
          {/* Details */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-2 font-bold text-lg">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              Details
            </div>
            <div className="divide-y divide-gray-200">
              <div className="flex justify-between py-2"><span>Area</span><span>1250 m2</span></div>
              <div className="flex justify-between py-2"><span>Rooms</span><span>4</span></div>
              <div className="flex justify-between py-2"><span>Bathrooms</span><span>3</span></div>
              <div className="flex justify-between py-2"><span>Beds</span><span>3</span></div>
            </div>
          </div>
          {/* Categories */}
          <RentListCategories />
        </div>
        {/* Colonne droite */}
        <div className="flex flex-col gap-6">
          {/* Gallery */}
          <RentListGallery />
          {/* Amenities */}
          <RentListAmenities />
          {/* Location */}
          <RentListLocation />
          {/* Author */}
          <RentListAuthor />
        </div>
      </div>
      {/* Section des cards en bas */}
      <div className="max-w-7xl mx-auto mt-10 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Similar Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((item, idx) => (
            <ListingSaleCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentList; 