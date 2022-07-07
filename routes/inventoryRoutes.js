const express = require('express');
const router = express.Router();
const {
  createInventory,
  getInventories,
} = require('../controllers/inventoryController');

router.route('/').get(getInventories).post(createInventory);

module.exports = router;
