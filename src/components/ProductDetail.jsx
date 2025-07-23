import React from "react";
import { useParams } from "react-router-dom";

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
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

  if (!product) {
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
          <div className="text-2xl font-bold mb-2 text-center">{product.name}</div>
          <div className="text-lg text-gray-700 mb-4 text-center">{product.price}</div>
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded mb-4 w-47 justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
            Add to cart
          </button>
          <div className="w-full flex justify-center">
            <span className="inline-block border border-gray-300 rounded px-4 py-2 text-gray-700 text-sm">{product.category}</span>
          </div>
        </div>
      </div>
      {/* Onglets Description/Reviews */}
      <div className="max-w-5xl mx-auto mt-8 bg-white rounded-xl shadow p-6">
        <div className="flex gap-8 border-b border-gray-200 mb-4">
          <button className="pb-2 font-semibold border-b-2 border-red-500 text-black focus:outline-none">Description</button>
          <button className="pb-2 font-semibold text-gray-500 focus:outline-none">Reviews (0)</button>
        </div>
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
      </div>
      {/* Related products */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="font-bold text-lg mb-4">Related products</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[0,1].map(i => (
            <div key={i} className="bg-white rounded-lg shadow flex flex-col items-center p-6">
              <div className="w-full aspect-square bg-red-400 flex items-center justify-center rounded mb-4">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 64 64"><circle cx="32" cy="24" r="10" strokeWidth="4" /><path d="M32 34v14" strokeWidth="4" /><path d="M22 48h20" strokeWidth="4" /><path d="M32 34l-8 8h16l-8-8z" strokeWidth="4" /><path d="M32 14v-4" strokeWidth="4" /><path d="M32 58c14-10 20-18 20-28A20 20 0 0 0 12 30c0 10 6 18 20 28z" strokeWidth="4" /></svg>
              </div>
              <div className="w-full flex flex-col items-start">
                <div className="font-bold text-lg mb-1">{products[i+1]?.name || 'Product'}</div>
                <div className="text-gray-500 mb-2">{products[i+1]?.price || '---'}</div>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-800 mt-2 hover:underline">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail; 