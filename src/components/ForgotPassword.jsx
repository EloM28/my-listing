import React, { useState } from "react";

const USERS = [
  { username: "alice", email: "alice@mail.com" },
  { username: "bob", email: "bob@mail.com" },
  { username: "charlie", email: "charlie@mail.com" },
  { username: "demo", email: "demo@demo.com" },
];

const ForgotPassword = () => {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier si la valeur correspond à un username ou email du tableau
    const found = USERS.some(
      user => user.username.toLowerCase() === value.toLowerCase() || user.email.toLowerCase() === value.toLowerCase()
    );
    if (!found) {
      setError("Invalid username or email.");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <span className="bg-red-500 rounded-full p-3 mb-2">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0V4m0 7v7" /></svg>
          </span>
          <h2 className="text-lg font-bold text-gray-900">Reset your password</h2>
        </div>
        {error && (
          <div className="w-full flex items-center border border-red-600 rounded bg-white px-4 py-2 mb-4">
            <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-gray-800 text-sm">{error}</span>
          </div>
        )}
        {submitted ? (
          <>
            <div className="w-full flex items-center border border-green-600 rounded bg-white px-4 py-2 mb-4">
              <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="text-gray-800 text-sm">Password reset email has been sent.</span>
            </div>
            <p className="text-gray-700 text-sm text-center">
              A password reset email has been sent to the email address on file for your account, but may take several minutes to show up in your inbox. Please wait at least 10 minutes before attempting another reset.
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-700 text-sm mb-6 text-center">
              Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
            </p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <div>
                <label className="block text-sm mb-1 text-gray-700">Username or email <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  className="w-full border border-gray-400 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-red-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold text-base py-3 rounded mt-2"
              >
                Reset password
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword; 