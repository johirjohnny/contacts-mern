import express from 'express';
import connectDB from './config/db.js';

connectDB();

const app = express();
const PORT = 5000;
app.listen(PORT, console.log(`server is running on ${PORT}`));