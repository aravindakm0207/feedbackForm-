/*
const mongoose= require("mongoose")
const configureDB=async(e)=>{
    try{
        const db=await mongoose.connect(process.env.mongodb_url)
        console.log("connected to db")

    }
    catch(err){
        console.log(err)
    }
}

module.exports=configureDB
*/

import mongoose from "mongoose";

const configureDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_url);
    console.log("✅ Connected to DB");
  } catch (err) {
    console.error("❌ DB connection error:", err);
  }
};

export default configureDB;
