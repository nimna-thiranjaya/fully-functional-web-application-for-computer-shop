const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "products",
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users",
      },
      userPicture: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      date: {
          type: String,
          required: true,
      }
    });

//module.exports = mongoose.model('Feedbacks', feedbackSchema);

const Feedback = mongoose.model('feedbacks', feedbackSchema);

module.exports = Feedback;