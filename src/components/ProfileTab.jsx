import React from "react";
import RentListGallery from "./RentListGallery";

const ProfileTab = ({ actions }) => (
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
    {/* Grille parallèle description/details + galerie avec même fond */}
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
        </div>
        {/* Colonne droite */}
        <div className="flex flex-col gap-6">
          <RentListGallery />
        </div>
      </div>
    </div>
    <div className="p-6 text-gray-700">Profile content: description, features, etc.</div>
  </>
);

export default ProfileTab; 