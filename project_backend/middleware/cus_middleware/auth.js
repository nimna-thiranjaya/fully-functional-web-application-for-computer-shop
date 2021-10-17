const jwt = require("jsonwebtoken");
const config = require("config");
const customer = require("../../models/DH_models/customer");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decode = jwt.verify(token, "jwtSecret");
    const Cus = await customer.findOne({ _id: decode._id, "tokens.token": token });
    if (!Cus) {
      throw new Error("Please Authenticate");
    }
    req.token = token;
    req.Cus = Cus;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
    console.log("Error in auth.js middleware ", error.message);
  }
};

module.exports = auth;