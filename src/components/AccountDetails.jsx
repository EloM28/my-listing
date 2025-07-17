import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardTabs from "./DashboardTabs";
import { dashboardTabsMenu } from "./dashboardTabsConfig";
import { useAuth } from "./AuthContext";

const AccountDetails = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const navigate = useNavigate();
  const [activeTab] = useState("Account details");
  const { user: authUser } = useAuth();

  useEffect(() => {
    if (!authUser) navigate('/signin');
    else {
      setUser(authUser);
      setFormData({
        username: authUser.name || "",
        email: authUser.email || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    }
  }, [authUser, navigate]);

  if (!user) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSaveChanges = () => {
    // Ici vous pouvez ajouter la logique pour sauvegarder les changements
    console.log("Saving changes:", formData);
    // Simuler une sauvegarde réussie
    alert("Changes saved successfully!");
  };

  const handleSwitchToOwner = () => {
    // Ici vous pouvez ajouter la logique pour changer le type de compte
    console.log("Switching to Property owner");
    alert("Account type changed to Property owner!");
  };

  // Pour le menu, on désactive les autres onglets
  const handleTabChange = (tab) => {
    if (tab === "Account details") return;
    // Map tab names to URL param values
    const tabToParam = {
      "Dashboard": "dashboard",
      "My Listings": "mylistings",
      "Promotions": "promotions",
      "Bookmarks": "bookmarks",
      "Account details": "account",
    };
    if (tab === "Dashboard") {
      navigate("/dashboard");
    } else if (tabToParam[tab]) {
      navigate(`/dashboard?tab=${tabToParam[tab]}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header avec navigation */}
      <div className="bg-white border-b border-gray-200">
        {/* <DashboardTabs tabs={dashboardTabsMenu} activeTab={activeTab} onTabChange={handleTabChange} /> */}
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Account Details Card */}
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Account details</h2>
            </div>

            <div className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <div className="font-bold text-gray-900">{formData.username}</div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="font-bold text-gray-900 bg-transparent focus:outline-none border-none p-0"
                />
              </div>

              {/* Change Password Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 underline">Change password</h3>
                
                {/* Current Password */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current password (leave blank to leave unchanged)
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswords.current ? "text" : "password"}
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('current')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {showPasswords.current ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New password (leave blank to leave unchanged)
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswords.new ? "text" : "password"}
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('new')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {showPasswords.new ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Confirm New Password */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm new password
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswords.confirm ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('confirm')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {showPasswords.confirm ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Changes Button */}
              <button
                onClick={handleSaveChanges}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
              >
                Save changes
              </button>
            </div>
          </div>

          {/* Account Type Card */}
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Account type</h2>
            </div>

            <div className="space-y-6">
              <div className="text-gray-700">
                Your current account type is <span className="font-bold">Customer.</span>
              </div>

              <button
                onClick={handleSwitchToOwner}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-md transition-colors duration-200"
              >
                Switch to Property owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;