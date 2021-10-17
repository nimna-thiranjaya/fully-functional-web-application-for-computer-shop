import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import StarRating from "stars-rating";
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import ChatIcon from '@material-ui/icons/Chat';
import Ratings from './ratings.component';

const CreateFeedback = (productId) => {
  
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(null);
  const [open, setOpen] = useState(false);
  const [ratings, setRatings] = useState({});
  
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const OnFormSubmit = async (e) => {
    e.preventDefault();
    console.log(productId.productId.productId)

    if (rating === 0) {
      console.log('this is in check function')
      setOpen(true)
      return;
    }

    const feedback = {
      rating: rating,
      comment: comment
    }

    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        "content-type": "application/json",
      },
    };

    axios.post(`http://localhost:8070/feedbacks/add/${productId.productId.productId}`, feedback, config)
      .then((res) => {
        console.log('data send to database');
        window.location.reload()
      }).catch((error) => {
        alert('Please Register To the Application')
        console.log(error.message)
      })
  }

  return (
    <div align="center">
    <div className="col-lg-40 col-sm-12 col-md-8 col-xs-12 product-col">
    <div className="pb-2">
      <br/>
      <h3 className="text-color"><u>Add Your Feedback</u></h3>
      <StarRating
        count={5}
        size={50}
        onChange={ratingChanged}
        color2={"#eb8a2f"}
        value={rating}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <div className="alert alert-danger">
          Please give your rating for product
        </div>
      </Snackbar>
      <form autoComplete="off" onSubmit={OnFormSubmit}>
        <textArea
          rows={6}
          className="form-control"
          placeholder="Enter your comment"
          variant="outlined"
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <div className="pt-3">
        <Button variant="contained" className="w-10" style={{background: "#08368b", width: 100+"%", color:"white"}}
        startIcon={<ChatIcon />} disableElevation type="submit">add my feedback</Button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default CreateFeedback;
