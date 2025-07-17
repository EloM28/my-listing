import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";


const DashboardTabs = ({ tabs, activeTab, onTabChange }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/'); // Redirige vers la home après logout
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      {tabs.map((tab, i) => (
        <button
          key={tab.value}
          onClick={() => {
            if (tab.danger) return handleLogout();
            onTabChange(tab.value);
          }}
          className={`font-bold text-sm md:text-base px-4 md:px-8 py-3 md:py-4 border-b-2 transition-colors duration-150 
            ${ activeTab === tab.value ? "border-red-500 text-gray-900" : "border-transparent text-gray-700 hover:text-red-500"} flex-1 min-w-[100px] max-w-[150px] ${tab.danger ? 'text-red-500' : ''}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default DashboardTabs; 