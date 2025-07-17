import React from "react";

const ContactTab = ({ actions }) => (
  <>
    <div className="w-full bg-gray-50 flex flex-wrap justify-center gap-2 md:gap-4 py-6 px-2 md:px-8">
      {actions.map((action, idx) => (
        <button key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 font-medium text-sm shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={action.icon} />
          </svg>
          {action.label}
        </button>
      ))}
    </div>
    <div className="p-6 text-gray-700">Contact content: contact form, phone, etc.</div>
  </>
);

export default ContactTab; 