import React from "react";

const RentListCategories = () => (
  <div className="bg-white rounded-xl shadow p-6">
    <div className="flex items-center gap-2 mb-2 font-bold text-lg">
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      Categories
    </div>
    <div className="flex items-center gap-3 mt-2">
      <span className="bg-rose-500 rounded-full p-3 flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z"/></svg>
      </span>
      <span className="font-medium text-gray-700 text-lg">Office</span>
    </div>
  </div>
);

export default RentListCategories; 