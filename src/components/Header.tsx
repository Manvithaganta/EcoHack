import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf size={32} />
          <span className="text-2xl font-bold">EcoHack</span>
        </Link>
        <nav>
          <ul className="flex space-x-2">
            <li><Link to="/" className="px-3 py-2 rounded-md hover:bg-green-700 transition duration-300">Home</Link></li>
            <li><Link to="/carbon-footprint" className="px-3 py-2 rounded-md hover:bg-green-700 transition duration-300">Carbon Footprint</Link></li>
            <li><Link to="/data-dashboard" className="px-3 py-2 rounded-md hover:bg-green-700 transition duration-300">Data Dashboard</Link></li>
            <li><Link to="/resources" className="px-3 py-2 rounded-md hover:bg-green-700 transition duration-300">Resources</Link></li>
            <li><Link to="/events" className="px-3 py-2 rounded-md hover:bg-green-700 transition duration-300">Events</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;