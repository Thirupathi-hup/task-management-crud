const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tasksRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());


app.use('/tasks', tasksRoutes);


app.use(errorHandler);


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('Database connection failed:', err);
  });
