/**
 * Imports:
 * Express: our backend
 * mongoose: used to connect to our mongodb database
 * questions: the router for /api/questions
 * db: The connection URI that we creates when running the server.
 */
const express = require('express');
const mongoose = require('mongoose');
const questions = require('./routes/api/questions');
const db = require('./config/keys').mongoURI

/**
 * Initialize a variable app which will be our 
 * express server
 */
const app = express();

/**
 * We want this application to accept and send
 * JSON data. The middleware express.json()
 * helps us to do that.
 */
app.use(express.json());

/**
 * This is our database connection process.
 * We will use our database connection URL here
 */
mongoose.connect(db).then(() => {
  console.log('mongodb connected')
})
.catch(e => {
  console.error('error connecting to MongoDB', e)
})

/**
 * All requests that matches /api/questions/*
 * will be redirected to the questions router
 */
app.use('/api/questions', questions);

/**
 * define that our application will run on
 * localhost:5000
 */
const PORT = 5000;

/**
 * Start our server
 */
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
