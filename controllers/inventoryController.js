const asyncHandler = require('express-async-handler');
const Inventory = require('../models/inventoryModel');

// @desc   Get Inventories
// @route  GET /api/inventories
// @access Public
const getInventories = asyncHandler(async (req, res) => {
  const inventories = await Inventory.find();

  res.status(200).json(inventories);
});

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
    res.status(201).json(inventory);
  } else {
    res.status(400);
    throw new error('Invalid inventory data');
  }
});

// @desc   Update Inventory
// @route  PUT /api/inventories/:id
// @access Public
const updateInventory = asyncHandler(async (req, res) => {
  const inventory = await Inventory.findById(req.params.id);

  if (!inventory) {
    res.status(400);
    throw new Error('Inventory not found');
  }

  const updatedInventory = await Inventory.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedInventory);
});

// @desc   Delete Inventory
// @route  DELETE /api/inventories/:id
// @access Public
const deleteInventory = asyncHandler(async (req, res) => {
  const inventory = await Inventory.findById(req.params.id);

  if (!inventory) {
    res.status(400);
    throw new Error('Inventory not found');
  }

  await inventory.remove();

  res.status(200).json({ success: true });
});

module.exports = {
  getInventories,
  createInventory,
  updateInventory,
  deleteInventory,
};
