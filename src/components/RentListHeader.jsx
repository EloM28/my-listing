import React from "react";

const RentListHeader = () => (
  <div className="w-full flex">
    <div className="w-1/3 h-64 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80)'}}></div>
    <div className="w-1/3 h-64 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80)'}}></div>
    <div className="w-1/3 h-64 bg-cover bg-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80)'}}>
      <div className="absolute bottom-4 right-4 bg-white/90 rounded-lg px-6 py-4 flex flex-col items-end shadow">
        <span className="text-gray-700 text-sm">Price per month</span>
        <span className="text-2xl font-bold text-gray-900">$4,500</span>
        <button className="mt-3 bg-rose-500 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 0 1-6 0v-1m6 0H9" /></svg>
          Call now
        </button>
      </div>
    </div>
    <div className="absolute left-10 top-40 flex items-center gap-6">
      <div className="bg-rose-500 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414A6 6 0 1 0 12.414 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414z" /></svg>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white drop-shadow">Union square</h1>
        <p className="text-white font-medium drop-shadow">Vibrant, three stories worth of office space in the heart of LA</p>
      </div>
    </div>
  </div>
);

export default RentListHeader; 