import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Wishlist from "@material-ui/icons/Bookmark";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import BuyNow from "@material-ui/icons/MonetizationOnRounded";
import Paper from '@material-ui/core/Paper';
import StarRating from "stars-rating";
import {toast} from 'react-toastify';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0),
    marginRight: 9,
    marginBottom: 9,
    borderRadius: 5
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(150),
      height: theme.spacing(46),
    },
    borderRadius: 20
  },
}));

const ProductInfromation = (productId) => {



  const classes = useStyles();
  const [productName, setproductName] = useState(null);
  const [quantity, setquantity] = useState(null);
  const [originalTitle, setoriginalTitle] = useState(null);
  const [productPrice, setproductPrice] = useState(null);
  const [marketPrice, setmarketPrice] = useState(null);
  const [brandName, setbrandName] = useState(null);
  const [warrantYear, setwarrantYear] = useState(null);
  const [version, setversion] = useState(null);
  const [description, setdescription] = useState(null);
  const [coverImage, setcoverImage] = useState(null);
  const [availability, setavailability] = useState(null);
  const [averageRating, setAverageRating] = useState(0);
  

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        console.log(productId.productId)
        await axios
          .get(`http://localhost:8070/products/${productId.productId}`)
          .then((res) => {
            setproductName(res.data.products.productName);
            setquantity(res.data.products.quantity);
            setoriginalTitle(res.data.products.originalTitle);
            setproductPrice(res.data.products.productPrice);
            setmarketPrice(res.data.products.marketPrice);
            setbrandName(res.data.products.brandName);
            setwarrantYear(res.data.products.warrantYear);
            setversion(res.data.products.version);
            setdescription(res.data.products.description);
            setcoverImage(res.data.products.coverImage);
            setavailability(res.data.products.availability);
            setAverageRating(res.data.products.averageRating);
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

  const addToWishList = async () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    const data = {}
  
    await axios.post(`http://localhost:8070/wishlist/add/${productId.productId}`,data,config)
    .then((res) => {
      toast.success('Product added to wishlist successfully.',{position:toast.POSITION.TOP_CENTER});
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  const addToCart = async () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    const data = {}
  
    await axios.post(`http://localhost:8070/cart/add/${productId.productId}`,data,config)
    .then((res) => {
      toast.success('Product added to Cart successfully.',{position:toast.POSITION.TOP_CENTER});
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div>
    
    <center>
    <div className="container">
      <div style={{ paddingTop: 50 }}>
        <div className="row">
          <div className="products">
          
          <div className="card-image waves-effect waves-block waves-light">
             <img className="activator"  id="aimage" src={coverImage} />
             <br/>
             </div> 
              
              <div
                style={{
                  fontSize: 50,
                  color: "gray",
                  fontFamily: 'Arial Black'
                }}
              >
                {productName}
              </div>
              <div style={{ fontSize: 25 }}>{version}</div>
  
              <div style={{ fontSize: 20, paddingBottom: 8 }}>
                Quantity: {quantity}
              </div>
              <center>              
              <div style={{ textAlign: "center",pointerEvents: "none", paddingLeft: 585 }}>
              <StarRating count={5} size={30} value={averageRating} color2={"#eb8a2f"} />
              </div>
              </center>
              <div style={{ fontSize: 24, paddingBottom: 15 }}>
                Price: Rs.{productPrice}
              </div>
              <div style={{ paddingBottom: 55 }}>
                <Button 
                  onClick={addToWishList}
                  style={{ color:"white",background:"#08368b" }}
                  variant="outlined"
                  className={classes.button}
                  startIcon={<Wishlist />}
                >
                  Wish List
              </Button>

                <Button
                 onClick={addToCart}
                  style={{ color:"white", background:"#08368b" }}
                  variant="outlined"
                  className={classes.button}
                  startIcon={<ShoppingCart />}
                >
                  Add to Cart
              </Button>

              </div>
              


            {/* Other product details */}
              <div className={classes.root} style={{paddingTop:30, align:"center", textAlign:"center"}}>
                <Paper variant="outlined" style={{textAlign:"left",backgroundColor:"#272E48" ,color:"white", borderRadius: 5, paddingTop:20}}>
                  <div className="paper1">
                    <h2><b>Product Information</b></h2>
                    <br/>
                    <table style={{ fontSize: 25 }}>
                      <tbody>
                        <tr>
                          <td>Original Title</td>
                          <td style={{ paddingLeft: 18 }}>: {originalTitle}</td>
                        </tr>
                        <tr>
                          <td>Brand Name</td>
                          <td style={{ paddingLeft: 18 }}>: {brandName}</td>
                        </tr>
                        <tr>
                          <td>Warrent</td>
                          <td style={{ paddingLeft: 18 }}>: {warrantYear}</td>
                        </tr>
                        <tr>
                          <td>Version</td>
                          <td style={{ paddingLeft: 18 }}>: {version}</td>
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td style={{ paddingLeft: 18 }}>: {description}</td>
                        </tr>
                        <tr>
                          <td>Availability</td>
                          <td style={{ paddingLeft: 18 }}>: {availability}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Paper>
              </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-8 col-xs-12 image">
            
          </div>
        </div>
        <hr />
      </div>
    </div>
    </center>
    </div>
  );
};

export default ProductInfromation;
