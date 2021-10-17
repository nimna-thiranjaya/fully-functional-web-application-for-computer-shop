import React, {useState} from 'react';
import axios from 'axios';
import { Modal } from "react-bootstrap";
import StarRating from "stars-rating";
import CommentIcon from '@material-ui/icons/Comment';
import Button from "@material-ui/core/Button";

const UpdateFeedback = ({comment,rating,feedbackId,productId,show, onHide}) => {
  const [newRating, setNewRating] = useState(rating)
  const [newComment, setNewComment] = useState('')

  const updateRating = (r) => {
    setNewRating(r)
  }

  const updateFeedback = async (e) => {
    e.preventDefault()
    const updatedFeedback = {
      rating: newRating,
      comment: newComment
    }
    
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        "content-type": "application/json",
      },
    };
    await axios.put(`http://localhost:8070/feedbacks/update/${productId}/${feedbackId}`, updatedFeedback, config)
    .then((res) => {
      alert(res.data.status)
      window.location=`/products/${productId}`
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <Modal show={show} onHide={onHide} animation={true} size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-color">Change My Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  className="text-color">
            <label className="text-color">Change Your Rating</label>
            <StarRating
              count={5}
              size={40}
              color2={"#eb8a2f"}
              value={newRating}
              onChange={updateRating}
            />
            <br/>
            <label className="text-color">Change Your Comment</label>
            <textArea
              rows={5}
              className="form-control"
              variant="outlined"
              onChange={(e) => {setNewComment(e.target.value)}}
              required
            >{comment}</textArea>
            <br/>
            <Button variant="contained" className="w-10" style={{background: "#08368b", width: 100+"%"}}
            startIcon={<CommentIcon />} disableElevation type="submit" onClick={updateFeedback}>update comment</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default UpdateFeedback