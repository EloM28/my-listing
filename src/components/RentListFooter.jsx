import React from "react";

const icons = [
  {
    href: "#",
    label: "Facebook",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg>
    )
  },
  {
    href: "#",
    label: "Twitter",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
    )
  },
  {
    href: "#",
    label: "Instagram",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    )
  },
  {
    href: "#",
    label: "YouTube",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.566a2.994 2.994 0 0 0-2.112 2.12C0 8.07 0 12 0 12s0 3.93.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    )
  }
];

const RentListFooter = () => (
  <footer className="w-full py-8 flex flex-col items-center gap-4 bg-white mt-12">
    <div className="flex gap-4 mb-2">
      {icons.map((icon, idx) => (
        <a key={idx} href={icon.href} aria-label={icon.label} className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition">
          {icon.svg}
        </a>
      ))}
    </div>
    <div className="text-gray-700 text-base flex items-center gap-1">
      <span>© Made with</span>
      <span className="text-red-500">♥</span>
      <span>by 27collective</span>
    </div>
  </footer>
);

export default RentListFooter; 