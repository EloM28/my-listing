import React, { useState } from "react";

const ExploreHeader = () => {
  const [activeTab, setActiveTab] = useState("rent");

  return (
    <div className="w-full bg-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-y-4 gap-x-12">
        {/* Titre principal */}
        <h2 className="font-bold text-base md:text-lg whitespace-nowrap">
          What are you looking for?
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-8">
          {/* Tab Rent */}
          <button
            onClick={() => setActiveTab("rent")}
            className={`relative flex flex-col items-center font-bold text-sm md:text-base pb-2 transition-colors ${
              activeTab === "rent" ? "text-rose-500" : "text-gray-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 21V9h6v12"
                />
              </svg>
              <span>For rent</span>
            </div>
            {activeTab === "rent" && (
            <span
                className="absolute left-1/2 -translate-x-1/2 -bottom-0 bg-rose-500 rounded-full transition-all"
                style={{ width: "150px", height: "2px" }}
            ></span>
            )}
          </button>

          {/* Tab Sale */}
          <button
            onClick={() => setActiveTab("sale")}
            className={`relative flex flex-col items-center font-bold text-sm md:text-base pb-2 transition-colors ${
              activeTab === "sale" ? "text-rose-500" : "text-gray-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 21V9h6v12"
                />
              </svg>
              <span>For sale</span>
            </div>
            {activeTab === "sale" && (
                <span
                    className="absolute left-1/2 -translate-x-1/2 -bottom-0 bg-rose-500 rounded-full transition-all"
                    style={{ width: "150px", height: "2px" }}
                ></span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreHeader;
