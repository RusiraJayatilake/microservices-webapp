const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
require('dotenv').config();

const app = express();
const port = 2000;

// Database connection
require('./src/config/database').connect();

app.use('/services/', userRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
