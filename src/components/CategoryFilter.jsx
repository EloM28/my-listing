import React from "react";

const categories = [
  {
    name: "House",
    image: "/uploads/sites/7/2017/10/home-avatar.jpeg",
    icon: (
      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
    ),
  },
  {
    name: "Apartment",
    image: "/uploads/sites/7/2017/10/category-avatar.jpeg",
    icon: (
      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 21V7a2 2 0 012-2h12a2 2 0 012 2v14M9 21V9m6 12V9" /></svg>
    ),
  },
  {
    name: "Office",
    image: "/uploads/sites/7/2017/10/office-avatar-1024x683.jpeg",
    icon: (
      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21V3h18v18M9 21V9m6 12V9" /></svg>
    ),
  },
  {
    name: "Room",
    image: "/uploads/sites/7/2017/10/l5.jpg",
    icon: (
      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17v-2a2 2 0 012-2h12a2 2 0 012 2v2M9 21V9m6 12V9" /></svg>
    ),
  },
];

const CategoryFilter = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Filter by category</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative rounded-xl overflow-hidden shadow-md group transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl cursor-pointer "
            style={{ minHeight: 320 }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 group-hover:opacity-90 transition-transform duration-200"
            />
            <div className="relative flex flex-col items-center justify-center h-full z-10 pt-12">
              {cat.icon}
              <span className="text-white text-xl font-bold mt-2 drop-shadow-lg">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilter; 