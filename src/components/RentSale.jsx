import React, { useState } from "react";
import ProfileTab from "./ProfileTab";
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

const RentSale = () => {
  const [activeTab, setActiveTab] = useState("profile");
  let TabContent;
  if (activeTab === "profile") TabContent = <ProfileTab actions={actions} />;
  else if (activeTab === "reviews") TabContent = <ReviewsTab actions={actions} />;
  else TabContent = <ContactTab actions={actions} />;

  return (
    <div className="w-full bg-gray-50">
      {/* Bandeau principal images + overlay + contenu */}
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
      {/* Tabs */}
      <div className="w-full bg-white flex justify-center items-center gap-8 md:gap-16 text-lg font-semibold mt-0">
        <button
          className={`py-4 px-2 ${activeTab === "profile" ? "border-b-2 border-rose-500 text-gray-900" : "text-gray-900"}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`py-4 px-2 relative ${activeTab === "reviews" ? "border-b-2 border-rose-500 text-gray-900" : "text-gray-900"}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded-full">0</span>
        </button>
        <button
          className={`py-4 px-2 ${activeTab === "contact" ? "border-b-2 border-rose-500 text-gray-900" : "text-gray-900"}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>
      {/* Tab content dynamique (composant indépendant) */}
      <div className="w-full bg-white">
        {TabContent}
      </div>
    </div>
  );
};

export default RentSale; 