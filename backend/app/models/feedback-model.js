
/*
const mongoose=require("mongoose")
const {Schema,model}=mongoose

const feedbackSchema = new Schema(
  {
    visitFrequency: {
      type: String,
      enum: ["Regularly", "Sometimes", "First Time"],
 
    },
    qualityOfFood: {
      type: Number,
      min: 1,
      max: 5,
      
    },
    serviceQuality: {
      type: Number,
      min: 1,
      max: 5,
     
    },
    overallExperience: {
      type: Number,
      min: 1,
      max: 5,
      
    },
    recommend: {
      type: Boolean,
      
    },
    suggestions: {
      type: String,
      maxlength: 500,
    },
    followUp: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Feedback = model("Feedback", feedbackSchema);
export default Feedback;
*/



import mongoose from "mongoose";

const { Schema, model } = mongoose;

const feedbackSchema = new Schema(
  {
    visitFrequency: {
      type: String,
      enum: ["Regularly", "Sometimes", "First Time"],
    },
    qualityOfFood: {
      type: Number,
      min: 1,
      max: 5,
    },
    serviceQuality: {
      type: Number,
      min: 1,
      max: 5,
    },
    overallExperience: {
      type: Number,
      min: 1,
      max: 5,
    },
    recommend: {
      type: Boolean,
    },
    suggestions: {
      type: String,
      maxlength: 500,
    },
    followUp: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Feedback = model("Feedback", feedbackSchema);

export default Feedback;
