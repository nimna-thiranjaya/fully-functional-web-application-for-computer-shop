import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Paper from '@material-ui/core/Paper';
import StarRating from "stars-rating";
import ShowMoreText from "react-show-more-text";

const AdminFeedback = ({name, rating, comment, picture, date}) => {

  return (
    <div style={{paddingBottom: 5}}>
    <Paper style={{ padding: 10, borderRadius: 8 }} variant="outlined"> 
      <div>
      <Avatar
        alt="Remy Sharp"
        src={picture}
        style={{ width: 50, height: 50, paddingBottom:8 }}
      />
        <label>
          <div
            style={{
              pointerEvents: "none",
              fontWeight: "bold",
            }}
          >
            {name}
          </div>
          <div style={{ pointerEvents: "none" }}>
            <ul className="aa">
              <label>
                <li>
                  <div style={{ pointerEvents: "none" }}>
                    <StarRating
                      count={5}
                      size={23}
                      value={rating}
                      color2={"#eb8a2f"}
                    />
                  </div>
                  </li>
              </label>
              <label style={{ fontSize: 12, paddingLeft: 12}}><li>
                  on {date}</li>
              </label>
            </ul>
          </div>
        </label>
      </div>
      <div style={{ fontSize: 13, paddingTop: 2}} align="center">
          <ShowMoreText
            lines={4}
            more="Show more"
            less="Show less"
            expanded={false}
            keepNewLines={false}
          >
            {comment}
          </ShowMoreText>
          </div>
    </Paper>
    </div>
  )
}

export default AdminFeedback