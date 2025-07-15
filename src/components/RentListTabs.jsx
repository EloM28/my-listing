import React, { useState } from "react";

const RentListTabs = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="w-full bg-white flex items-center justify-center gap-12 mt-2">
      <button onClick={() => setActiveTab("profile")} className={`py-4 px-6 font-semibold ${activeTab === "profile" ? "text-rose-500 border-b-2 border-rose-500" : "text-gray-700"}`}>Profile</button>
      <button onClick={() => setActiveTab("reviews")} className={`py-4 px-6 font-semibold ${activeTab === "reviews" ? "text-rose-500 border-b-2 border-rose-500" : "text-gray-700"}`}>Reviews <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded-full">0</span></button>
      <button onClick={() => setActiveTab("contact")} className={`py-4 px-6 font-semibold ${activeTab === "contact" ? "text-rose-500 border-b-2 border-rose-500" : "text-gray-700"}`}>Contact</button>
    </div>
  );
};

export default RentListTabs; 