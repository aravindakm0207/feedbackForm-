
/*
require('dotenv').config()
const express=require("express")
const cors=require("cors")
const { checkSchema } = require('express-validator')
const app=express()
app.use(cors())
app.use(express.json())
const configureDB=require('./config/db')
const feedbackValidationSchema = require('./app/validations/feedbackValidations')
const feedbackCltr = require('./app/controllers/feedbackCltr') 


app.post('/feedback', checkSchema(feedbackValidationSchema), feedbackCltr.create)
app.get('/feedbacks',feedbackCltr.list  )

configureDB()
let port =5000
app.get("/" ,(req,res)=>{
    console.log("connected")
    res.send("Server is working")
})
app.listen(port,()=>{
    console.log("connected to port",port)
})

*/


import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { checkSchema } from "express-validator";

import configureDB from "./config/db.js";
import feedbackValidationSchema from "./app/validations/feedbackValidations.js";
import feedbackCltr from "./app/controllers/feedbackCltr.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/feedback", checkSchema(feedbackValidationSchema), feedbackCltr.create);
app.get("/feedbacks", feedbackCltr.list);

// DB connection
configureDB();

// Default route
app.get("/", (req, res) => {
  console.log("connected");
  res.send("Server is working");
});

// Server start
const port = 5000;
app.listen(port, () => {
  console.log("✅ Connected to port", port);
});
