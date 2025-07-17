import React, { useState } from "react";
import ListingSaleCard from "./ListingSaleCard";

const ReviewsTab = ({ actions = [] }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const listings = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      price: "$4,500",
      name: "Union square",
      address: "South Figueroa Street",
      area: 1250,
      rooms: 4,
      bathrooms: 3,
      beds: 3,
      featured: true,
    },
    {
      image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
      price: "$2,800",
      name: "Zaetta Studio",
      address: "Columbia Ave",
      area: 4500,
      rooms: 7,
      bathrooms: 3,
      beds: 12,
      featured: false,
    },
    {
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
      price: "$1,900",
      name: "Elegant Apartment",
      address: "South Olive Street",
      area: 1170,
      rooms: 3,
      bathrooms: 2,
      beds: 2,
      featured: false,
    },
  ];
  return (
    <div className="w-full py-8 bg-gray-50">
      {/* Actions arrondies en haut */}
      {actions.length > 0 && (
        <div className="w-full bg-gray-50 flex flex-wrap justify-center gap-2 md:gap-4 py-6 px-2 md:px-8 mb-2">
          {actions.map((action, idx) => (
            <button key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 font-medium text-sm shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={action.icon} />
              </svg>
              {action.label}
            </button>
          ))}
        </div>
      )}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Colonne gauche : No comments */}
        <div className="flex flex-col items-center justify-center min-h-[340px]">
          <span className="flex flex-col items-center">
            <svg className="w-16 h-16 text-gray-300 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="9" cy="10" r="1" fill="currentColor" />
              <circle cx="15" cy="10" r="1" fill="currentColor" />
              <path d="M9 16c1.5-1 4.5-1 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-gray-500 text-lg">No comments yet.</span>
          </span>
        </div>
        {/* Colonne droite : Add review */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <div className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 3h-6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" /></svg>
            Add a review
          </div>
          <div>
            <div className="text-sm font-medium text-gray-700 mb-1">Overall Rating</div>
            <div className="flex items-center gap-1 mb-2">
              {[1,2,3,4,5].map(star => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  <svg
                    className={`w-7 h-7 ${star <= (hover || rating) ? 'text-rose-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-rose-400 text-gray-900 placeholder-gray-400 py-2" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-rose-400 text-gray-900 placeholder-gray-400 py-2" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Your Message</label>
              <textarea className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-rose-400 text-gray-900 placeholder-gray-400 py-2 min-h-[60px]" placeholder="Enter message..." />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="saveinfo" className="accent-rose-500" />
              <label htmlFor="saveinfo" className="text-xs text-gray-500">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-lg mt-2">Submit review</button>
          </form>
        </div>
      </div>
      {/* Similar Listings */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            You May Also Be Interested In
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((item, idx) => (
              <ListingSaleCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsTab; 