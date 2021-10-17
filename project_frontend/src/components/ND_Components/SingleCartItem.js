import React, {useState,Component} from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CartPage from './CartPage'

const SingleCartItem = ({productId, productImage, productname, quantity, price, cartId}) => {
  const [newQuantity, setNewQuantity] = useState(quantity)
  const [netValue, setNewValue] = useState(price * quantity)

  const incrementQuantity = async () => {
    let q = newQuantity + 1
    let net = q * price
    setNewQuantity(q)
    setNewValue(net)

    const data = {
      quantity: q,
      price: price,
      totalPrice: net
    }

    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        "content-type": "application/json",
      },
    };

    await axios.put(`http://localhost:8070/cart/update/${cartId}`, data, config)
    .then((res) => {
      console.log(res.data.status)
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  const decrementQuantity = async () => {
    if (newQuantity > 1) {
      let dq = newQuantity - 1
      let dnet = dq * price
      setNewQuantity(dq)
      setNewValue(dnet)

      const data = {
        quantity: dq,
        price: price,
        totalPrice: dnet
      }
  
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "content-type": "application/json",
        },
      };
  
      await axios.put(`http://localhost:8070/cart/update/${cartId}`, data, config)
      .then((res) => {
        console.log(res.data.status)
      })
      .catch((err) => {
        alert(err.message)
      })
    } else {
      setNewQuantity(1)
    }
  }

  const deleteItem = async () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        "content-type": "application/json",
      },
    };

    await axios.delete(`http://localhost:8070/cart/delete/${cartId}`, config)
      .then((res) => {
        console.log(res.data.status)
        window.location = "/cart"
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div class="bod">
     <div>
       <div className="pb-3">
        <Paper style={{ padding: 10, borderRadius: 10,backgroundColor: "#272E48" }} >
          <div className="row">
            <div className="col-lg-3">
              <img src={productImage} width={100}/>
            </div>
            <div className="col-lg-8">
              <div className="pl-lg-2">
                <h5 className="text-color d-inline" style={{color:"white"}} >{productname}</h5>
                <h5 className="text-color" style={{color:"white"}}>LKR {price}.00</h5>
                <h6 className="text-muted">Item Code - {productId}</h6>

                <div className="pt-lg-2">
                  {/* { <IconButton size="small" aria-label="add an alarm"
                  style={{background: "#ff8c00", marginRight: 20}} className="d-inline mb-"
                  onClick={decrementQuantity}>
                  <RemoveIcon style={{ marginRight: 30}}/>
                  </IconButton> } */}

                  { <Button  className="btn btn-xl btn-primary" style={{
                              backgroundColor: "#f5960c",
                              color: "#ffff",
                              borderRadius: "1rem",
                              width: "2rem",
                              height: "2rem",
                            }}
                  onClick={incrementQuantity}>
                    <h2 className="t-2"style={{
                    marginRight:"1rem",
                    color: "black"
                    
                  }}>+</h2></Button>   }
                   
                  &nbsp;
                  &nbsp;    

                    <h3 className="text-color d-inline">{newQuantity}</h3>
                  {/* { <IconButton size="small" aria-label="add an alarm"
                  style={{background: "#ff8c00", marginLeft: 20}} className="d-inline mb-3"
                  onClick={incrementQuantity}>
                  <AddIcon style={{ marginRight: 30}}/>
                  </IconButton> } */}

                  &nbsp;
                  &nbsp;  

                  { <Button  className="btn btn-xl btn-primary" style={{
                    backgroundColor: "#f5960c",
                    color: "#ffff",
                    borderRadius: "1rem",
                    width: "2rem",
                    height: "2rem",
                    
                  }}
                  onClick={decrementQuantity}><h1 style={{
                    marginRight:"1rem",
                    color: "black"
                  }}>-</h1></Button>       }

                  &nbsp;
                  &nbsp;
                  &nbsp;      

                  <h3 className="text-color font-weight-bold pt-lg-2 d-inline ml-5" style={{color:"white"}}>LKR {netValue}.00</h3>
                </div>

                <div className="d-flex justify-content-end">

                  { <IconButton size="small" aria-label="add an alarm"
                  style={{background: "#800000", marginLeft: 50}} className="d-inline"
                  onClick={deleteItem}>
                  <DeleteIcon style={{ marginRight: 30}}/>
                  </IconButton> }

                   {/* <Button  className="btn btn-xl btn-primary" style={{
                    backgroundColor: "Red",
                    color: "#ffff",
                    borderRadius: "50rem",
                    width: "3rem",
                    height: "2rem",
                    marginLeft:"3rem"
                    
                  }}
                  onClick={deleteItem}><text style={{
                    marginRight:"1rem",
                    color: "black"
                  }}>DELETE</text></Button>       */}

                </div>
              </div>
            </div>
          </div>
        </Paper>
       </div>
       </div>
    </div>
  )
};

export default SingleCartItem