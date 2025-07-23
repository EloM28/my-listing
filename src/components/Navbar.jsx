import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dashboardTabsMenu } from "./dashboardTabsConfig";
import { useAuth } from "./AuthContext";

const tabToParam = {
  "Dashboard": "/dashboard",
  "My Listings": "/dashboard?tab=mylistings",
  "Promotions": "/dashboard?tab=promotions",
  "Bookmarks": "/dashboard?tab=bookmarks",
  "Account details": "/dashboard?tab=account",
  "Logout": "#logout"
};

const userMenu = dashboardTabsMenu.map(tab => ({
  label: tab.label,
  to: tabToParam[tab.value] || "#",
  danger: tab.danger
}));

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userDropdown, setUserDropdown] = useState(false);
  const userDropdownRef = useRef();
  const { logout } = useAuth();


  useEffect(() => {
    function handleClick(e) {
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) {
        if (window.innerWidth >= 1024) {
          setUserDropdown(false);
        }
        // setUserDropdown(false);
      }
    }
    if (userDropdown) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [userDropdown]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setIsDrawerOpen(false);
      if (window.innerWidth >= 768) setIsMobileSearchOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fermer le dropdown utilisateur quand l'utilisateur change
  useEffect(() => {
    setUserDropdown(false);
  }, [user]);

  const mobileDropdowns = {
    Explore: [
      { label: "Explore 1", href: "/explore" }
    ],
    Listings: [
      { label: "For rent listings", href: "/rentlist" },
      { label: "For sale listings", href: "/salelist" },
    ],
    More: [
      // { label: "Blog", href: "#" },
      { label: "Shop", href: "/shop" },
      { label: "Add A listing", href: "/add-listing" },
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
      <div className="hidden lg:flex items-center justify-between px-4 lg:px-8 py-2 md:py-3 lg:py-4 w-full">
        {/* Bloc gauche : logo + search */}
        <div className="flex items-center gap-x-2 lg:gap-x-3 min-w-0 flex-1">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <svg className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
          </Link>
          {/* Search */}
          <div className="relative flex items-center w-48 md:w-64 lg:w-80 h-8 md:h-10 lg:h-12" ref={searchRef}>
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
            <input
              type="text"
              placeholder="Type your search..."
              className="pl-10 pr-4 w-full h-full border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 text-xs md:text-sm lg:text-base"
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
        <div className="hidden lg:flex items-center gap-x-2 lg:gap-x-3 flex-shrink-0">
          <Link to="/" className="text-gray-700 hover:text-red-500 font-medium text-xs md:text-sm lg:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2">Home</Link>
          {/* Dropdowns desktop avec gestion d'état */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('Explore')}
            onMouseLeave={() => setOpenDropdown('')}
          >
            <button className="px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2 flex items-center gap-1 font-medium text-xs md:text-sm lg:text-base transition-colors group-hover:text-red-500 hover:text-red-500 focus:text-red-500 h-8 md:h-10 lg:h-12">
              Explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === 'Explore' && (
              <div className="absolute left-0 w-48 bg-white rounded shadow-lg z-20">
                <Link to="/explore" onClick={() => setOpenDropdown('')} className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Explore 1</Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('Listings')}
            onMouseLeave={() => setOpenDropdown('')}
          >
            <button className="px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2 flex items-center gap-1 font-medium text-xs md:text-sm lg:text-base transition-colors group-hover:text-red-500 hover:text-red-500 focus:text-red-500 h-8 md:h-10 lg:h-12">
              Listings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === 'Listings' && (
              <div className="absolute left-0 w-48 bg-white rounded shadow-lg z-20">
                <Link to="/rentlist" onClick={() => setOpenDropdown('')} className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">For rent listings</Link>
                <Link to="/salelist" onClick={() => setOpenDropdown('')} className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">For sale listings</Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('More')}
            onMouseLeave={() => setOpenDropdown('')}
          >
            <button className="px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2 flex items-center gap-1 font-medium text-xs md:text-sm lg:text-base transition-colors group-hover:text-red-500 hover:text-red-500 focus:text-red-500 h-8 md:h-10 lg:h-12">
              More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === 'More' && (
              <div className="absolute left-0 w-48 bg-white rounded shadow-lg z-20">
                {/* <a href="#" onClick={() => setOpenDropdown('')} className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Blog</a> */}
                <Link to="/shop" onClick={() => setOpenDropdown('')} className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Shop</Link>
                <Link to="/add-listing" onClick={() => setOpenDropdown('')} className="block px-4 py-2 hover:bg-gray-100 text-sm md:text-base">Add A listing</Link>
              </div>
            )}
          </div>
        </div>
        {/* Bloc droit : icônes, sign in, bouton add listing */}
        <div className="flex items-center gap-x-1 lg:gap-x-2 flex-shrink-0 ml-2 lg:ml-2">
          {user ? (
            <div
              className="relative"
              ref={userDropdownRef}
              onMouseEnter={() => setUserDropdown(true)}
              onMouseLeave={() => setUserDropdown(false)}
            >
              <button
                className="flex items-center gap-2 focus:outline-none"
                onClick={() => setUserDropdown(d => !d)}
              >
                <span className="bg-pink-200 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center font-bold uppercase">{user.name[0]}</span>
                <span className="font-medium text-gray-700 mx-1">{user.name}</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {userDropdown && (
                <div className="absolute right-0 w-56 bg-white rounded shadow-lg border border-gray-300 z-50 animate-fade-in">
                  {userMenu.map((item, idx) => (
                    <div key={item.label}>
                      {idx > 0 && <div className="border-t border-gray-300" />}
                      {item.danger ? (
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-3 text-red-500 hover:bg-gray-50 font-medium cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          to={item.to}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                          onClick={() => setUserDropdown(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin" className="text-gray-700 hover:text-red-500 font-medium text-xs md:text-sm lg:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2">Sign in</Link> 
              <span>or</span> 
              <Link to="/register" className="text-gray-700 hover:text-red-500 font-medium text-xs md:text-sm lg:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2">Register</Link>
            </>
          )}
          <a href="#" className="text-gray-700 hover:text-red-500 text-xs md:text-sm lg:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
          </a>
          { user && 
          <a href="#" className="text-gray-700 hover:text-red-500 text-xs md:text-sm lg:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8zm-2 0V7m0 8l-7-5-7 5" /></svg>
          </a> 
          }
          
          {user?.role !== "customer" && (
           <>
              <Link to="/add-listing" className="hidden lg:flex bg-red-500 hover:bg-red-600 text-white font-semibold px-2 md:px-3 lg:px-5 py-1 md:py-2 lg:py-2 rounded items-center gap-2 ml-1 md:ml-2 lg:ml-4 text-xs md:text-sm lg:text-base h-8 md:h-10 lg:h-12">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" /></svg>
                Add Listing
              </Link>
            </>
          )
          }
        </div>
      </div>
      {/* Tablet & mobile navbar */}
      <div className="flex lg:hidden items-center justify-between px-2 sm:px-4 py-4 w-full">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 mr-1"
            onClick={() => { setIsDrawerOpen(true); setOpenDropdown(""); setUserDropdown(false) }}
            aria-label="Open menu"
          >
            <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <Link to="/" className="flex items-center gap-1">
            <svg className="w-9 h-9 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-10V7.236A2.236 2.236 0 0017.764 5H6.236A2.236 2.236 0 004 7.236V12c0 5.5 8 10 8 10z" /><circle cx="12" cy="10" r="3" /></svg>
          </Link>
        </div>
        {/* Right: panier, search icon (dropdown), user icon */}
        <div className="flex items-center gap-2">
        <a href="#" className="text-gray-700 hover:text-red-500 text-xs md:text-sm lg:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
          </a>
          {
            user ? (
            <a href="#" className="text-gray-700 hover:text-red-500 text-xs md:text-sm lg:text-base px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-2">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8zm-2 0V7m0 8l-7-5-7 5" /></svg>
            </a>
          ) : (
            <>
              <Link to="/signin" className="text-gray-700 hover:text-red-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.755 6.879 2.047M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </Link>
              <Link to="/signin"  className="hidden md:inline-block lg:hidden text-gray-700 hover:text-red-500 font-medium text-xs md:text-sm">Sign in</Link>
              <span className="hidden md:inline-block lg:hidden">or</span>
              <Link to="/register"  className="hidden md:inline-block lg:hidden text-gray-700 hover:text-red-500 font-medium text-xs md:text-sm">Register</Link>
            </>
          )
          }
          {/* Search icon with dropdown */}
          <div className="relative">
            <button
              className="text-gray-700 hover:text-red-500 p-2"
              onClick={() => setIsMobileSearchOpen((prev) => !prev)}
              aria-label="Open search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
            </button>
            {isMobileSearchOpen && (
              <div className="absolute right-0 mt-2 w-64 max-w-xs bg-white rounded shadow-lg z-50">
                <input
                  type="text"
                  placeholder="Type your search..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 text-sm"
                  autoFocus
                />
                {/* Ajoute ici le dropdown de search si besoin */}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Drawer et recherche mobile (inchangés) */}
      {isDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-opacity-1 z-40" onClick={() => { setIsDrawerOpen(false); setUserDropdown(false); }}></div>
          <div className="fixed top-0 left-0 h-full w-80 max-w-full bg-white z-50 shadow-lg transition-transform duration-300 transform translate-x-0">
            {/* Croix pour fermer le drawer */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              {user && (
                <div className="flex items-center gap-2 cursor-pointer select-none" onClick={e => { e.stopPropagation(); setUserDropdown((prev) => !prev); setOpenDropdown(''); }}>
                  <span className="bg-pink-200 text-pink-800 rounded-full w-9 h-9 flex items-center justify-center font-bold uppercase">{user.name[0]}</span>
                  <span className="font-medium text-gray-700 text-lg">{user.name}</span>
                  <svg className={`w-5 h-5 ml-1 transition-transform ${userDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              )}
              <button onClick={() => { setIsDrawerOpen(false); setUserDropdown(false); setOpenDropdown('') }} aria-label="Close menu">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex flex-col gap-0">
              {/* Dropdown user (en dessous du header) */}
              {userDropdown && user && (
                <div className="flex flex-col w-full border-b border-gray-500 bg-white shadow animate-fade-in">
                  {userMenu.map((item, i) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        if (item.danger) { handleLogout(); setUserDropdown(false); setIsDrawerOpen(false); }
                        else { setUserDropdown(false); setIsDrawerOpen(false); navigate(item.to); }
                      }}
                      className={`w-full text-left font-bold text-base px-6 py-4 border-t border-gray-200 transition-colors duration-150 text-gray-700 hover:bg-gray-100 cursor-pointer ${item.danger ? 'text-red-500' : ''}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
              {/* Liens principaux */}
              <Link to="/" className="w-full flex items-center justify-between px-4 py-3 font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none" onClick={() => { setIsDrawerOpen(false);  }}>
                Home
              </Link>
              {Object.entries(mobileDropdowns).map(([key, items]) => (
                <div key={key}>
                  <button className="w-full flex items-center justify-between px-4 py-3 font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none" onClick={() => { setUserDropdown(false); setOpenDropdown(openDropdown === key ? "" : key); }}>
                    {key}
                    <svg className={`w-4 h-4 ml-2 transition-transform ${openDropdown === key ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`bg-white transition-all duration-200 overflow-hidden ${openDropdown === key ? "max-h-96" : "max-h-0"}`}>
                    {items.map((item) => (
                      <Link key={item.label} to={item.href} className="block px-8 py-2 font-semibold text-gray-700 border-t border-gray-200 hover:bg-gray-100" onClick={() => { setIsDrawerOpen(false); setUserDropdown(false); }}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {/* Add Listing visible seulement pour owner */}
              { user?.role !== "customer"  && (
                <Link to="/add-listing" onClick={() => { setIsDrawerOpen(false); setUserDropdown(false); }} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-4 flex items-center gap-2 justify-center text-center text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" /></svg>
                  Add Listing
                </Link>
              )}
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