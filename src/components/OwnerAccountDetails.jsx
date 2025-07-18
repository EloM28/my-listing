import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const OwnerAccountDetails = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    facebookUrl: "http://facebook.com"
  });
  const [socialLinks, setSocialLinks] = useState([
    { network: "facebook", url: formData.facebookUrl }
  ]);
  const [showAddSocial, setShowAddSocial] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [socialUrl, setSocialUrl] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = React.useRef();
  const [profilePic, setProfilePic] = useState(null); // Ajouté
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [isFacebookExpanded, setIsFacebookExpanded] = useState(false);
  const navigate = useNavigate();
  const { user: authUser } = useAuth();
  const SOCIAL_OPTIONS = [
    { label: "Facebook", value: "facebook" },
    { label: "X", value: "x" },
    { label: "Instagram", value: "instagram" },
    { label: "YouTube", value: "youtube" },
    { label: "Snapchat", value: "snapchat" },
    { label: "Tumblr", value: "tumblr" },
    { label: "Linkedin", value: "linkedin" },
    { label: "Reddit", value: "reddit" },
    { label: "Pinterest", value: "pinterest" },
    { label: "DeviantArt", value: "devianart" },
    { label: "Vkontakte", value: "vkontakte" },
    { label: "SoundCloud", value: "soundcloud" },
  ];

  useEffect(() => {
    if (!authUser) navigate('/signin');
    else {
      setUser(authUser);
      setFormData({
        firstName: authUser.name?.split(' ')[0] || "",
        lastName: authUser.name?.split(' ').slice(1).join(' ') || "",
        email: authUser.email || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        facebookUrl: "http://facebook.com"
      });
      setIsLoading(false);
    }
  }, [authUser, navigate]);

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
    console.log("Saving changes:", formData);
    alert("Changes saved successfully!");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 1024 * 1024) { // 1MB limit
      setProfilePic(file); // Ajouté
      console.log("Profile picture uploaded:", file.name);
    } else {
      alert("File size must be less than 1 MB");
    }
  };



  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  const handleAddSocial = () => {
    if (selectedNetwork && socialUrl.trim()) {
      setSocialLinks([...socialLinks, { network: selectedNetwork, url: socialUrl.trim() }]);
      setSelectedNetwork("");
      setSocialUrl("");
      setShowAddSocial(false);
    }
  };
  const handleRemoveSocial = (idx) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== idx));
  };

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
          {/* Account Details Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Account details</h2>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <label className="text-sm font-medium text-gray-700 min-w-[100px]">First Name:</label>
                <div className="font-bold text-gray-900">{formData.firstName}</div>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <label className="text-sm font-medium text-gray-700 min-w-[100px]">Last Name:</label>
                <div className="font-bold text-gray-900">{formData.lastName}</div>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <label className="text-sm font-medium text-gray-700 min-w-[100px]">Email:</label>
                <div className="font-bold text-gray-900">{formData.email}</div>
              </div>
            </div>
          </div>

          {/* Change Profile Picture Section */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Profile Picture</label>
            <div className="flex items-start gap-3">
              <label className="w-24 h-24 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer rounded-md">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m-6-6h.01" />
                </svg>
                <span className="text-xs text-gray-400">Upload</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
              </label>
              {/* Aperçu de l'image uploadée */}
              {profilePic && (
                <div className="relative w-20 h-20 flex-shrink-0">
                  <img src={URL.createObjectURL(profilePic)} alt="Preview" className="w-full h-full object-cover rounded-md" />
                  <button
                    type="button"
                    onClick={() => setProfilePic(null)}
                    className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow"
                    title="Remove"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-500 mt-1 block">Maximum file size: 1 MB.</span>
          </div>

          {/* Social Networks Section */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Social Networks</label>
            {/* Liste des réseaux déjà ajoutés */}
            {socialLinks.length > 0 && (
              <ul className="flex flex-col gap-1 mb-2">
                {socialLinks.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">{SOCIAL_OPTIONS.find(opt => opt.value === item.network)?.label || item.network}:</span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all flex-1">{item.url}</a>
                    <button type="button" onClick={() => handleRemoveSocial(idx)} className="text-red-500 text-xs">Remove</button>
                  </li>
                ))}
              </ul>
            )}
            {/* Affichage du bouton Add ou du formulaire d'ajout */}
            {!showAddSocial ? (
              <button
                type="button"
                onClick={() => setShowAddSocial(true)}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded text-base font-medium mb-2"
              >
                Add
              </button>
            ) : (
              <div className="flex flex-col gap-2 mb-2">
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    className="w-full border-b border-gray-300 py-2 outline-none bg-transparent appearance-none pr-8 flex items-center justify-between"
                    onClick={() => setDropdownOpen(o => !o)}
                  >
                    {selectedNetwork ? (SOCIAL_OPTIONS.find(opt => opt.value === selectedNetwork)?.label) : "Select Network"}
                    <span className="ml-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 right-0 bg-white border border-gray-200 rounded shadow-lg z-10 mt-1 max-h-52 overflow-y-auto" style={{maxHeight:'200px'}}>
                      {SOCIAL_OPTIONS.map(opt => (
                        <button
                          type="button"
                          key={opt.value}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedNetwork === opt.value ? 'font-bold bg-gray-50' : ''}`}
                          onClick={() => { setSelectedNetwork(opt.value); setDropdownOpen(false); }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative flex items-center">
                  <input
                    type="url"
                    value={socialUrl}
                    onChange={e => setSocialUrl(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
                    placeholder="Enter URL..."
                  />
                  <button
                    type="button"
                    onClick={() => { setShowAddSocial(false); setSelectedNetwork(""); setSocialUrl(""); }}
                    className="absolute left-1/2 -translate-x-1/2 bg-gray-100 rounded-full p-1 mt-9"
                    title="Cancel"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAddSocial}
                  className="w-full bg-gray-100 text-gray-700 py-3 mt-2 rounded text-base font-medium"
                  disabled={!selectedNetwork || !socialUrl.trim()}
                >
                  Add
                </button>
              </div>
            )}
          </div>

          {/* Change Password Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 underline">Change password</h3>
            
            <div className="space-y-4">
              {/* Current Password */}
              <div>
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
              <div>
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
              <div>
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
    </div>
  );
};

export default OwnerAccountDetails; 