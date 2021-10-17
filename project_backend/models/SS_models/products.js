const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

    productName:{
        type: String,
        required: true,
    }, 
    quantity: {
        type: Number,
        required: true,
    },

    originalTitle:{
        type: String,
        required: true,
    },
    
    productPrice:{
        type: Number,
        required: false,
    },
   
    marketPrice:{
        type: Number,
        required: false,
    },

    brandName: {
        type: String,
        required: true,
    },

    warrantYear: {
        type: String,
        required: true,
    },

    version: {
        type: String,
        required: true,
    } ,

    description:{
        type: String,
        required: false,
    },
    
    coverImage: {
        type: String,
        required: true,
    },
    availability:{
        type: String,
        required: true,
    },

    averageRating: {   
     type: Number,  
    },

    offerPrice :{
       type: Number,
       required: false,
       default : 0

    }

});

module.exports = mongoose.model('Products', productSchema);

