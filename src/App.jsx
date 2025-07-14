import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SearchBox from './components/SearchBox'
import CategoryFilter from './components/CategoryFilter';
import RecentListings from './components/RecentListings';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative">
        <HeroSection />
        {/* <div className="absolute left-0 right-0 flex justify-center" style={{top: '320px'}}>
          <SearchBox />
        </div> */}
      </div>
      <div className="pt-2">
        <CategoryFilter />
        <RecentListings />
      </div>
    </div>
  );
}

export default App
