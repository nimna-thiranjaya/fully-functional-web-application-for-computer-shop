const express = require("express");
const router = require("express").Router();
let admin= require("../../models/NT_models/admin");
const validator= require("validator");
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/Admin_middleware/auth')
const bcrypt = require('bcryptjs')
 
//create
router.post('/add', async (req, res) => {
    try {
      const {fname, lname, email, username, password, nic, description, profileImage} = req.body
 
      let admin1 = await admin.findOne({email})
      let admin2 = await admin.findOne({username})
      if (admin1 || admin2) {
        throw new Error('Admin Account Already Exists')
      }
      admin1 = {
        fname :fname,
        lname : lname,
        email: email,
        username : username,
        password: password,
        nic: nic,
        description: description,
        profileImage : profileImage
      }
 
      const newadmin = new admin(admin1)
      await newadmin.save()
      const token = await newadmin.generateAuthToken()
      res.status(200).send({admin: newadmin, token: token, status: 'Admin Account Creation Success'})
    } catch (error) {
      res.status(500).send({error: error.message})
      console.log(error)
    }
  })
 
  //login
router.post('/login', async (req, res) => {
  try {
    const {username, password} = req.body
    const admin1 = await admin.findByCredentials(username, password)
    const token = await admin1.generateAuthToken()
    res.status(200).send({token: token, admin1: admin1})
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
})
 
//logout
router.post("/logout", auth, async (req, res) => {
 
  try {
    req.admin1.tokens = req.admin1.tokens.filter((token) => {
     return token.token !== req.token;
    });
    await req.admin1.save();
    res.status(200).send("Logout successfully");
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
 
});
 
//admin profile
router.get("/profile", auth, async (req, res) => {
  try {
    res.status(201)
    res.send({ status: "User fetched", admin1: req.admin1});
  } catch (error) {
    res.status(500)
    res.send({ status: "Error with /profile", error: error.message });
  }
});
 
 
//admin update
router.put('/update', auth, async (req, res) => {
 
  const {fname, lname, email, username, nic,description,profileImage} = req.body
  try {
    const updateValus={
      fname : fname,
      lname : lname,
      email : email,
      username : username,
      nic : nic,
      description : description,
      profileImage : profileImage
    };
    let admin1 = await admin.findOne({username})
 
    if (!admin1) {
      throw new Error('There is no Admin account')
    }
    const adminUpdate = await admin.findByIdAndUpdate(req.admin1.id,updateValus)
 
    res.status(200).send({status: 'Admin Profile Updated', admin1: adminUpdate})
  } catch (error) {
    res.status(500).send({error: error.message})
    console.log(error)
  }
})
 
// delete admin
router.delete("/delete", auth, async (req, res) => {
  try {
    const admin1 = await admin.findById(req.admin1.id);
    if (!admin1) {
      throw new Error("There is no Admin to delete");
    }
    const deleteProfile = await admin.findByIdAndDelete(req.admin1.id);
    res.status(200).send({ status: "user deleted", admin1 : deleteProfile });
  } catch (error) {
    res
      .status(500)
      .send({ status: "error with id", error: error.message });
  }
});
 
module.exports = router;
