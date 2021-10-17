import React, { Component } from 'react';
import axios from 'axios';
import SingleCartItem from './SingleCartItem'
import Paper from '@material-ui/core/Paper';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from "@material-ui/core/Button";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import CheckOutPage from './CheckoutPage'
import { saveAs } from 'file-saver'
import ReactToPrint from 'react-to-print';

export default class CartPage extends Component {
  constructor(props) {
    super()
    this.calculateTotal = this.calculateTotal.bind(this);
    this.totalCal = this.totalCal.bind(this);
    this.checkoutpage = this.checkoutpage.bind(this);
    // this.generateReport = this.generateReport.bind(this);

    this.state = {
      cartItems: [],
      totalPrice: 0
    }
  }

//   generatepdf(){

//     window.location.reload();
 
//  }

  async componentDidMount() {
   
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization")
     },
    }
    await axios.get('http://localhost:8070/cart/display', config)
    .then((res) => {
      this.setState({cartItems: res.data.cart})
    })
    .catch((err) => {
      console.log(err.message)
      alert(err.message)
    })
    this.calculateTotal()
  }

  async totalCal() {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization")
     },
    }
    await axios.get('http://localhost:8070/cart/display', config)
    .then((res) => {
      this.setState({cartItems: res.data.cart})
    })
    .catch((err) => {
      console.log(err.message)
      alert(err.message)
    })
    this.calculateTotal()
  }

  calculateTotal() {
    let total = 0
    this.state.cartItems.map((item) => {
      total = total + item.totalPrice
      console.log(total)
    })
    this.setState({totalPrice: total})
  }
  checkoutpage() {
    window.location = "/checkout"
  }


//   async generateReport() {

//     const obj = { cart: this.state.cart }

//     await axios.post('http://localhost:8070/generatecartreport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {

//         //alert('Report Generated')

//         toast.success('Report Generated Successfully', { position: toast.POSITION.TOP_CENTER })
//         console.log(res)
//         console.log(res.data)
//         const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
//         saveAs(pdfBlog, 'cart.pdf');

//         //window.open(res.data, '_blank');
//     }).catch((err) => {
//         console.log(err.message)
//     })
//     console.log(obj)
// }

  render() {
    return (
      <div class="bod" ref={(el) => (this.componentRef = el)}>
        <div className="container">
        <div className="pt-3">
          {this.state.cartItems.length > 0 ? 
            <div className="row">
            <div className="col-lg-7">
              {this.state.cartItems.map((item) => (
                <SingleCartItem key={item._id} 
                  productId={item.productId}
                  productImage={item.productImage}
                  productname={item.productname}
                  quantity={item.quantity}
                  price={item.productPrice}
                  cartId={item._id}
                />
              ))}
            </div>

            <div className="col-lg-4">
              <Paper style={{ padding: 10, borderRadius: 8 ,backgroundColor: "#272E48"}} variant="outlined">
                <h3 className="text-color font-weight-bold" style={{color:"white"}}>Order Summary</h3>
                <h5 className="text-color d-inline" style={{color:"white"}}>Total Items</h5>
                <h5 className="text-color d-inline" style={{marginLeft: 280, color:"white"}}>{this.state.cartItems.length}</h5>
                <h4 className="text-color pt-1"style={{marginRight: "18rem" ,color:"white"}}>Total Price</h4>
                <h4 className="text-color d-inline" style={{color:"white"}}>LKR {this.state.totalPrice}.00</h4>
                
                <IconButton size="small" aria-label="add an alarm"
                style={{background: "#ff8c00", marginLeft: 225}} className="d-inline mb-2" onClick={this.totalCal}>
                  <AutorenewIcon style={{background: "#ff8c00", marginRight: 30}}/>
                </IconButton>
                &nbsp;
                &nbsp;
                &nbsp;
                <Button variant="contained" className="w-10" style={{background: "#ff8c00", width: 100+"%"}}
                startIcon={<ShoppingBasketIcon />} disableElevation type="submit"
                onClick={this.checkoutpage}>purchase now</Button>

                {/* <Button variant="contained" className="w-10 mt-2" style={{ width: 100+"%"}}
                startIcon={<InsertDriveFileIcon />} disableElevation type="submit"
                onClick={this.generateReport}>dowload my cart details</Button> */}
                <div>
        <br />
          <ReactToPrint
            trigger={() => <Button variant="contained" className="w-10 mt-2" style={{ width: 100+"%"}} startIcon={<InsertDriveFileIcon />} className="generateReport1 btn btn-info btn-lg" type="button"><i class="fas fa-redo pr-2" aria-hidden="true"></i> Download your Cart Details
            </ Button>}
             content={() => this.componentRef}/>
            <br /><br /><br />  
        </div>  

              </Paper>  
            </div>
          </div> : ""}
        </div>
       </div>
       </div>
    )
  }
}