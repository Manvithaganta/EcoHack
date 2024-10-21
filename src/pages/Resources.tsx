import React, { useState } from 'react';
import { Book, Video, MessageCircle } from 'lucide-react';

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState('articles');

  const articles = [
    { title: "The Importance of Renewable Energy", author: "Dr. Jane Smith", link: "#" },
    { title: "Sustainable Agriculture Practices", author: "John Doe", link: "#" },
    { title: "Ocean Conservation: Challenges and Solutions", author: "Maria Garcia", link: "#" },
    { title: "The Future of Electric Vehicles", author: "Alex Johnson", link: "#" },
    { title: "Reducing Plastic Waste in Daily Life", author: "Sarah Brown", link: "#" },
  ];

  const videos = [
    { title: "Understanding Climate Change", duration: "15:30", link: "#" },
    { title: "How to Start Composting at Home", duration: "8:45", link: "#" },
    { title: "The Impact of Fast Fashion on the Environment", duration: "20:15", link: "#" },
    { title: "Renewable Energy Technologies Explained", duration: "18:00", link: "#" },
    { title: "Sustainable City Design: Case Studies", duration: "25:10", link: "#" },
  ];

  const forumTopics = [
    { title: "Tips for reducing household energy consumption", replies: 23, views: 156 },
    { title: "Local community clean-up initiatives", replies: 15, views: 89 },
    { title: "Sustainable transportation options in urban areas", replies: 31, views: 203 },
    { title: "DIY eco-friendly product recipes", replies: 42, views: 278 },
    { title: "Discussing the latest IPCC report", replies: 56, views: 412 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Sustainability Resources</h1>

      <div className="flex space-x-4 border-b border-gray-200">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'articles' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveTab('articles')}
        >
          <Book className="inline-block mr-2" size={18} />
          Articles
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'videos' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveTab('videos')}
        >
          <Video className="inline-block mr-2" size={18} />
          Videos
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'forum' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveTab('forum')}
        >
          <MessageCircle className="inline-block mr-2" size={18} />
          Community Forum
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {activeTab === 'articles' && (
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Latest Articles</h2>
            <ul className="space-y-4">
              {articles.map((article, index) => (
                <li key={index} className="border-b border-gray-200 pb-2">
                  <a href={article.link} className="text-lg font-medium text-green-600 hover:text-green-800">{article.title}</a>
                  <p className="text-sm text-gray-500">By {article.author}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'videos' && (
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Educational Videos</h2>
            <ul className="space-y-4">
              {videos.map((video, index) => (
                <li key={index} className="border-b border-gray-200 pb-2">
                  <a href={video.link} className="text-lg font-medium text-green-600 hover:text-green-800">{video.title}</a>
                  <p className="text-sm text-gray-500">Duration: {video.duration}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'forum' && (
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Community Forum</h2>
            <ul className="space-y-4">
              {forumTopics.map((topic, index) => (
                <li key={index} className="border-b border-gray-200 pb-2">
                  <a href="#" className="text-lg font-medium text-green-600 hover:text-green-800">{topic.title}</a>
                  <p className="text-sm text-gray-500">{topic.replies} replies · {topic.views} views</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;