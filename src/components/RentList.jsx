import React, { useState } from "react";
import ListingSaleCard from "./ListingSaleCard";
import RentListAmenities from "./RentListAmenities";
import RentListCategories from "./RentListCategories";
import RentListLocation from "./RentListLocation";
import RentListAuthor from "./RentListAuthor";
import RentListGallery from "./RentListGallery";
import ReviewsTab from "./ReviewsTab";
import ContactTab from "./ContactTab";

const images = [
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
];

const actions = [
  { label: "Get directions", icon: "M17.657 16.657L13.414 12.414A6 6 0 1 0 12.414 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414z" },
  { label: "Call now", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 0 1-6 0v-1m6 0H9" },
  { label: "Direct message", icon: "M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.15 10.15Z" },
  { label: "Send an email", icon: "M16 12H8m8 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-8 0V8a4 4 0 1 1 8 0v4" },
  { label: "Leave a review", icon: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" },
  { label: "Bookmark", icon: "M5 5v14l7-7 7 7V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" },
  { label: "Share", icon: "M4 12v1a9 9 0 0 0 18 0v-1" },
  { label: "Report", icon: "M18.364 5.636l-1.414 1.414A9 9 0 1 0 5.636 18.364l1.414-1.414" },
];

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

function RentListProfileTab({actions}) {
  return (
<>
    <div className="w-full bg-gray-50 flex flex-wrap justify-center gap-2 md:gap-4 py-6 px-2 md:px-8">
    {actions.map((action, idx) => (
      <button key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 font-medium text-sm shadow-sm">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={action.icon} />
        </svg>
        {action.label}
      </button>
    ))}
  </div>
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
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
          
          {/* Categories */}
          <RentListAmenities />
          <RentListCategories />
       
        </div>
        {/* Colonne droite */}
        <div className="flex flex-col gap-6">
          <RentListGallery />
          <RentListLocation />
          <RentListAuthor />
        </div>
      </div>
    </div>
    <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            You May Also Be Interested In
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((item, idx) => (
              <ListingSaleCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const RentList = () => {

  const [activeTab, setActiveTab] = useState("profile");
  let TabContent;
  if (activeTab === "profile") TabContent = <RentListProfileTab actions={actions} />;
  else if (activeTab === "reviews") TabContent = <ReviewsTab actions={actions} />;
  else TabContent = <ContactTab actions={actions} />;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative w-full h-[350px] md:h-[420px] flex flex-col">
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {images.map((img, idx) => (
            <div key={idx} className="flex-1 h-[120px] md:h-auto">
              <img src={img} alt="office" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60 z-10" />
        {/* Topbar (supprimée pour clarté) */}
        <div className="relative z-20 flex justify-between items-center px-4 pt-4"></div>
        {/* Infos principales (inchangées) */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-end h-full px-4 pb-6 pt-12 md:pt-0">
          <div className="flex flex-col gap-2 md:gap-4 max-w-xs md:max-w-md">
            <div className="flex items-center gap-2">
              <span className="bg-rose-500 text-white rounded-full p-3 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414A6 6 0 1 0 12.414 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414z" /></svg>
              </span>
              <span className="text-white text-2xl md:text-3xl font-bold">Era square</span>
            </div>
            <span className="text-white text-base md:text-lg font-medium">Vibrant, three stories worth of office space in the heart of LA</span>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="bg-white/80 text-gray-900 font-semibold rounded px-4 py-2 text-lg shadow">Price<br /><span className="text-2xl font-bold">$3,200,000</span></span>
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 text-lg shadow mt-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 0 1-6 0v-1m6 0H9" /></svg>
              Call now
            </button>
          </div>
        </div>
      </div>
      {/* Tabs en haut, comme sur RentSale */}
      <div className="w-full bg-white flex justify-center items-center gap-8 md:gap-16 text-lg font-semibold mt-0">
        <button
          type="button"
          className={`py-4 px-2 ${activeTab === "profile" ? "border-b-2 border-rose-500 text-gray-900" : "text-gray-900"}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          type="button"
          className={`py-4 px-2 relative ${activeTab === "reviews" ? "border-b-2 border-rose-500 text-gray-900" : "text-gray-900"}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded-full">0</span>
        </button>
        <button
          type="button"
          className={`py-4 px-2 ${activeTab === "contact" ? "border-b-2 border-rose-500 text-gray-900" : "text-gray-900"}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>
      {/* Tab content dynamique */}
      <div className="w-full bg-white">
        {TabContent}
      </div>
      {/* Section des cards en bas */}
      
    </div>
  );
};

export default RentList; 