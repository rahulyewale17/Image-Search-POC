require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/voiceAndImageTranscribe');

const app = express();

app.use(cors({ origin: true }));
app.use(authRoutes);


  
exports.app = functions.https.onRequest(app);