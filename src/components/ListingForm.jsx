import React, { useRef, useState, useEffect } from "react";

// Composant réutilisable pour upload d'image avec drag & drop et aperçu
function ImageUpload({ label, multiple = false, onChange, value }) {
  const [previews, setPreviews] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    // Si value change depuis l'extérieur, mettre à jour les previews
    if (value && value.length > 0) {
      setPreviews(value.map(f => URL.createObjectURL(f)));
    } else if (!value || value.length === 0) {
      setPreviews([]);
    }
    return () => previews.forEach(url => URL.revokeObjectURL(url));
  }, [value]);

  const handleDrop = (e) => {
    e.preventDefault();
    let files = Array.from(e.dataTransfer.files);
    if (!multiple) files = files.slice(0, 1);
    let newFiles = multiple ? [...(value || []), ...files] : files;
    onChange && onChange(newFiles);
  };
  const handleChange = (e) => {
    let files = Array.from(e.target.files);
    if (!multiple) files = files.slice(0, 1);
    let newFiles = multiple ? [...(value || []), ...files] : files;
    onChange && onChange(newFiles);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleRemove = (idx) => {
    let newFiles = (value || []).filter((_, i) => i !== idx);
    onChange && onChange(newFiles);
  };
  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium">{label}</span>
      <div className="flex flex-row gap-2 flex-wrap items-center">
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition w-24 h-24 min-w-[96px] min-h-[96px] relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => inputRef.current.click()}
        >
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 15V7a4 4 0 018 0v8" /></svg>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple={true}
            className="hidden"
            onChange={handleChange}
          />
        </div>
        {previews.length > 0 && (
          <div className="flex flex-row gap-2 flex-wrap items-center">
            {previews.map((src, i) => (
              <div key={i} className="relative group w-20 h-20">
                <img src={src} alt="preview" className="w-20 h-20 object-cover rounded border" />
                <button type="button" onClick={e => { e.stopPropagation(); handleRemove(i); }}
                  className="absolute top-1 right-1 bg-white bg-opacity-80 rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition group-hover:scale-110">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const sections = [
  { id: "general", label: "General" },
  { id: "images", label: "Images" },
  { id: "contact", label: "Contact Information" },
  { id: "rent", label: "Rent details" },
  { id: "location", label: "Location" },
  { id: "pricing", label: "Pricing" },
];

const inputClass = "block w-full bg-transparent border-0 border-b border-b-2 border-gray-200 focus:border-b-red-500 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:ring-0 text-base py-2 transition placeholder-gray-400 outline-none shadow-none";

const ListingForm = () => {
  const [activeSection, setActiveSection] = useState("general");
  const sectionRefs = useRef({});
  const navRef = useRef();
  const [form, setForm] = useState({});
  const [status, setStatus] = useState("");
  const [coverImage, setCoverImage] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

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
      <div className="flex w-full max-w-3xl gap-4"> {/* Réduit la largeur max */}
        {/* Navigation gauche */}
        <nav ref={navRef} className="hidden md:flex flex-col gap-2 w-40 pt-4 sticky top-24 h-fit">
          {sections.map(s => (
            <button
              key={s.id}
              className={`text-left px-4 py-2 rounded transition font-medium ${activeSection === s.id ? "bg-red-100 text-red-600 shadow" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => scrollToSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
        {/* Formulaire principal */}
        <form className="flex-1 flex flex-col gap-6" onSubmit={handleSubmit}> {/* gap réduit */}
          {sections.map(s => (
            <section
              key={s.id}
              id={s.id}
              ref={el => sectionRefs.current[s.id] = el}
              className="bg-white rounded-lg shadow p-6 mb-2" // padding réduit
            >
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                {/* Icône placeholder */}
                <span className=" w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  {s.label[0]}
                </span>
                {s.label}
              </h2>
              {/* Champs dynamiques selon la section */}
              <div className="flex flex-col gap-4">
                {s.id === "general" && (
                  <>
                    <label className="font-medium">Title<input className={inputClass} type="text" placeholder="Title" /></label>
                    <label className="font-medium">Tagline<input className={inputClass} type="text" placeholder="Tagline" /></label>
                    <label className="font-medium">Description<textarea className={inputClass + " resize-none min-h-[80px]"} placeholder="Description" /></label>
                  </>
                )}
                {s.id === "images" && (
                  <>
                    <ImageUpload label="Cover Image (optionnel)" multiple={true} onChange={setCoverImage} value={coverImage} />
                    <ImageUpload label="Gallery Images (optionnel)" multiple={true} onChange={setGalleryImages} value={galleryImages} />
                  </>
                )}
                {s.id === "contact" && (
                  <>
                    <label className="font-medium">Contact Email<input className={inputClass} type="email" placeholder="Email" /></label>
                    <label className="font-medium">Phone Number (optional)<input className={inputClass} type="text" placeholder="Phone number" /></label>
                  </>
                )}
                {s.id === "rent" && (
                  <>
                    <label className="font-medium">Category<div className="flex gap-4 mt-1"><label><input type="checkbox" /> Apartment</label><label><input type="checkbox" /> House</label><label><input type="checkbox" /> Office</label><label><input type="checkbox" /> Room</label></div></label>
                    <label className="font-medium">Amenities (optional)<input className={inputClass} type="text" placeholder="Amenities" /></label>
                    <label className="font-medium">Area (optional)<input className={inputClass} type="number" placeholder="Area" /></label>
                    <label className="font-medium">Rooms (optional)<input className={inputClass} type="number" placeholder="Rooms" /></label>
                    <label className="font-medium">Beds (optional)<input className={inputClass} type="number" placeholder="Beds" /></label>
                    <label className="font-medium">Bathrooms (optional)<input className={inputClass} type="number" placeholder="Bathrooms" /></label>
                  </>
                )}
                {s.id === "location" && (
                  <>
                    <label className="font-medium">Region (optional)<input className={inputClass} type="text" placeholder="Region" /></label>
                    <label className="font-medium">Location<input className={inputClass} type="text" placeholder="Location" /></label>
                    <div className="mt-2">Map placeholder</div>
                  </>
                )}
                {s.id === "pricing" && (
                  <>
                    <label className="font-medium">Sale price (optional)<input className={inputClass} type="number" placeholder="0" /></label>
                  </>
                )}
              </div>
            </section>
          ))}
          {/* Boutons dynamiques */}
          <div className="flex flex-col gap-4">
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