const express = require ('express');
const Order = require('../../models/ND_models/Order');
const router = express.Router();



// router.get("/display", async (req, res) => {  
//       try {     
//         const order = await Order.find({})    
//       res.status(200).send({ status: "Order Retrive", orderhistory: order });  
//   } catch (error) {     
//      res.status(500).send({ status: "Error with /all", error: error.message });   
//  }});

//get orders
router.route('/displayorder').get((req,res) =>{
    Order.find().exec((err,order)=>{
        if(err){
            return res.status(400),json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrder:order
        });
    });
});



 
  module.exports = router;



