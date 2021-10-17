const express = require("express");
const router = express.Router();
const auth = require('../../middleware/cus_middleware/auth')
const User = require('../../models/DH_models/customer')
const Product = require('../../models/SS_models/products')

// @url           POST/wishlist/add
// @description   add products to the wish list
router.post("/add/:id", auth, async (req, res) => {
  const productId = req.params.id
  try {
    const user = await User.findById(req.Cus._id)
    const product = await Product.findById(productId)
    if (!user) {
      throw new Error('There is no user')
    }

    if (!product) {
      throw new Error('There is no Product')
    }
    let wishlistItem = {
      productId: productId,
      productName: product.productName,
      productPrice: product.productPrice,
      coverImage: product.coverImage,
    };

    await User.findOneAndUpdate(
      { _id: req.Cus._id },
      { $push: { wishList: wishlistItem } },
      { new: true, upsert: true }
    )
    res.status(200).send({ status: "Added to Wishlist", wishlist: wishlistItem });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: error.message });
  }
});


// @url           GET/wishlist/display
// @description   retrieve wishlist
router.get("/display", auth, async (req, res) => {
  try {
    const user = await User.findById(req.Cus._id)
    if (!user) {
      throw new Error('There is no user')
    }
    res.status(200).send({ status: "wishlist retrieved", wishlist: req.Cus.wishList});
  } catch (error) {
    res.status(500).send({ status: "Error with /all", error: error.message });
  }
});



// // @url           DELETE/wishlist/delete/:id
// // @description   delete products from wish list 
router.delete("/delete/:id", auth, async (req, res) => {
  const itemId = req.params.id;
  try {
    const user = await User.findById(req.Cus._id)
    if (!user) {
      throw new Error('There is no user')
    }
    const deleteItem = await User.updateOne(
      { _id: req.Cus._id },
      { $pull: { wishList: user.wishList.id(itemId) } },
      { multi: true }
    )
    res.status(200).send({ status: "product removed from the list", wishlist: deleteItem });
  } catch (error) {
    res
      .status(500)
      .send({ status: "error with /delete/:id", error: error.message });
  }
});


module.exports = router;