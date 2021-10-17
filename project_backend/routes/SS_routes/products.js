const express = require ('express');
const products = require('../../models/SS_models/products');

const router = express.Router();

//Add new product
router.route('/add').post((req,res)=>{

    let newProduct = new products(req.body);
    newProduct.save((err)=>{
       
        if(err){
            return res.status(400).json({
                eror:err
            });
        }
        
        return res.status(200).json({
            success:"Products saved successfully!!"
        });
    });
});

//get products
router.route('/displayProducts').get((req,res) =>{
    products.find().exec((err,products)=>{
        
        if(err){
            return res.status(400),json({
                error:err
            });
        }
        
        return res.status(200).json({
            success:true,
            existingProducts:products
        });
    });
});


//get a specific products
router.route('/:productID').get((req,res)=>{
    let productID = req.params.productID;

    products.findById(productID,(err,products)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            products
        });
    });
 });

 
//update products
router.route('/update/:productID').put((req,res)=>{
    products.findByIdAndUpdate(
        req.params.productID,{
            $set:req.body
        },
        (err,product)=>{
            
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Update Successfully"
            });
        });
    });


//Delete products
router.route('/delete/:productID').delete((req,res)=>{
    products.findByIdAndRemove(req.params.productID).exec((err,deleteProduct)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deleteProduct
        });
    });
 });
 

module.exports = router;