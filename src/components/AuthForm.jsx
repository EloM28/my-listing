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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler une erreur pour la démo
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
                  <span>Property owner</span>
                </label>
              </div>
            </div>
          )}
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
              <span className="text-gray-400 text-sm">Forgot password?</span>
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
