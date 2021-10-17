const express = require("express");
const router = express.Router();
const auth = require('../../middleware/cus_middleware/auth');
const User = require('../../models/DH_models/customer')
const Product = require('../../models/SS_models/products')


// @url           /cart/add
// @description   add products to the cart
router.post("/add/:id", auth, async (req, res) => {

    const productId = req.params.id
  try {
      const user = await User.findById(req.Cus._id)
      const product = await Product.findById(productId)
      const quantity  = 1;
      const productprice = product.productPrice;
     
      if (!user) {
        throw new Error('There is no user')
      }
      if (!product) {
        throw new Error('There is no Product')
      }
      let cartItem = {
        productId: productId,
        productPrice: productprice,
        productname: product.productName,
        quantity: quantity,
        totalPrice: productprice * quantity,
        productImage: product.coverImage
        
      };
  
      await User.findOneAndUpdate(
        { _id: req.Cus._id },
        { $push: { cart: cartItem } },
        { new: true, upsert: true }
      )
  
      res.status(200).send({ status: "Item Added to Cart", cart: cartItem });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  });
  

// @url           /cart/display
// @description   retrieve cart
router.get("/display", auth, async (req, res) => {
    try {
      const user = await User.findById(req.Cus._id)
      if (!user) {
        throw new Error('There is no user')
      }
      res.status(200).send({ status: "cart retrieved", cart: req.Cus.cart });
    } catch (error) {
      res.status(500).send({ status: "Error with /all", error: error.message });
    }
  });



  // // @url           /cart/update/:id
// // @description   update quantity
router.put("/update/:id", auth, async (req, res) => {
    const cartId = req.params.id
    try {
      const { quantity, price, totalPrice } = req.body;
      const user = await User.findById(req.Cus._id)
      if (!user) {
        throw new Error('There is no user')
      }
      user.cart.id(cartId).quantity = quantity
      user.cart.id(cartId).productPrice = price
      user.cart.id(cartId).totalPrice = totalPrice
      await user.save()
  
      res.status(200).send({ status: "quantity updated", cart: user.cart.id(cartId) });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });


  // // @url           /ocart/delete/:id
// // @description   delete products from cart 
router.delete("/delete/:id", auth, async (req, res) => {
    const itemId = req.params.id;
    try {
      const user = await User.findById(req.Cus._id)
      if (!user) {
        throw new Error('There is no user')
      }
      const deleteItem = await User.update(
        { _id: req.Cus._id },
        { $pull: { cart: user.cart.id(itemId) } },
        { multi: true }
      )
      res.status(200).send({ status: "product removed", cart: deleteItem });
    } catch (error) {
      res
        .status(500)
        .send({ status: "error with /delete/:id", error: error.message });
    }
  });


  

  module.exports = router;