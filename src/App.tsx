import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarbonFootprint from './pages/CarbonFootprint';
import DataDashboard from './pages/DataDashboard';
import Resources from './pages/Resources';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-green-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carbon-footprint" element={<CarbonFootprint />} />
            <Route path="/data-dashboard" element={<DataDashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;