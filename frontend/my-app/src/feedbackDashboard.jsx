import React, { useEffect, useState } from "react";
import axios from "axios";

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch feedbacks from backend
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/feedbacks");
        setFeedbacks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-lg">Loading feedbacks...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">📊 Feedback Dashboard</h1>

      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-600">No feedbacks submitted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((fb) => (
            <div
              key={fb._id}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                {fb.visitFrequency} Visitor
              </h2>

              <div className="text-sm text-gray-600 space-y-1">
                <p> <span className="font-medium">Food Quality:</span> {fb.qualityOfFood}/5</p>
                <p> <span className="font-medium">Service Quality:</span> {fb.serviceQuality}/5</p>
                <p> <span className="font-medium">Overall Experience:</span> {fb.overallExperience}/5</p>
                <p> <span className="font-medium">Recommend:</span> {fb.recommend ? "Yes" : "No"}</p>
              </div>

              {fb.suggestions && (
                <p className="mt-3 text-sm text-gray-700">
                   <span className="font-medium">Suggestion:</span> {fb.suggestions}
                </p>
              )}

              <p className="mt-3 text-xs text-gray-500">
                 {new Date(fb.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackDashboard;
