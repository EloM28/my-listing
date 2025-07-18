import React from "react";
import { useLocation } from "react-router-dom";

const packages = [
  {
    name: "BASIC",
    price: "100.000BIF",
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
    price: "180.000BIF",
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
    price: "250.000BIF",
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-2 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Choose a Package</h1>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-md md:max-w-5xl justify-center items-center">
        {packages.map(pkg => (
          <div key={pkg.name} className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border border-gray-200 mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-black mb-2 tracking-widest text-center">{pkg.name}</h2>
            <div className="text-4xl font-extrabold text-black mb-4 text-center">{pkg.price}</div>
            <ul className="mb-8 text-gray-700 text-base list-disc list-inside text-center">
              {pkg.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button
              className="w-full bg-gray-900 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2"
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