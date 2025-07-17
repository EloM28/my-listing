import React, {useState, useEffect} from "react";
import AccountDetails from "./AccountDetails";
import DashboardTabs from "./DashboardTabs";
import { dashboardTabsMenu } from "./dashboardTabsConfig";
import { useSearchParams, useNavigate } from "react-router-dom";
import Bookmarks from "./Bookmarks";
import MyListings from "./MyListings";
import Promotions from "./Promotions";
import { useAuth } from "./AuthContext";


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
  const { user } = useAuth();

  useEffect(() => {
    if (!user) navigate('/signin');
  }, [user, navigate]);
  if (!user) return null;

  // Synchronise l'onglet actif avec l'URL
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && paramToTab[tabParam] && paramToTab[tabParam] !== activeTab) {
      setActiveTab(paramToTab[tabParam]);
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

  // Gestion du changement d'onglet
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "Dashboard") {
      setSearchParams({});
    } else if (tabToParam[tab]) {
      setSearchParams({ tab: tabToParam[tab] });
    }
  };

  let content = null;
  if (activeTab === "Account details") content = <AccountDetails />;
  else if (activeTab === "My Listings") content = <MyListings />;
  else if (activeTab === "Promotions") content = <Promotions />;
  else if (activeTab === "Bookmarks") content = <Bookmarks />;
  else content = (
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
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b border-gray-200">
        <DashboardTabs tabs={dashboardTabsMenu} activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      {content}
    </div>
  );
};

export default Dashboard; 