const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  items: [{
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products"
    },
    itemName: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  cutomerAddress: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  deliveryDate: {
    type: Date,
    required: false
  },
  handOverDate: {
    type: Date,
    required: false
  },
  deliverMethod: {
    type: String,
    required: false
  }
});

const order = mongoose.model("orders", orderSchema);

module.exports = order;