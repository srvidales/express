const express = require('express');
const app = express();

// Middleware to log request parameters
app.use((req, res, next) => {
  console.log('Request Parameters:', req.query); // Query parameters
  console.log('Request Body:', req.body); // Request body (requires body-parser middleware)
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
