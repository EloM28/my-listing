import React, { useRef, useEffect, useState } from "react";
import ExploreHeader from "./ExploreHeader";
import ExploreSidebar from "./ExploreSidebar";
import ExplorePagination from "./ExplorePagination";
import ExploreResults from "./ExploreResults";

const NAVBAR_HEIGHT = 64; // px (ajuste si besoin)
const HEADER_HEIGHT = 70; // px (ajuste si besoin)

const ExplorePage = () => {
  const [scrollHeight, setScrollHeight] = useState("calc(100vh - 134px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    function handleResize() {
      const headerH = headerRef.current ? headerRef.current.offsetHeight : HEADER_HEIGHT;
      setScrollHeight(`calc(100vh - ${NAVBAR_HEIGHT + headerH}px)`);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div ref={headerRef}><ExploreHeader /></div>
      <div className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row gap-4 px-2 md:px-6 relative">
        {/* Sidebar desktop (fixe à gauche) */}
        <div className="hidden md:block md:w-80 flex-shrink-0 md:sticky md:top-[134px] h-fit">
          <ExploreSidebar />
        </div>
        {/* Bouton Filters mobile */}
        <div className="flex md:hidden justify-end mb-2">
          <button onClick={() => setDrawerOpen(true)} className="flex items-center gap-2 text-rose-500 font-semibold px-4 py-2 rounded-lg border border-rose-200 bg-white shadow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            Filters
          </button>
        </div>
        {/* Drawer mobile */}
        {drawerOpen && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
            {/* Drawer */}
            <div className="relative w-full max-w-xs bg-white h-full shadow-xl z-50 p-6 flex flex-col">
              <button className="absolute top-4 right-4 text-gray-500 text-2xl" onClick={() => setDrawerOpen(false)}>&times;</button>
              <ExploreSidebar />
            </div>
          </div>
        )}
        {/* Résultats (scrollable: ExplorePagination + ExploreResults seulement) */}
        <div className="flex-1 flex flex-col" style={{height: scrollHeight}}>
          <div className="flex-1 overflow-y-auto flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <ExplorePagination />
            </div>
            <ExploreResults />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
