const express = require('express');
const router = express.Router();
const {
  createInventory,
  getInventories,
  updateInventory,
  deleteInventory,
} = require('../controllers/inventoryController');

router.route('/').get(getInventories).post(createInventory);

router.route('/:id').put(updateInventory).delete(deleteInventory);

module.exports = router;
