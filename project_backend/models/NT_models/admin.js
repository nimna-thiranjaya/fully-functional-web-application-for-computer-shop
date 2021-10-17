const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
 
 
 
const adminSchema = new mongoose.Schema({
 
 
    fname:{
        type : String,
        require:true
    },
 
    lname:{
        type :String,
        require:true
    },
 
    email:{
        type :String,
        require:true,
        lowercase: true
    },
 
    username:{
        type :String,
        require:true
    },
 
    password:{
        type :String,
        require:true
    },
 
    nic:{
        type :String,
        require:true,
    },
 
    description:{
        type :String,
        require:true
    },
 
    profileImage:{
        type:String,
        require :true,
    },
    tokens: [{
        token: {
          type: String,
          required: true,
        }
      }]  
 
});
 
//password encryption
adminSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
});
 
adminSchema.methods.generateAuthToken = async function () {
    const admin = this;
    const token = jwt.sign({ _id: admin._id }, "jwtSecret");
    admin.tokens = admin.tokens.concat({ token });
    await admin.save();
    return token;
  };
 
  adminSchema.statics.findByCredentials = async (username, password) => {
    const admin1 = await admin.findOne({ username});
    if (!admin1) {
      throw new Error("Please enter acorrect user name");
    }
    const isMatch = await bcrypt.compare(password, admin1.password);
    if (!isMatch) {
      throw new Error("Password is not matched");
    }
    return admin1;
  };
 
 
const admin = mongoose.model("admin",adminSchema);
module.exports = admin;