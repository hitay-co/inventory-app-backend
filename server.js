const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Inventory App',
  });
});

// Routes
app.use('/api/inventories', inventoryRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
