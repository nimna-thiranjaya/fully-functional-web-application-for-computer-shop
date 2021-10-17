const express = require ('express');
const Deliverys = require('../../models/RD_models/deliverys');
const Order = require('../../models/ND_models/Order');






const router = express.Router();

//Add new delivery
router.route('/deliveryadd').post((req,res)=>{

    let newDelivery = new Deliverys(req.body);
    newDelivery.save((err)=>{
       
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        
        return res.status(200).json({
            success:"Deliverys saved successfully!!"
        });
    });
});

//get deliverys
router.route('/displaydeliverys').get((req,res) =>{
    Deliverys.find().exec((err,deliverys)=>{
        
        if(err){
            return res.status(400),json({
                error:err
            });
        }
        
        return res.status(200).json({
            success:true,
            existingDeliverys:deliverys
        });
    });
});

//get a specific delivery

router.route('/:deliveryID').get((req,res)=>{
    let deliveryID = req.params.deliveryID;

    Deliverys.findById(deliveryID,(err,deliverys)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            deliverys
    });        
});

});


//update deliverys
router.route('/update/:deliveryID').put((req,res)=>{
    Deliverys.findByIdAndUpdate(
        req.params.deliveryID,{
            $set:req.body
        },
        (err,delivery)=>{
            
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Update Successfully"
            });
        });
    });

        
//Delete deliverys
router.route('/delete/:deliveryID').delete((req,res)=>{
    Deliverys.findByIdAndRemove(req.params.deliveryID).exec((err,deleteDelivery)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deleteDelivery
        });
    });
 });
 

 module.exports = router;