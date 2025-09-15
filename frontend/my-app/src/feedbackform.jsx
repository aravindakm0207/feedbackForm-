import React, { useState } from 'react';
import axios from 'axios';
import Rectangle1 from './assets/Rectangle1.png';
import Rectangle2 from './assets/Rectangle2.png';
import { FaStar } from 'react-icons/fa';

const FeedbackForm = () => {
  const [visitFrequency, setVisitFrequency] = useState('Regularly');
  const [foodRating, setFoodRating] = useState(3);
  const [serviceRating, setServiceRating] = useState(4);
  const [overallRating, setOverallRating] = useState(4);
  const [recommend, setRecommend] = useState(true);
  const [suggestions, setSuggestions] = useState('');
  const [personalFollowUp, setPersonalFollowUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  const handleStarClick = (rating, setRating) => {
    setRating(rating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setServerMessage('');

    try {
      const response = await axios.post("http://localhost:5000/feedback", {
        visitFrequency,
        qualityOfFood: foodRating,
        serviceQuality: serviceRating,
        overallExperience: overallRating,
        recommend,
        suggestions,
        followUp: personalFollowUp
      });

      setServerMessage(response.data.message);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setServerMessage("Error submitting feedback. Please try again.");
      setLoading(false);
    }
  };

  const renderStars = (rating, setRating, maxStars = 5) => (
    <div className="flex space-x-1">
      {[...Array(maxStars)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => handleStarClick(index + 1, setRating)}
          className={`text-2xl cursor-pointer ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          } hover:text-yellow-400 transition-colors`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
     
      <div className="w-[200px] h-[96px] mt-6 rounded-lg overflow-hidden mx-auto">
        <img src={Rectangle1} alt="Uniwell Logo" className="w-full h-full object-contain" />
      </div>

      <div className="w-full mt-24 overflow-hidden rounded-bl-lg rounded-br-lg">
        <img src={Rectangle2} alt="Cafe Interior" className="w-full h-[160px] object-cover" />
      </div>

     
      <form onSubmit={handleSubmit} className="w-full px-4 pb-4 space-y-6 max-w-[393px] mx-auto">
       
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">HOW OFTEN DO YOU VISIT HERE?</label>
          <select
            value={visitFrequency}
            onChange={(e) => setVisitFrequency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm bg-white"
          >
            <option>Regularly</option>
            <option>Sometimes</option>
            <option>First Time</option>
          </select>
        </div>

       
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">QUALITY OF THE FOOD</label>
          {renderStars(foodRating, setFoodRating)}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SERVICE QUALITY</label>
          {renderStars(serviceRating, setServiceRating)}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">OVERALL EXPERIENCE</label>
          {renderStars(overallRating, setOverallRating)}
        </div>

     
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">WOULD YOU RECOMMEND OUR RESTAURANT?</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                checked={recommend}
                onChange={() => setRecommend(true)}
              />
              <span>YES</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                checked={!recommend}
                onChange={() => setRecommend(false)}
              />
              <span>NO</span>
            </label>
          </div>
        </div>

      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">YOUR SUGGESTIONS</label>
          <textarea
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={personalFollowUp}
            onChange={(e) => setPersonalFollowUp(e.target.checked)}
          />
          <label className="text-sm">RECEIVE PERSONAL FOLLOW UP</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          {loading ? "Submitting..." : "SUBMIT FEEDBACK"}
        </button>

        {/* Server Response */}
        {serverMessage && (
          <p className="text-center text-sm mt-2 text-gray-700">{serverMessage}</p>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
