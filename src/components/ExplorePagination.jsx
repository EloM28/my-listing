import React from "react";

const ExplorePagination = () => {
  // Pour l'exemple, page 1/1, 4 résultats
  return (
    <div className="flex items-center gap-4 w-full justify-between md:justify-start">
      <button className="flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-100 text-gray-400 font-semibold" disabled>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <span className="text-gray-700 text-base font-medium">Showing 4 results</span>
      <button className="flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>
      <button className="ml-4 flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 8h.01M16 16h.01M8 16h.01M16 8h.01"/></svg>
      </button>
    </div>
  );
};

export default ExplorePagination; 