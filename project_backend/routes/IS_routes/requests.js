const express = require ('express');
const Requests = require('../../models/IS_models/requests');
const auth = require('../../middleware/cus_middleware/auth');
const User = require('../../models/DH_models/customer');
const router = express.Router();


//url    request/add
//description  create new request book
//@Action  public
router.post("/add",auth, async (req, res) => {
    try {
      let userId = req.Cus._id
      const user = await User.findById(userId)
      if (!user) {
        throw new Error('There is no user')
      }
     
      const { itemname, brand, model, version, userEmail } = req.body;

      const dbRequest = {
        itemname: itemname,
        brand: brand,
        model: model,
        version: version,
        userID: userId,
        userName: req.Cus.name,
        userEmail: userEmail,
        profileImage: req.Cus.imageUrl
      };
  
      const newRequest = new Requests(dbRequest);
      await newRequest.save();
      res.status(200).send({ status: "New request created", requests: newRequest });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  });

    // @url           /request/all
// @description   return all requests in database
// @Action        public
router.get("/all", async (req, res) => {
    try {
      const allrequests = await Requests.find({});
      res.status(200).send({requests: allrequests});
    } catch (error) {
      res.status(500).send({ status: "Error with /all", error: error.message });
    }
  });
  
  router.get('/myrequests', auth, async (req, res) => {
    try {
      const userRequest = await Requests.find({userID: req.Cus._id})
      res.status(200).send({requests: userRequest})
    } catch (error) {
      res.status(500).send({ status: "Error with /myrequests", error: error.message });
    }
  });

  // @url           /request/update/:id
// @description   update request by id
// @Action        private
router.post("/update/:id", async (req, res) => {
    const Id = req.params.id;
    try {
        const { itemname, brand, model, version, userEmail  } = req.body;
    const updateValues = {
        itemname: itemname,
        brand: brand,
        model: model,
        version: version,
        userEmail: userEmail
      };
      const updateRequest = await Requests.findByIdAndUpdate(Id, updateValues);
      res.status(200).send({ status: "Request updated", requests: updateRequest });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

  // @url           /request/delete/:id
// @description   delete request by id
// @Action        private
router.delete("/delete/:id", async (req, res) => {
    const reqID = req.params.id;
    try {
      const deleteRequest = await Requests.findByIdAndDelete(reqID);
      res.status(200).send({ status: "Request deleted", requests: deleteRequest });
    } catch (error) {
      res
        .status(500)
        .send({ status: "error with /delete/:id", error: error.message });
    }
  });




 module.exports = router;