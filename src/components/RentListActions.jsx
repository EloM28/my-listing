import React from "react";

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

const RentListActions = () => (
  <div className="w-full flex flex-wrap justify-center gap-4 py-6 bg-white">
    {actions.map((action, idx) => (
      <button key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-sm">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={action.icon} />
        </svg>
        {action.label}
      </button>
    ))}
  </div>
);

export default RentListActions; 