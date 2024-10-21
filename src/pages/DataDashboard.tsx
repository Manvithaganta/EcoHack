import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DataDashboard: React.FC = () => {
  // Mock data for the charts
  const co2Data = [
    { year: '2015', ppm: 400.83 },
    { year: '2016', ppm: 404.24 },
    { year: '2017', ppm: 406.55 },
    { year: '2018', ppm: 408.52 },
    { year: '2019', ppm: 411.44 },
    { year: '2020', ppm: 414.24 },
    { year: '2021', ppm: 416.45 },
    { year: '2022', ppm: 418.56 },
    { year: '2023', ppm: 420.78 },
  ];

  const temperatureData = [
    { year: '2015', temp: 0.90 },
    { year: '2016', temp: 0.99 },
    { year: '2017', temp: 0.92 },
    { year: '2018', temp: 0.85 },
    { year: '2019', temp: 0.98 },
    { year: '2020', temp: 1.02 },
    { year: '2021', temp: 0.84 },
    { year: '2022', temp: 0.89 },
    { year: '2023', temp: 1.15 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Environmental Data Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Global CO2 Levels</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={co2Data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ppm" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        <p className="mt-4 text-gray-600">
          This chart shows the annual average atmospheric CO2 concentration measured in parts per million (ppm).
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Global Temperature Anomalies</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temp" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        <p className="mt-4 text-gray-600">
          This chart displays global temperature anomalies in °C relative to the 1951-1980 average.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Current CO2 Level</h3>
          <p className="text-4xl font-bold text-green-600">420.78 ppm</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: March 2024</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Global Temperature Increase</h3>
          <p className="text-4xl font-bold text-green-600">1.15°C</p>
          <p className="text-sm text-gray-500 mt-2">Above pre-industrial levels</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Environmental Indicators</h2>
        <ul className="space-y-2">
          <li><strong>Sea Level Rise:</strong> 3.4 mm per year</li>
          <li><strong>Arctic Sea Ice Extent:</strong> Declining at a rate of 13.1% per decade</li>
          <li><strong>Greenland Ice Mass:</strong> Losing approximately 279 billion tons of ice per year</li>
          <li><strong>Antarctic Ice Mass:</strong> Losing approximately 148 billion tons of ice per year</li>
          <li><strong>Ocean Acidification:</strong> pH decreased by 0.1 units since the pre-industrial era</li>
        </ul>
      </div>
    </div>
  );
};

export default DataDashboard;