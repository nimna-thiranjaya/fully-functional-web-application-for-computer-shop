const mongoose = require('mongoose');
const validator = require('validator');

const requestSchema = new mongoose.Schema({
     
    //foriegn key
    /*CusId:{
        type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "customers",
    },*/
    /*AdminId:{
        type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "admins",
    },*/
    itemname:{
        type: String,
         required: true,
     },
     brand:{
          type: String,
         required: true,
     },
     model:{
          type: String,
          required: true,
     },    
       
    version:{
         type: String,
         required: true,
    },
    userID:{
     type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "customers",
    },
    userName: {
     type: String,
     required: true
   },
   
   profileImage: {
     type: String,
     required: true
   },
   
   userEmail : {
     type: String,
     required: true,
     trim: true,
     validate(value){
       if(!validator.isEmail(value)) {
         throw new Error('Please enter valid email address')
       }
     }  
   },

});
const Requests = mongoose.model('requests', requestSchema)

module.exports = Requests;



