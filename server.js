import express from "express";
import connectmongodb from utils/db.js;

const bhakas = express();
const port = process.env.PORT || 3000;

connectmongodb();
 