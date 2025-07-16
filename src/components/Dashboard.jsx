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
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b border-gray-200">
        <div className="flex justify-center items-center gap-0">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`font-bold text-base px-8 py-4 border-b-2 transition-colors duration-150 ${i === 0 ? 'border-red-500 text-gray-900' : 'border-transparent text-gray-700 hover:text-red-500'} ${i > 0 ? 'border-l border-gray-200' : ''}`}
              style={{minWidth:140}}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Hello, {user.name?.toLowerCase() || ''}!</h1>
        <div className="bg-white rounded-lg shadow p-8 flex items-center gap-6 max-w-3xl">
          <span className="bg-red-500 rounded-full p-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.755 6.879 2.047M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </span>
          <div>
            <div className="font-bold text-lg mb-1">Welcome</div>
            <div className="text-gray-700 text-base">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 