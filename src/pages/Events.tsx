import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: "Sustainable Living Workshop",
      date: "2024-04-15",
      time: "14:00 - 16:00",
      location: "Community Center, 123 Green St",
      description: "Learn practical tips for reducing your environmental impact in daily life.",
    },
    {
      title: "Beach Clean-up Day",
      date: "2024-04-22",
      time: "09:00 - 12:00",
      location: "Sunny Beach, Ocean Drive",
      description: "Join us for Earth Day as we clean up our local beach and protect marine life.",
    },
    {
      title: "Renewable Energy Symposium",
      date: "2024-05-10",
      time: "10:00 - 17:00",
      location: "City Convention Center",
      description: "Explore the latest advancements in renewable energy technologies with industry experts.",
    },
    {
      title: "Urban Gardening Workshop",
      date: "2024-05-18",
      time: "11:00 - 13:00",
      location: "Community Garden, 456 Bloom Ave",
      description: "Learn how to start your own urban garden and grow fresh produce at home.",
    },
    {
      title: "Eco-Friendly Transportation Fair",
      date: "2024-06-05",
      time: "12:00 - 18:00",
      location: "City Park",
      description: "Discover sustainable transportation options, from electric bikes to car-sharing services.",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Upcoming Events</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-green-700 mb-2">{event.title}</h2>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar size={18} className="mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <Clock size={18} className="mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={18} className="mr-2" />
              <span>{event.location}</span>
            </div>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
              Register
            </button>
          </div>
        ))}
      </div>

      <div className="bg-green-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Host Your Own Event</h2>
        <p className="text-gray-700 mb-4">
          Are you passionate about sustainability and want to make a difference in your community? Consider hosting your own event! Whether it's a local clean-up, a workshop, or an awareness campaign, every action counts.
        </p>
        <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
          Submit Event Proposal
        </button>
      </div>
    </div>
  );
};

export default Events;