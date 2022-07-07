const asyncHandler = require('express-async-handler');
const Inventory = require('../models/inventoryModel');

// @desc   Create an Inventory
// @route  /api/inventories
// @access Public
const createInventory = asyncHandler(async (req, res) => {
  const { name, type, quantity } = req.body;

  if (!name || !type || !quantity) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  const inventory = await Inventory.create({
    name,
    type,
    quantity,
  });

  if (inventory) {
    res.status(201).json({
      inventory,
    });
  } else {
    res.status(400);
    throw new error('Invalid inventory data');
  }
});

// @desc   Get Inventories
// @route  GET /api/inventories
// @access Public
const getInventories = asyncHandler(async (req, res) => {
  const inventories = await Inventory.find();

  res.status(200).json(inventories);
});

module.exports = {
  createInventory,
  getInventories,
};
