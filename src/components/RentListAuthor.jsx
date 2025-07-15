import React from "react";

const RentListAuthor = () => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center md:items-start">
    <div className="flex items-center gap-2 mb-2 font-bold text-lg text-gray-600">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01"/></svg>
      Author
    </div>
    <div className="flex items-center gap-4 mb-4">
      <span className="bg-yellow-300 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">A</span>
      <div>
        <div className="font-bold text-lg text-gray-900">Arian</div>
        <div className="text-gray-700 text-sm">Developer at 27collective</div>
      </div>
    </div>
    <div className="flex gap-8 mt-2">
      <a href="#" className="flex flex-col items-center gap-1">
        <span className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center"><svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg></span>
        <span className="text-gray-700 text-sm">Facebook</span>
      </a>
      <a href="#" className="flex flex-col items-center gap-1">
        <span className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center"><svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18.36 6.64a9 9 0 1 0 0 10.72M15 9v6m6-3H9"/></svg></span>
        <span className="text-gray-700 text-sm">X</span>
      </a>
      <a href="#" className="flex flex-col items-center gap-1">
        <span className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center"><svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></span>
        <span className="text-gray-700 text-sm">Instagram</span>
      </a>
    </div>
  </div>
);

export default RentListAuthor; 