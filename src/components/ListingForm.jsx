import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import CustomerRestriction from "./CustomerRestriction";
import 'react-quill/dist/quill.snow.css';
import QuillEditor from "./QuillEditor";
import ImageUpload from "./ImageUpload";
import LocationPicker from "./LocationPicker";

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
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState("general");
  const sectionRefs = useRef({});
  const navRef = useRef();
  const quillRef = useRef();
  const [form, setForm] = useState({});
  const [status, setStatus] = useState("");
  const [coverImage, setCoverImage] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [description, setDescription] = useState('');

  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const [locations, setLocations] = useState([]);


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

  // Si l'utilisateur est connecté mais a le rôle "customer", afficher la restriction
  if (user && user.role === "customer") {
    return <CustomerRestriction />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-2">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Your listing details</h1>
      <div className="flex w-full max-w-4xl mx-auto gap-12 justify-start"> {/* Conteneur centré, largeur réduite */}
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
        <form className="flex-1 flex flex-col gap-6 max-w-xl" onSubmit={handleSubmit}> {/* Formulaire compact */}
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
                    <label className="font-medium">
                      Description
                      <QuillEditor
                        ref={quillRef}
                        readOnly={readOnly}
                        onSelectionChange={setRange}
                        onTextChange={setLastChange}
                    />
                    </label>
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
                    <label className="font-medium mb-2">Region <span className="text-gray-500">(optional)</span>
                      <select className="block w-full bg-gray-50 border border-gray-200 rounded px-4 py-2 mt-2 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-200 appearance-none" defaultValue="">
                        <option value="" disabled>Select an option</option>
                        <option value="paris">Paris</option>
                        <option value="lyon">Lyon</option>
                        <option value="marseille">Marseille</option>
                        <option value="bordeaux">Bordeaux</option>
                        <option value="autre">Autre</option>
                      </select>
                    </label>
                    <label className="font-medium mt-4">Location
                      {locations.map((loc, idx) => (
                        <LocationPicker
                          key={idx}
                          value={loc}
                          onChange={val => setLocations(locations.map((l, i) => i === idx ? val : l))}
                          onRemove={() => setLocations(locations.filter((_, i) => i !== idx))}
                        />
                      ))}
                      <button
                        type="button"
                        className={`block w-full bg-gray-100 border border-gray-200 rounded px-4 py-2 mt-4 text-base text-gray-500 text-center transition ${locations.length >= 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-200'}`}
                        onClick={() => locations.length < 1 && setLocations([...locations, {}])}
                        disabled={locations.length >= 1}
                      >
                        Add Location
                      </button>
                    </label>
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
            <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2">
              <span>Submit listing</span>
            </button>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <button type="button" onClick={handlePreview} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2">
                <span>Preview</span>
              </button>
              <button type="button" onClick={handleDraft} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2">
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