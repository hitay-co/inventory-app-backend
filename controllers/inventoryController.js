// @desc   Create an Inventory
// @route  /api/inventories
// @access Public
const createInventory = (req, res) => {
  const { name, type, quantity } = req.body;

  if (!name || !type || !quantity) {
    throw new Error('Please include all fields');
  }

  res.send('Inventory Route');
};

module.exports = {
  createInventory,
};
