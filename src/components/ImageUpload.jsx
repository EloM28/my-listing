import { useState, useEffect, useRef } from "react";

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

export default ImageUpload;
