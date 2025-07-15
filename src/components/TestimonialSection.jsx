import React from "react";

const testimonials = [
  {
    name: "John Travis",
    role: "Designer",
    avatar: "/uploads/sites/7/2019/10/ava2.png",
    text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    name: "Ana Smith",
    role: "Manager",
    avatar: "/uploads/sites/7/2019/10/ava4.png",
    text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    name: "Mike Stuart",
    role: "Support",
    avatar: "/uploads/sites/7/2019/10/y9.png",
    text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const TestimonialSection = () => (
  <section className="py-16">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Our testimonials</h2>
    <div className="flex flex-wrap justify-center gap-y-8 gap-x-6 px-2 sm:px-4">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col justify-between w-full max-w-sm mx-auto my-4 transition hover:shadow-md"
        >
          <p className="text-gray-800 mb-8 leading-relaxed">{t.text}</p>
          <div className="flex items-center gap-4 mt-auto">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover border border-gray-200"
            />
            <div>
              <div className="font-semibold text-lg text-gray-900">{t.name}</div>
              <div className="text-gray-400 text-base">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialSection; 