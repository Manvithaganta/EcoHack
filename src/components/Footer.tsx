import React from 'react';
import { Github, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">EcoHack</h3>
            <p className="text-sm">Empowering sustainability through technology and innovation.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/carbon-footprint" className="hover:text-green-300">Carbon Footprint Calculator</a></li>
              <li><a href="/data-dashboard" className="hover:text-green-300">Environmental Data Dashboard</a></li>
              <li><a href="/resources" className="hover:text-green-300">Sustainability Resources</a></li>
              <li><a href="/events" className="hover:text-green-300">Upcoming Events</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300"><Github size={24} /></a>
              <a href="#" className="hover:text-green-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-green-300"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 EcoHack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;