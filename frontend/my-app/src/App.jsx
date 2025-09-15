import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import FeedbackForm from "./feedbackform";
import FeedbackDashboard from "./feedbackDashboardF";

export default function App() {

  return (
  <div>
    <h2>Job Portal</h2>
    <Link to="/">Home</Link> |
    <Link to="/list-jobs">List Jobs</Link> | 
    <Link to="/feedback-form">Feedback Form</Link> | 
    <Link to="/feedback-dashboard">Feedback Dashboard</Link> | 
    { !user.isLoggedIn ? (
      <>
        <Link to="/register">Register</Link> |
        <Link to="/login"> Login </Link> | 
      </>
    ) : (
      <>
        {conditionalLinks('/add-job', ['employer'])} |
        {conditionalLinks('/apply-job', ['jobseeker'])} |
        <Link to="/account">Account</Link> |
      </>
    )}

    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
    
      <Route path="/feedback-form" element={<FeedbackForm />} />
      <Route path="/feedback-dashboard" element={<FeedbackDashboard />} />
    </Routes>
  </div>
);
}