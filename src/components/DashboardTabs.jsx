import React from "react";

const DashboardTabs = ({ tabs, activeTab, onTabChange }) => (
  <div className="flex flex-wrap justify-center items-center">
    {tabs.map((tab, i) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`font-bold text-sm md:text-base px-4 md:px-8 py-3 md:py-4 border-b-2 transition-colors duration-150 
          ${ activeTab === tab ? "border-red-500 text-gray-900" : "border-transparent text-gray-700 hover:text-red-500"} flex-1 min-w-[100px] max-w-[150px]`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default DashboardTabs; 