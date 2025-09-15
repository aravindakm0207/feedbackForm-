
/*
const Feedback = require('../models/feedback-model');
const { validationResult } = require('express-validator');

const feedbackCltr = {};

feedbackCltr.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const body = req.body;
        const feedback = new Feedback(body);
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};


feedbackCltr.list = async (req, res) => {
    try {
        const feedbacks = await Feedback.find()
        res.json(feedbacks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};


feedbackCltr.show = async (req, res) => {
    try {
        const id = req.params.id;
        const feedback = await Feedback.findById(id);
        if (!feedback) {
            return res.status(404).json({ error: 'Feedback not found' });
        }
        res.json(feedback);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};


module.exports = feedbackCltr
*/


import Feedback from '../models/feedback-model.js';
import { validationResult } from 'express-validator';

const feedbackCltr = {};


feedbackCltr.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const body = req.body;
    const feedback = new Feedback(body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', feedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// List all feedback
feedbackCltr.list = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};


feedbackCltr.show = async (req, res) => {
  try {
    const id = req.params.id;
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    res.json(feedback);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export default feedbackCltr;
