import React from "react";

const tabs = [
  "Dashboard",
  "My Listings",
  "Promotions",
  "Bookmarks",
  "Account details",
  "Logout"
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="border-b bg-white">
        <div className="flex justify-center gap-12 py-6">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`font-semibold pb-2 border-b-2 ${i === 1 ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-700'}`}
              style={{minWidth:120}}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center" style={{minHeight:'300px'}}>
        <div className="bg-white rounded-lg shadow p-8 mt-12">
          <p className="text-center text-gray-700">You cannot access this page.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 