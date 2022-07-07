const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
      maxlength: 40,
      minlength: 3,
    },
    type: {
      type: String,
      required: [true, 'Please select a type'],
      enum: ['Computer', 'Monitor', 'Keyboard', 'Printer'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please enter an amount'],
      min: 1,
      max: 1000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Inventory', inventorySchema);
