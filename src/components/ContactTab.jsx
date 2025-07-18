import React from "react";
import ListingSaleCard from "./ListingSaleCard";
import RentFooter from "./RentFooter";

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

const ContactTab = ({ actions = [] }) => (
  <>
    <div className="w-full py-8 bg-gray-50">
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
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-4 md:py-10 md:px-12 mt-4">
        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-[#1a2233] font-semibold mb-1 text-base">Your Name (required)</label>
            <input type="text" required className="w-full border-0 border-b border-gray-300 focus:ring-0 focus:border-rose-500 bg-transparent text-base text-gray-900 placeholder-gray-400 py-3 mb-2" />
          </div>
          <div>
            <label className="block text-[#1a2233] font-semibold mb-1 text-base">Your Email (required)</label>
            <input type="email" required className="w-full border-0 border-b border-gray-300 focus:ring-0 focus:border-rose-500 bg-transparent text-base text-gray-900 placeholder-gray-400 py-3 mb-2" />
          </div>
          <div>
            <label className="block text-[#1a2233] font-semibold mb-1 text-base">Subject</label>
            <input type="text" className="w-full border-0 border-b border-gray-300 focus:ring-0 focus:border-rose-500 bg-transparent text-base text-gray-900 placeholder-gray-400 py-3 mb-2" />
          </div>
          <div>
            <label className="block text-[#1a2233] font-semibold mb-1 text-base">Your Message</label>
            <textarea className="w-full border-0 border-b border-gray-300 focus:ring-0 focus:border-rose-500 bg-transparent text-base text-gray-900 placeholder-gray-400 py-3 min-h-[120px] mb-2" />
          </div>
          <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-lg mt-4 text-base text-center transition">Send</button>
        </form>
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
      <RentFooter />
    </div>
  </>
);

export default ContactTab; 