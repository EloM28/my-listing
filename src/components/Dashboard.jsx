import React, {useState, useEffect} from "react";
import AccountDetails from "./AccountDetails";
import { useSearchParams, useNavigate } from "react-router-dom";

const tabs = [
  "Dashboard",
  "My Listings",
  "Promotions",
  "Bookmarks",
  "Account details",
  "Logout"
];

// Map tab names to URL param values
const tabToParam = {
  "Dashboard": "dashboard",
  "My Listings": "mylistings",
  "Promotions": "promotions",
  "Bookmarks": "bookmarks",
  "Account details": "account",
};
const paramToTab = {
  "dashboard": "Dashboard",
  "mylistings": "My Listings",
  "promotions": "Promotions",
  "bookmarks": "Bookmarks",
  "account": "Account details",
};

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  // Synchronise l'onglet actif avec l'URL
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && paramToTab[tabParam] && paramToTab[tabParam] !== activeTab) {
      setActiveTab(paramToTab[tabParam]);
      console.log('first co=lg', paramToTab[tabParam])

    }
    if (!tabParam && activeTab !== "Dashboard") {
      setActiveTab("Dashboard");
    }
  }, [searchParams]);

  // Synchronise l'URL avec l'onglet actif
  useEffect(() => {
    const currentParam = searchParams.get('tab');
    const expectedParam = tabToParam[activeTab];
    if (expectedParam && currentParam !== expectedParam) {
      setSearchParams({ tab: expectedParam });
    }
    if (activeTab === "Dashboard" && searchParams.get('tab')) {
      setSearchParams({});

    }
  }, [activeTab]);

  // Si l'onglet "Account details" est sélectionné, afficher le composant AccountDetails
  if (activeTab === "Account details") {
    return <AccountDetails />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b border-gray-200">
        <div className="flex flex-wrap justify-center items-center" >
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-bold text-sm md:text-base px-4 md:px-8 py-3 md:py-4 border-b-2 transition-colors duration-150 
              ${ activeTab === tab ? "border-red-500 text-gray-900" : "border-transparent text-gray-700 hover:text-red-500"} flex-1 min-w-[100px] max-w-[150px]`}
          >
            {tab}
          </button>
        ))}
      </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Hello, {user.name?.toLowerCase() || ''}!</h1>
        <div className="bg-white rounded-lg shadow p-8 flex items-center gap-6 max-w-3xl">
          <span className="bg-red-500 rounded-full p-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.755 6.879 2.047M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </span>
          <div>
            <div className="font-bold text-lg mb-1">Welcome</div>
            <div className="text-gray-700 text-base">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 