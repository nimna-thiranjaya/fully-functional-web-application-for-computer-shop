import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import StarRating from "stars-rating";
import axios from "axios";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 1,
  },
  colorPrimary: {
    color: "#eb8a2f",
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 1,
    backgroundColor: "#73726c",
  },
}))(LinearProgress);

const Ratings = ({ ratings, productId }) => {
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(null);
  //Calculation
  const oneStar =
    Math.round(
      ((ratings.one + ratings.oneAndHalf) / ratings.ratings) * 100 * 10
    ) / 10;
  const twoStar =
    Math.round(
      ((ratings.two + ratings.twoAndHalf) / ratings.ratings) * 100 * 10
    ) / 10;
  const threeStar =
    Math.round(
      ((ratings.three + ratings.threeAndHalf) / ratings.ratings) * 100 * 10
    ) / 10;
  const fourStar =
    Math.round(
      ((ratings.four + ratings.fourAndHalf) / ratings.ratings) * 100 * 10
    ) / 10;
  const fiveStar = Math.round((ratings.five / ratings.ratings) * 100 * 10) / 10;

  useEffect(() => {
    setLoading(true);
    const fetchProductData = async () => {
      try {
        await axios
          .get(`http://localhost:8070/products/${productId.productId}`)
          .then((res) => {
            setAverageRating(res.data.products.averageRating)
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProductData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    
    <div className="pb-2">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-xm-12 col-sm-12 avg-rating">
        <div className="text-color pl-1">{averageRating}</div>
          <div style={{ fontSize: 50, fontWeight: "bold" }} className="pl-3 text-color">
            Average Ratings
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-xs-12 col-sm-12">
          <div className="row">
            <div className="col-lg-9 col-sm-4">
              <div style={{ paddingTop: 16 }}>
                <BorderLinearProgress variant="determinate" value={fiveStar} />
              </div>
            </div>
            <div className="col-lg-3 col-sm-8 stars">
              <div className="row" style={{ paddingTop: 3 }}>
                <label>
                  <div style={{ pointerEvents: "none" }}>
                    <StarRating
                      count={5}
                      size={22}
                      value={5}
                      color2={"#eb8a2f"}
                    />
                  </div>
                </label>
                <label>
                  <div
                    style={{
                      pointerEvents: "none",
                      paddingTop: 8,
                      paddingLeft: 8,
                      color: "#008B8B",
                    }}
                  >
                    {fiveStar}%
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-sm-4">
              <div style={{ paddingTop: 16 }}>
                <BorderLinearProgress variant="determinate" value={fourStar} />
              </div>
            </div>
            <div className="col-lg-3 col-sm-8 stars">
              <div className="row" style={{ paddingTop: 3 }}>
                <label>
                  <div style={{ pointerEvents: "none" }}>
                    <StarRating
                      count={5}
                      size={22}
                      value={4}
                      color2={"#eb8a2f"}
                    />
                  </div>
                </label>
                <label>
                  <div
                    style={{
                      pointerEvents: "none",
                      paddingTop: 8,
                      paddingLeft: 8,
                      color: "#008B8B",
                    }}
                  >
                    {fourStar}%
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-sm-4">
              <div style={{ paddingTop: 16 }}>
                <BorderLinearProgress variant="determinate" value={threeStar} />
              </div>
            </div>
            <div className="col-lg-3 col-sm-8 stars">
              <div className="row" style={{ paddingTop: 3 }}>
                <label>
                  <div style={{ pointerEvents: "none" }}>
                    <StarRating
                      count={5}
                      size={22}
                      value={3}
                      color2={"#eb8a2f"}
                    />
                  </div>
                </label>
                <label>
                  <div
                    style={{
                      pointerEvents: "none",
                      paddingTop: 8,
                      paddingLeft: 8,
                      color: "#008B8B",
                    }}
                  >
                    {threeStar}%
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-sm-4">
              <div style={{ paddingTop: 16 }}>
                <BorderLinearProgress variant="determinate" value={twoStar} />
              </div>
            </div>
            <div className="col-lg-3 col-sm-8 stars">
              <div className="row" style={{ paddingTop: 3 }}>
                <label>
                  <div style={{ pointerEvents: "none" }}>
                    <StarRating
                      count={5}
                      size={22}
                      value={2}
                      color2={"#eb8a2f"}
                    />
                  </div>
                </label>
                <label>
                  <div
                    style={{
                      pointerEvents: "none",
                      paddingTop: 8,
                      paddingLeft: 8,
                      color: "#008B8B",
                    }}
                  >
                    {twoStar}%
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-sm-4">
              <div style={{ paddingTop: 16 }}>
                <BorderLinearProgress variant="determinate" value={oneStar} />
              </div>
            </div>
            <div className="col-lg-3 col-sm-8 stars">
              <div className="row" style={{ paddingTop: 3 }}>
                <label>
                  <div style={{ pointerEvents: "none" }}>
                    <StarRating
                      count={5}
                      size={22}
                      value={1}
                      color2={"#eb8a2f"}
                    />
                  </div>
                </label>
                <label>
                  <div
                    style={{
                      pointerEvents: "none",
                      paddingTop: 8,
                      paddingLeft: 8,
                      color: "#008B8B",
                    }}
                  >
                    {oneStar}%
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Ratings;
