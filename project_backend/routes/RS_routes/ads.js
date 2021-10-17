const express = require ('express');
const Ads = require('../../models/RS_models/ads');
const ads = require('../../models/RS_models/ads');
 
const router = express.Router();
 
//Add new advertisements
 
router.route('/adadd').post((req,res)=>{
 
    let newAd = new Ads(req.body);
    newAd.save((err)=>{
       
        if(err){
            return res.status(400).json({
                eror:err
            });
        }
       
        return res.status(200).json({
            success:"advertisement saved successfully!!"
        });
    });
});
 
 
//get advertisements
router.route('/displayAds').get((req,res) =>{
    Ads.find().exec((err,ads)=>{
       
        if(err){
            return res.status(400),json({
                error:err
            });
        }
       
        return res.status(200).json({
            success:true,
            existingAds:ads
        });
    });
});
 
 
//update advertisements
router.route('/adupdate/:adID').put((req,res)=>{
    Ads.findByIdAndUpdate(
        req.params.adID,{
            $set:req.body
        },
        (err,ad)=>{
           
            if(err){
                return res.status(400).json({error:err});
            }
           
            return res.status(200).json({
                success: "Update Successfully"
            });
        });
    });
 
//Delete advertisement
router.route('/delete/:adID').delete((req,res)=>{
    Ads.findByIdAndRemove(req.params.adID).exec((err,deleteAd)=>{
       
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deleteAd
        });
    });
 });
 
 //get specific ad
router.route('/:id').get((req,res)=>{
 
    let adsId = req.params.id;
    ads.findById(adsId,(err,ads)=>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({
            success:true,
            ads
        });
    });
});
 
module.exports = router;
 

