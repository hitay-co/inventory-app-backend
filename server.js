const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;
const inventoryRoutes = require('./routes/inventoryRoutes');

// Connect to MongoDB
connectDB();

const app = express();

// Body parser Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Inventory App',
  });
});

// Routes
app.use('/api/inventories', inventoryRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
