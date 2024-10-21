import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const [carbonFootprintReduced, setCarbonFootprintReduced] = useState(0);
  const [co2Saved, setCo2Saved] = useState(0);
  const [bottlesSaved, setBottlesSaved] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarbonFootprintReduced(prev => prev + Math.floor(Math.random() * 5));
      setCo2Saved(prev => prev + Math.floor(Math.random() * 10));
      setBottlesSaved(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="Landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Join the Movement for a Greener Future</h1>
          <p className="text-xl mb-8">Together, we can make a difference.</p>
          <Link to="/carbon-footprint" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
            Take Action Now
          </Link>
        </div>
      </section>

      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Our Global Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Users Reducing Carbon Footprint</h3>
              <p className="text-4xl font-bold text-green-600">{carbonFootprintReduced.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-2">CO2 Saved Globally (tons)</h3>
              <p className="text-4xl font-bold text-green-600">{co2Saved.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Plastic Bottles Saved</h3>
              <p className="text-4xl font-bold text-green-600">{bottlesSaved.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Interactive Learning', description: 'Explore our virtual environment to understand global sustainability challenges.', link: '/resources' },
          { title: 'Real-time Data', description: 'View live environmental statistics on our interactive dashboard.', link: '/data-dashboard' },
          { title: 'Community Forum', description: 'Join discussions and collaborate with like-minded individuals.', link: '/resources' },
          { title: 'Mobile Friendly', description: 'Access our resources on any device, anywhere.', link: '/' },
          { title: 'Upcoming Events', description: 'Participate in webinars, workshops, and community clean-ups.', link: '/events' },
          { title: 'Social Impact', description: 'Share your sustainability journey and inspire others.', link: '/carbon-footprint' },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <Link to={item.link} className="text-green-600 font-medium flex items-center hover:text-green-700">
              Learn More <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        ))}
      </section>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="Clean Landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Your Actions Matter</h2>
          <p className="text-xl mb-8">Every small step contributes to a bigger change.</p>
          <Link to="/carbon-footprint" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
            Calculate Your Impact
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;