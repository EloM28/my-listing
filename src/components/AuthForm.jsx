import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AuthForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isRegister = location.pathname === "/register";

  // Champs communs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Champs inscription
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("customer");
  // Affichage du mot de passe
  const [showPassword, setShowPassword] = useState(false);
  // Erreur (exemple)
  const [error, setError] = useState("");

  // Champs supplémentaires pour owner
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicError, setProfilePicError] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [newSocial, setNewSocial] = useState("");

  // Gestion upload image
  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 1024 * 1024) {
      setProfilePicError("Maximum file size: 1 MB.");
      setProfilePic(null);
    } else {
      setProfilePicError("");
      setProfilePic(file);
    }
  };

  const SOCIAL_OPTIONS = [
    { label: "Facebook", value: "facebook" },
    { label: "X", value: "x" },
    { label: "Instagram", value: "instagram" },
    { label: "YouTube", value: "youtube" },
    { label: "Snapchat", value: "snapchat" },
    { label: "Facebook", value: "facebook" },
    { label: "X", value: "x" },
    { label: "Instagram", value: "instagram" },
    { label: "YouTube", value: "youtube" },
    { label: "Snapchat", value: "snapchat" },
  ];

  const [showAddSocial, setShowAddSocial] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [socialUrl, setSocialUrl] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = React.useRef();

  // Fermer le dropdown si clic en dehors
  React.useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  // Ajout d'un réseau social
  const handleAddSocial = () => {
    if (selectedNetwork && socialUrl.trim()) {
      setSocialLinks([...socialLinks, { network: selectedNetwork, url: socialUrl.trim() }]);
      setSelectedNetwork("");
      setSocialUrl("");
      setShowAddSocial(false);
    }
  };

  // Suppression d'un réseau social
  const handleRemoveSocial = (idx) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("Invalid data");
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative">
        <div className="flex gap-2 mb-8 text-2xl font-bold justify-center">
          <Link
            to="/signin"
            className={`transition-colors duration-200 ${!isRegister ? "text-gray-900" : "text-gray-400"}`}
          >
            Sign in
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            to="/register"
            className={`transition-colors duration-200 ${isRegister ? "text-gray-900" : "text-gray-400"}`}
          >
            Register
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isRegister && (
            <div className="mb-2">
              <label className="block text-sm text-gray-700 mb-1">Choose role</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    checked={role === "customer"}
                    onChange={() => setRole("customer")}
                    className="accent-red-500"
                  />
                  <span className="font-semibold">Customer</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="owner"
                    checked={role === "owner"}
                    onChange={() => setRole("owner")}
                    className="accent-red-500"
                  />
                  <span className="font-semibold">Property owner</span>
                </label>
              </div>
            </div>
          )}
          {/* Formulaire spécifique pour owner */}
          {isRegister && role === "owner" && (
            <>
              <div>
                <label className="block text-sm text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
                  required
                />
              </div>
              <div className="relative">
                <label className="block text-sm text-gray-700 mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 outline-none bg-transparent pr-8"
                  required
                />
                <span
                  className="absolute right-2 top-8 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(s => !s)}
                  title={showPassword ? "Hide" : "Show"}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7z" /></svg>
                </span>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Profile Picture</label>
                <div className="flex items-start gap-3">
                  {/* Zone d'upload toujours visible */}
                  <label className="w-24 h-24 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer rounded-md">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m-6-6h.01" /></svg>
                    <span className="text-xs text-gray-400">Upload</span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleProfilePic} />
                  </label>
                  {/* Image uploadée avec bouton suppression */}
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
                {profilePicError && <span className="text-xs text-red-500 block">{profilePicError}</span>}
              </div>
              <div>
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
                      {/* <label className="block font-semibold mb-1">Select Network</label> */}
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
            </>
          )}
          {/* Formulaire simple pour customer ou sign in */}
          {(!isRegister || role === "customer") && (
            <>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
                  required
                />
              </div>
              {isRegister && (
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 outline-none bg-transparent"
                    required
                  />
                </div>
              )}
              <div className="relative">
                <label className="block text-sm text-gray-700 mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 outline-none bg-transparent pr-8"
                  required
                />
                <span
                  className="absolute right-2 top-8 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(s => !s)}
                  title={showPassword ? "Hide" : "Show"}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7z" /></svg>
                </span>
              </div>
            </>
          )}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold text-lg px-6 py-3 rounded transition-colors duration-200 w-full flex items-center justify-center gap-2 mt-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" /></svg>
            {isRegister ? "Sign Up" : "Sign in"}
          </button>
          {!isRegister && (
            <div className="flex items-center mt-2">
              <input type="checkbox" className="accent-red-500 mr-2" id="remember" />
              <label htmlFor="remember" className="text-gray-700 text-sm">Remember me</label>
            </div>
          )}
          {!isRegister && (
            <div className="flex items-center mt-4">
              <span className="text-gray-400 mr-2">
                <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0V4m0 7v7" /></svg>
              </span>
              <Link to="/forgot-password" className="text-gray-400 text-sm hover:underline hover:text-red-500 transition-colors">Forgot password?</Link>
            </div>
          )}
          {error && (
            <div className="absolute bottom-2 right-2 bg-white border border-red-300 text-red-500 px-4 py-2 rounded shadow-md text-sm">
              ERROR for demo: <br />{error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
