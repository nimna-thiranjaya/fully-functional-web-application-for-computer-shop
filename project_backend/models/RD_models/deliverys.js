const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
 //foreign key

    /*oderId: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "oders",

    },
    adminId: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "admins",

    },*/
   /*id: {
        type: Number,
        required: true,
    },*/
    orderid: {
        type: String,
        required: true,

    },
    numberofitems: {
        type: Number,
        required: true,
    },
    deliverdate: {
        type: String,
        required: true,
    },
    
    delivercost: {
        type: Number,
        required: true,
    },
    phonenumber: {
        type: String, 
        required: true,
        
    },
    useremail : {
        type: String,
        required: true,
        
    },
    courierservice: {
        type: String,
        required: true,
    },
    receiverdetails: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    
   
});
module.exports = mongoose.model('Deliverys', deliverySchema);