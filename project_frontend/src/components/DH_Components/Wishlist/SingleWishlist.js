import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography'
import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const SingleWishList = ({productId, productName, productPrice, coverImage}) => {


  return (
    <div style={{width: 230, paddingBottom: 15}}>
      <div class="card">
        <div style={{overflow: 'hidden', height: 270}}>
          <img src={coverImage} width={230}/>
        </div>
        <div class="content text-color p-2">
          <a class="header text-color " style={{fontSize: 19}}>
          {productName.length > 20 ? <div>{productName.substr(0, 21)}
          </div> : productName}
          </a>
          <Typography component={'span'} variant={'body2'}>
            <div className="text-color" style={{fontSize: 16, paddingBottom: 8}}>LKR {productPrice}.00</div>
          </Typography>
        </div>
        <Button variant="contained" className="w-10 mb-2 ml-2 mr-2" style={{background: "#ff8c00", width: 92+"%"}}
          startIcon={<ShoppingCart />} disableElevation type="submit">add to cart</Button>
          <Button variant="contained" className="w-10 mb-2 ml-2 mr-2" style={{background: "#e64a19", width: 92+"%"}}
          startIcon={<DeleteIcon />} disableElevation type="submit">remove</Button>
        <div class="extra content">
        </div>
      </div>
    </div>
  )
}

export default SingleWishList