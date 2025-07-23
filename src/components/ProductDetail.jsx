import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const products = [
  {
    name: "Advanced",
    price: "230.000BIF",
    image: null,
    category: "Uncategorized",
  },
  {
    name: "Basic",
    price: "100.000BIF",
    image: null,
    category: "Uncategorized",
  },
  {
    name: "Premium",
    price: "180.000BIF",
    image: null,
    category: "Uncategorized",
  },
];

const ProductDetail = () => {
  const { productName } = useParams();
  const [currentProduct, setCurrentProduct] = useState(() => products.find(p => p.name.toLowerCase() === productName.toLowerCase()));
  const [activeTab, setActiveTab] = useState('description');

  // Récupérer user du localStorage
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch {}

  const [review, setReview] = useState({
    rating: 0,
    text: '',
    name: user?.name || '',
    email: user?.email || '',
    save: false,
  });

  // Mettre à jour le produit et reset le tab à chaque changement d'URL
  useEffect(() => {
    setCurrentProduct(products.find(p => p.name.toLowerCase() === productName.toLowerCase()));
    setActiveTab('description');
  }, [productName]);

  if (!currentProduct) {
    return <div className="text-center py-20 text-xl">Product not found.</div>;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6 items-start">
        {/* Image */}
        <div className="flex-1 max-w-xl w-full bg-white rounded-xl shadow p-4 flex items-center justify-center mx-auto mb-4 md:mb-0">
          <div className="w-full aspect-square bg-red-400 flex items-center justify-center rounded">
            <svg className="w-56 h-56 md:w-72 md:h-72 text-white" fill="none" stroke="currentColor" viewBox="0 0 64 64"><circle cx="32" cy="24" r="10" strokeWidth="4" /><path d="M32 34v14" strokeWidth="4" /><path d="M22 48h20" strokeWidth="4" /><path d="M32 34l-8 8h16l-8-8z" strokeWidth="4" /><path d="M32 14v-4" strokeWidth="4" /><path d="M32 58c14-10 20-18 20-28A20 20 0 0 0 12 30c0 10 6 18 20 28z" strokeWidth="4" /></svg>
          </div>
        </div>
        {/* Infos */}
        <div className="flex-1 max-w-xl w-full bg-white rounded-xl shadow p-8 flex flex-col items-center mx-auto">
           <div className="text-2xl font-bold mb-2 text-center">{currentProduct.name}</div>
          {/*<div className="text-lg text-gray-700 mb-4 text-center">{product.price}</div>
           <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded mb-4 w-47 justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
            Add to cart
          </button> 
          <div className="w-full flex justify-center mt-4">
            <span className="inline-block border border-gray-300 rounded px-4 py-2 text-gray-700 text-sm">{product.category}</span>
          </div>
          */}
          {/* Bloc tabs Description/Reviews intégré ici */}
          <div className="w-full mt-2">
            <div className="flex gap-8 border-b border-gray-200 mb-4">
              <button onClick={() => setActiveTab('description')} className={`pb-2 font-semibold focus:outline-none ${activeTab === 'description' ? 'border-b-2 border-red-500 text-black' : 'text-gray-500'}`}>Description</button>
              <button onClick={() => setActiveTab('reviews')} className={`pb-2 font-semibold focus:outline-none ${activeTab === 'reviews' ? 'border-b-2 border-red-500 text-black' : 'text-gray-500'}`}>Reviews (0)</button>
            </div>
            {activeTab === 'description' && (
              <div>
                <div className="font-bold mb-2">Description</div>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Five listing submissions</li>
                  <li>180 days expiration</li>
                  <li>Submit your business</li>
                  <li>Create events</li>
                  <li>Rent real estate</li>
                </ul>
              </div>
            )}
            {activeTab === 'reviews' && (
              <form className="space-y-6 mt-2">
                <div className="font-bold mb-2">Reviews</div>
                <div className="text-gray-600 mb-2">There are no reviews yet.</div>
                <div className="font-semibold mb-2">Be the first to review “{currentProduct.name}”</div>
                <div>
                  <label className="block mb-1 font-medium">Your rating <span className="text-red-500">*</span></label>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <button type="button" key={star} onClick={() => setReview(r => ({...r, rating: star}))} className="focus:outline-none">
                        <svg className={`w-7 h-7 ${review.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Your review <span className="text-red-500">*</span></label>
                  <textarea className="w-full border-0 border-b border-gray-300 focus:border-red-500 rounded-none shadow-none p-0 min-h-[80px] focus:ring-0 focus:outline-none" value={review.text} onChange={e => setReview(r => ({...r, text: e.target.value}))} required />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Name <span className="text-red-500">*</span></label>
                  <input className="w-full border-0 border-b border-gray-300 focus:border-red-500 rounded-none shadow-none p-0 focus:ring-0 focus:outline-none" value={review.name} onChange={e => setReview(r => ({...r, name: e.target.value}))} required />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email <span className="text-red-500">*</span></label>
                  <input className="w-full border-0 border-b border-gray-300 focus:border-red-500 rounded-none shadow-none p-0 focus:ring-0 focus:outline-none" value={review.email} onChange={e => setReview(r => ({...r, email: e.target.value}))} required type="email" />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="save" checked={review.save} onChange={e => setReview(r => ({...r, save: e.target.checked}))} />
                  <label htmlFor="save" className="text-gray-700 text-sm">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
                <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded text-lg">Submit</button>
              </form>
            )}
          </div>
          
        </div>
      </div>
      {/* Related products */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="font-bold text-lg mb-4">Related products</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {products.filter(p => p.name !== currentProduct.name).map((prod, i) => (
            <Link key={prod.name} to={`/shop/${prod.name}`} className="bg-white rounded-lg shadow flex flex-col items-center p-6 hover:shadow-lg transition cursor-pointer">
              <div className="w-full aspect-square bg-red-400 flex items-center justify-center rounded mb-4">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 64 64"><circle cx="32" cy="24" r="10" strokeWidth="4" /><path d="M32 34v14" strokeWidth="4" /><path d="M22 48h20" strokeWidth="4" /><path d="M32 34l-8 8h16l-8-8z" strokeWidth="4" /><path d="M32 14v-4" strokeWidth="4" /><path d="M32 58c14-10 20-18 20-28A20 20 0 0 0 12 30c0 10 6 18 20 28z" strokeWidth="4" /></svg>
              </div>
              <div className="w-full flex flex-col items-start">
                <div className="font-bold text-lg mb-1">{prod.name}</div>
                <div className="text-gray-500 mb-2">{prod.price}</div>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-800 mt-2 hover:underline" tabIndex={-1} onClick={e => e.preventDefault()}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
                  Add to cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail; 