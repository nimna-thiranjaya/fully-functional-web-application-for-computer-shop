const express = require("express");
const router = express.Router();
const auth = require('../../middleware/cus_middleware/auth');
const Order = require('../../models/ND_models/Order');

//@url   GET/purchasehistory/display
//@description   display purchase history from orders
router.get("/display", auth, async (req, res) => {
    try {
      const order = await Order.find({customerId: req.Cus.id})
      res.status(200).send({ status: "purchase history retrieved", purchasehistory: order });
    } catch (error) {
      res.status(500).send({ status: "Error with /all", error: error.message });
    }
});

module.exports = router;