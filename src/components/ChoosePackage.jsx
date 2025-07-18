import React from "react";
import { useLocation } from "react-router-dom";

const packages = [
  {
    name: "BASIC",
    price: "£7.90",
    features: [
      "One listing submission",
      "90 days expiration",
      "Submit your business",
      "Create events",
      "Rent real estate"
    ]
  },
  {
    name: "ADVANCED",
    price: "£19.90",
    features: [
      "Five listing submissions",
      "180 days expiration",
      "Submit your business",
      "Create events",
      "Rent real estate"
    ]
  },
  {
    name: "PREMIUM",
    price: "£29.90",
    features: [
      "Ten listing submissions",
      "360 days expiration",
      "Submit your business",
      "Create events",
      "Rent real estate"
    ]
  }
];

const ChoosePackage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get('type');

  const handleBuy = (pkg) => {
    alert(`You selected the ${pkg.name} package for type: ${type}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Choose a Package</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-center">
        {packages.map(pkg => (
          <div key={pkg.name} className="flex-1 max-w-sm bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border border-gray-200">
            <h2 className="text-lg font-bold text-red-500 mb-2 tracking-widest">{pkg.name}</h2>
            <div className="text-4xl font-extrabold text-red-500 mb-4">{pkg.price}</div>
            <ul className="mb-8 text-gray-700 text-base list-disc list-inside">
              {pkg.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2"
              onClick={() => handleBuy(pkg)}
            >
              Buy Package
              <span className="ml-2">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoosePackage; 