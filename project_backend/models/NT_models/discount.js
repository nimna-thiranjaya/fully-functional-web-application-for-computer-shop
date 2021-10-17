const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const discountSchema = new Schema({
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "products"
    },
 
    productName: {
        type: String,
        required: true,
      },
 
      marketPrice: {
        type: Number,
        required: true,
      },
 
      percentage: {
        type: String,
        required: true,
      },
 
      ammount: {
        type: Number,
        required: true,
      },
 
      startingdate: {
        type: Date,
        required: true,
      },
      endingdate: {
        type: Date,
        required: true,
      },
    },
    {
      collection: "discounts"
    }
);
 
module.exports = mongoose.model("Discount", discountSchema);