const asyncHandler = require('express-async-handler');

// @desc   Create an Inventory
// @route  /api/inventories
// @access Public
const createInventory = asyncHandler(async (req, res) => {
  const { name, type, quantity } = req.body;

  if (!name || !type || !quantity) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  res.send('Inventory Route');
});

module.exports = {
  createInventory,
};
