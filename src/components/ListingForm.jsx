import React, { useRef, useState, useEffect } from "react";

const sections = [
  { id: "general", label: "General" },
  { id: "images", label: "Images" },
  { id: "contact", label: "Contact Information" },
  { id: "rent", label: "Rent details" },
  { id: "location", label: "Location" },
  { id: "pricing", label: "Pricing" },
];

const inputClass =
  "block w-full bg-transparent border-0 border-b border-b-2 border-gray-200 focus:border-b-red-500 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:ring-0 text-base py-2 transition placeholder-gray-400 outline-none shadow-none";

const ListingForm = () => {
  const [activeSection, setActiveSection] = useState("general");
  const sectionRefs = useRef({});
  const navRef = useRef();
  const [form, setForm] = useState({});
  const [status, setStatus] = useState("");

  // Scrollspy: détecte la section visible
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(s => {
        const el = sectionRefs.current[s.id];
        return el ? Math.abs(el.getBoundingClientRect().top - 120) : Infinity;
      });
      const minIdx = offsets.indexOf(Math.min(...offsets));
      setActiveSection(sections[minIdx].id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll vers une section
  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Gestion des boutons dynamiques
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitted");
    alert("Listing submitted!");
  };
  const handleDraft = () => {
    setStatus("draft");
    alert("Listing saved as draft!");
  };
  const handlePreview = () => {
    setStatus("preview");
    alert("Preview mode!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-2">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Your listing details</h1>
      <div className="flex w-full max-w-6xl gap-8">
        {/* Navigation gauche */}
        <nav ref={navRef} className="hidden md:flex flex-col gap-2 w-48 pt-4 sticky top-24 h-fit">
          {sections.map(s => (
            <button
              key={s.id}
              className={`text-left px-4 py-2 rounded transition font-semibold ${activeSection === s.id ? "bg-red-100 text-red-600 shadow" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => scrollToSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
        {/* Formulaire principal */}
        <form className="flex-1 flex flex-col gap-8" onSubmit={handleSubmit}>
          {sections.map(s => (
            <section
              key={s.id}
              id={s.id}
              ref={el => sectionRefs.current[s.id] = el}
              className="bg-white rounded-lg shadow p-8 mb-2"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                {/* Icône placeholder */}
                <span className="inline-block w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  {s.label[0]}
                </span>
                {s.label}
              </h2>
              {/* Champs dynamiques selon la section */}
              <div className="flex flex-col gap-4">
                {s.id === "general" && (
                  <>
                    <label className="font-semibold">Title<input className={inputClass} type="text" placeholder="Title" /></label>
                    <label className="font-semibold">Tagline<input className={inputClass} type="text" placeholder="Tagline" /></label>
                    <label className="font-semibold">Description<textarea className={inputClass + " resize-none min-h-[80px]"} placeholder="Description" /></label>
                  </>
                )}
                {s.id === "images" && (
                  <>
                    <label className="font-semibold">Cover Image (optional)<input type="file" className="block w-full border rounded p-2 mt-1" /></label>
                    <label className="font-semibold">Gallery Images (optional)<input type="file" multiple className="block w-full border rounded p-2 mt-1" /></label>
                  </>
                )}
                {s.id === "contact" && (
                  <>
                    <label className="font-semibold">Contact Email<input className={inputClass} type="email" placeholder="Email" /></label>
                    <label className="font-semibold">Phone Number (optional)<input className={inputClass} type="text" placeholder="Phone number" /></label>
                  </>
                )}
                {s.id === "rent" && (
                  <>
                    <label className="font-semibold">Category<div className="flex gap-4 mt-1"><label><input type="checkbox" /> Apartment</label><label><input type="checkbox" /> House</label><label><input type="checkbox" /> Office</label><label><input type="checkbox" /> Room</label></div></label>
                    <label className="font-semibold">Amenities (optional)<input className={inputClass} type="text" placeholder="Amenities" /></label>
                    <label className="font-semibold">Area (optional)<input className={inputClass} type="number" placeholder="Area" /></label>
                    <label className="font-semibold">Rooms (optional)<input className={inputClass} type="number" placeholder="Rooms" /></label>
                    <label className="font-semibold">Beds (optional)<input className={inputClass} type="number" placeholder="Beds" /></label>
                    <label className="font-semibold">Bathrooms (optional)<input className={inputClass} type="number" placeholder="Bathrooms" /></label>
                  </>
                )}
                {s.id === "location" && (
                  <>
                    <label className="font-semibold">Region (optional)<input className={inputClass} type="text" placeholder="Region" /></label>
                    <label className="font-semibold">Location<input className={inputClass} type="text" placeholder="Location" /></label>
                    <div className="mt-2">Map placeholder</div>
                  </>
                )}
                {s.id === "pricing" && (
                  <>
                    <label className="font-semibold">Sale price (optional)<input className={inputClass} type="number" placeholder="0" /></label>
                  </>
                )}
              </div>
            </section>
          ))}
          {/* Boutons dynamiques */}
          <div className="flex flex-col gap-4 mt-8">
            <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2">
              <span>Submit listing</span>
            </button>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <button type="button" onClick={handlePreview} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2">
                <span>Preview</span>
              </button>
              <button type="button" onClick={handleDraft} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2">
                <span>Save as draft</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListingForm; 