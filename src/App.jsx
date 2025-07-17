import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CategoryFilter from './components/CategoryFilter';
import RecentListings from './components/RecentListings';
import ListingPage from './components/ListingPage';
import ListingSaleGrid from './components/ListingSaleGrid';
import RentList from './components/RentList';
import FooterSection from "./components/FooterSection";
import AuthForm from './components/AuthForm';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import ExplorePage from './components/ExplorePage';
import RentSale from './components/RentSale';
import 'mapbox-gl/dist/mapbox-gl.css';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
      <Navbar />
        <Routes>
          <Route path="/" element={
            <>
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
          <Route path="/rentsale" element={<RentSale />} />
          <Route path="/rentlist" element={<RentList />} />
          <Route path="/signin" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
       <FooterSection />
      </div>
    </Router>
  );
}

export default App
