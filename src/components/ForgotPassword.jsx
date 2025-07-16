import React, { useState } from "react";

const ForgotPassword = () => {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <span className="bg-red-500 rounded-full p-3 mb-2">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0V4m0 7v7" /></svg>
          </span>
          <h2 className="text-lg font-bold text-gray-900">Lost your password?</h2>
        </div>
        <p className="text-gray-700 text-sm mb-6 text-center">
          Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
        </p>
        {submitted ? (
          <div className="text-green-600 text-center">If this account exists, a reset link has been sent.</div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default ForgotPassword; 