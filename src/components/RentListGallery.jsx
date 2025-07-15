import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
];

const RentListGallery = () => {
  const [current, setCurrent] = useState(0);

  const goTo = idx => setCurrent(idx);
  const prev = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const next = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-4 font-bold text-lg text-[#222]">
        <svg className="w-5 h-5 text-[#8b8b8b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 8h.01M16 16h.01M8 16h.01M16 8h.01"/></svg>
        <span className="text-[#222] font-extrabold">Gallery</span>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="w-full flex justify-center items-center">
          <img src={images[current]} alt="gallery main" className="rounded-2xl shadow w-full h-72 object-cover mb-2 border border-gray-100" style={{maxHeight: 340}} />
        </div>
        <div className="flex gap-4 justify-center mb-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex-nowrap pb-2" style={{WebkitOverflowScrolling: 'touch'}}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb${idx}`}
              className={`rounded-xl w-28 h-20 object-cover cursor-pointer border-2 transition-all duration-150 flex-shrink-0 ${current === idx ? 'border-rose-500 shadow' : 'border-transparent hover:border-gray-300'}`}
              onClick={() => goTo(idx)}
              style={{boxShadow: current === idx ? '0 2px 8px rgba(236, 72, 153, 0.15)' : undefined}}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <button onClick={prev} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 shadow transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg></button>
          <button onClick={next} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 shadow transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </div>
  );
};

export default RentListGallery; 