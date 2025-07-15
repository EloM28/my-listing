import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchRef = useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setIsDrawerOpen(false);
      if (window.innerWidth >= 768) setIsMobileSearchOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileDropdowns = {
    Explore: [
      { label: "Explore", href: "#" },
      { label: "Explore 2", href: "#" },
      { label: "Explore 3", href: "#" },
      { label: "Explore 4", href: "#" },
      { label: "Explore 5", href: "#" },
    ],
    Listings: [
      { label: "For rent listings", href: "#" },
      { label: "For sale listings", href: "#" },
    ],
    More: [
      { label: "Blog", href: "#" },
      { label: "Shop 2", href: "#" },
      { label: "Add listing 3", href: "#" },
    ],
  };

  const mobileSearchSuggestions = [
    {
      label: "House",
      icon: (
        <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
        </svg>
      ),
    },
    {
      label: "Office",
      icon: (
        <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v2H4zm0 4h16v2H4zm0 4h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="w-full bg-white shadow-sm relative">
      {/* Desktop navbar */}
      <div className="hidden md:flex items-center justify-between px-8 py-4 w-full">
        {/* Bloc gauche : logo + search */}
        <div className="flex items-center gap-x-6 min-w-0 flex-1">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
          </a>
          {/* Search */}
          <div className="relative flex items-center w-64 md:w-80" ref={searchRef}>
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
            <input
              type="text"
              placeholder="Type your search..."
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 text-sm md:text-base"
              onFocus={() => setIsSearchOpen(true)}
            />
            {isSearchOpen && (
              <div className="absolute left-0 mt-46 w-full max-w-xs md:max-w-md bg-white rounded shadow-lg z-30">
                <p className="block px-4 py-2 text-gray-700 border-b-1 border-gray-200 text-sm md:text-base">Featured</p>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm md:text-base">
                  <span>
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
                    </svg>
                  </span>
                  House
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm md:text-base">
                  <span>
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v2H4zm0 4h16v2H4zm0 4h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
                    </svg>
                  </span>
                  Office
                </a>
              </div>
            )}
          </div>
        </div>
        {/* Bloc centre : liens de navigation */}
        <div className="flex items-center gap-x-6 flex-shrink-0">
          <Link to="/" className="text-gray-700 hover:text-red-500 font-medium text-sm md:text-base">Home</Link>
          {/* Dropdowns desktop */}
          <div className="relative group">
            <button className="px-2 py-2 hover:text-red-500 flex items-center gap-1 font-medium text-sm md:text-base">
              Explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Explore</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Explore 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Explore 3</a>
              <Link to="/ListingPage" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Explore 4</Link>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Explore 5</a>
            </div>
          </div>
          <div className="relative group">
            <button className="px-2 py-2 hover:text-red-500 flex items-center gap-1 font-medium text-sm md:text-base">
              Listings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">For rent listings</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">For sale listings</a>
            </div>
          </div>
          <div className="relative group">
            <button className="px-2 py-2 hover:text-red-500 flex items-center gap-1 font-medium text-sm md:text-base">
              More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Blog</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Shop 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Add listing 3</a>
            </div>
          </div>
        </div>
        {/* Bloc droit : icônes, sign in, bouton add listing */}
        <div className="flex items-center gap-x-4 flex-shrink-0 ml-8">
          <a href="#" className="text-gray-700 hover:text-red-500 text-sm md:text-base">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.755 6.879 2.047M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 text-sm md:text-base">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
          </a>
          <span className="text-gray-700 mx-2">|</span>
          <a href="#" className="text-gray-700 hover:text-red-500 font-medium text-sm md:text-base">Sign in or Register</a>
          <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 md:px-5 py-2 rounded flex items-center gap-2 ml-4 text-sm md:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" /></svg>
            Add Listing
          </a>
        </div>
      </div>
      {/* Mobile navbar (inchangée) */}
      <div className="flex md:hidden items-center justify-between px-2 sm:px-4 py-4 w-full">
        {/* Hamburger + Logo */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 mr-1"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <a href="#" className="flex items-center gap-1">
            <svg className="w-9 h-9 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-10V7.236A2.236 2.236 0 0017.764 5H6.236A2.236 2.236 0 004 7.236V12c0 5.5 8 10 8 10z" /><circle cx="12" cy="10" r="3" /></svg>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-700 hover:text-red-500"
            onClick={() => setIsMobileSearchOpen(true)}
            aria-label="Open search"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
          </button>
          <a href="#" className="text-gray-700 hover:text-red-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.755 6.879 2.047M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
          </a>
        </div>
      </div>
      {/* Drawer et recherche mobile (inchangés) */}
      {isDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsDrawerOpen(false)}></div>
          <div className="fixed top-0 left-0 h-full w-80 max-w-full bg-white z-50 shadow-lg transition-transform duration-300 transform translate-x-0">
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <span className="font-bold text-red-500 text-lg">Home</span>
              <button onClick={() => setIsDrawerOpen(false)} aria-label="Close menu">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex flex-col divide-y divide-gray-200">
              {Object.entries(mobileDropdowns).map(([key, items]) => (
                <div key={key}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setOpenDropdown(openDropdown === key ? "" : key)}
                  >
                    {key}
                    <svg className={`w-4 h-4 ml-2 transition-transform ${openDropdown === key ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`bg-white transition-all duration-200 overflow-hidden ${openDropdown === key ? "max-h-96" : "max-h-0"}`}>
                    {items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-4 flex items-center gap-2 justify-center text-center text-base">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" /></svg>
                Add Listing
              </a>
            </div>
          </div>
        </>
      )}
      {isMobileSearchOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsMobileSearchOpen(false)}></div>
          <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg animate-fadeIn">
            <div className="flex items-center px-4 py-4 border-b">
              <input
                type="text"
                placeholder="Type your search..."
                className="flex-1 border-0 outline-none bg-transparent text-lg"
                autoFocus
              />
              <button onClick={() => setIsMobileSearchOpen(false)} className="ml-2" aria-label="Close search">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="px-4 py-2 border-b text-gray-700">Featured</div>
            <div className="flex flex-col gap-2 py-2">
              {mobileSearchSuggestions.map((item) => (
                <a key={item.label} href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-gray-700">
                  {item.icon}
                  <span className="text-lg">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar; 