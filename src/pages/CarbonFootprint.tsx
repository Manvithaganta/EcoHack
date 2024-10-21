import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CarbonFootprint: React.FC = () => {
  const [formData, setFormData] = useState({
    transportation: '',
    energy: '',
    diet: '',
    consumption: '',
  });

  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateFootprint = () => {
    const { transportation, energy, diet, consumption } = formData;
    const total = (
      Number(transportation) * 0.5 +
      Number(energy) * 0.3 +
      Number(diet) * 0.1 +
      Number(consumption) * 0.1
    );
    setResult(Number(total.toFixed(2)));
  };

  const data = result ? [
    { name: 'Transportation', value: Number(formData.transportation) * 0.5 },
    { name: 'Energy', value: Number(formData.energy) * 0.3 },
    { name: 'Diet', value: Number(formData.diet) * 0.1 },
    { name: 'Consumption', value: Number(formData.consumption) * 0.1 },
  ] : [];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Carbon Footprint Calculator</h1>
      <form className="space-y-4 mb-8">
        <div>
          <label htmlFor="transportation" className="block text-sm font-medium text-gray-700">Transportation (miles/week)</label>
          <input
            type="number"
            id="transportation"
            name="transportation"
            value={formData.transportation}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="energy" className="block text-sm font-medium text-gray-700">Energy Usage (kWh/month)</label>
          <input
            type="number"
            id="energy"
            name="energy"
            value={formData.energy}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="diet" className="block text-sm font-medium text-gray-700">Diet (1-10, 10 being most meat-heavy)</label>
          <input
            type="number"
            id="diet"
            name="diet"
            min="1"
            max="10"
            value={formData.diet}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="consumption" className="block text-sm font-medium text-gray-700">Consumption ($ spent on goods/month)</label>
          <input
            type="number"
            id="consumption"
            name="consumption"
            value={formData.consumption}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <button
          type="button"
          onClick={calculateFootprint}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Calculate
        </button>
      </form>

      {result !== null && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Your Carbon Footprint</h2>
          <p className="text-lg mb-4">Your estimated carbon footprint is <span className="font-bold text-green-600">{result}</span> tons of CO2 per year.</p>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>

          <h3 className="text-xl font-semibold text-green-800 mt-6 mb-3">Recommendations</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Consider using public transportation or carpooling to reduce your transportation emissions.</li>
            <li>Switch to energy-efficient appliances and LED light bulbs to lower your energy consumption.</li>
            <li>Incorporate more plant-based meals into your diet to reduce your dietary carbon footprint.</li>
            <li>Practice mindful consumption by buying second-hand items and reducing overall purchases.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprint;