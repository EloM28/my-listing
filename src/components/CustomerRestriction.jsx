import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const CustomerRestriction = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleSwitchAccount = () => {
    // Déconnecter l'utilisateur actuel
    logout();
    // Rediriger vers la page de connexion
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <svg 
            className="w-16 h-16 mx-auto text-gray-400 mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Accès restreint
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Vous devez avoir un compte <strong>Property owner</strong> pour créer des annonces.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={handleSwitchAccount}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Changer de compte
          </button>
          
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Retour à l'accueil
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Les comptes "Customer" peuvent uniquement consulter les annonces. 
            Pour créer des annonces, vous devez vous inscrire en tant que "Property owner".
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerRestriction; 