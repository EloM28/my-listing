import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterSection = () => (
  <footer className="relative bg-white pt-24 pb-10 mt-8 overflow-hidden">
    {/* Décorations SVG */}
    <svg className="absolute left-24 top-12 w-32 h-10 opacity-40" viewBox="0 0 160 40" fill="none"><rect width="160" height="40" rx="20" fill="#4B375A"/></svg>
    <svg className="absolute right-24 top-8 w-32 h-10 opacity-40" viewBox="0 0 160 40" fill="none"><rect width="160" height="40" rx="20" fill="#4B375A"/></svg>
    <svg className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-16 opacity-20" viewBox="0 0 120 64" fill="none"><rect width="120" height="64" rx="32" fill="#FFEBF0"/></svg>
    <svg className="absolute left-1/3 bottom-16 w-16 h-8 opacity-20" viewBox="0 0 64 32" fill="none"><rect width="64" height="32" rx="16" fill="#FFEBF0"/></svg>
    <svg className="absolute right-1/4 bottom-10 w-24 h-8 opacity-40" viewBox="0 0 96 32" fill="none"><rect width="96" height="32" rx="16" fill="#4B375A"/></svg>

    {/* Call to action */}
    <div className="relative z-10 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-4">Get MyListing today!</h2>
      <button className="bg-[#ff4d5a] hover:bg-[#e43c4a] text-white font-semibold rounded px-8 py-3 text-base shadow transition mb-16">Purchase now</button>
    </div>

    {/* Socials & copyright */}
    <div className="relative z-10 flex flex-col items-center gap-4 mt-8">
      <div className="flex gap-4 mb-2">
        <a href="#" className="bg-gray-100 hover:bg-blue-800 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-gray-700 text-xl transition"><FaFacebookF /></a>
        <a href="#" className="bg-gray-100 hover:bg-blue-200 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-gray-700 text-xl transition"><FaTwitter /></a>
        <a href="#" className="bg-gray-100 hover:bg-red-200 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-gray-700 text-xl transition"><FaInstagram /></a>
        <a href="#" className="bg-gray-100 hover:bg-red-500 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-gray-700 text-xl transition"><FaYoutube /></a>
      </div>
      <div className="text-gray-500 text-sm flex items-center gap-1">
        <span>&copy; Made with</span>
        <span className="text-[#ff4d5a] text-lg">♥</span>
        <a href="https://nexusx.bi" target="blank">by NexusX</a>
      </div>
    </div>
  </footer>
);

export default FooterSection; 