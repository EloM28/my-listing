import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SearchBox from './components/SearchBox'
import CategoryFilter from './components/CategoryFilter';
import RecentListings from './components/RecentListings';
import ListingPage from './components/ListingPage';
import ListingSaleGrid from './components/ListingSaleGrid';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={
            <>
            <Navbar />
            <div className="relative">
              <HeroSection />
            </div>
            <div className="pt-2">
              <CategoryFilter />
              <RecentListings />
              <ListingSaleGrid />
            </div>
            </>
            
          } />
          <Route path="/ListingPage" element={<ListingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
