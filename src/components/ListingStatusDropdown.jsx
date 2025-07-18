import React, { useState, useRef, useEffect } from "react";

/**
 * ListingStatusDropdown
 * @param {string} value - valeur sélectionnée
 * @param {function} onChange - callback(optionValue)
 * @param {Array<{label: string, value: string}>} options - options du menu
 */
const ListingStatusDropdown = ({ value, onChange, options }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative w-48" ref={dropdownRef}>
      <button
        type="button"
        className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
        onClick={() => setOpen(o => !o)}
      >
        <span>{selectedOption ? selectedOption.label : "Select..."}</span>
        <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-fade-in">
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              className={`w-full text-left px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 flex items-center justify-between transition-colors duration-100 ${value === opt.value ? 'bg-red-50 text-red-600 font-bold' : ''}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
            >
              <span>{opt.label}</span>
              {value === opt.value && (
                <svg className="w-4 h-4 text-red-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListingStatusDropdown; 