const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes.js'); 
const categoryRoutes = require('./Routes/categories.js');


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the route with controller
app.use('/api', authRoutes); 
app.use('/api', categoryRoutes); 


// Start server
app.listen(PORT, () => {
  console.log('Server running on http://localhost:3000');
});