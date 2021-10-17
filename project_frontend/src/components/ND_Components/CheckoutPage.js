import React, { Component } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import swal from "sweetalert";

export default class CheckOutPage extends Component {
  constructor(props) {
    super(props);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.submitCheckout = this.submitCheckout.bind(this);

    this.state = {
      cartItems: [],
      totalPrice: 0,
      userName: "",
      userEmail: "",
      userPhone: "",
      address1: "",
      address2: "",
      city: "",
      province: "",
      postalCode: "",
      country: "",
      description: "",
    }
  }

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
    })

    await axios.get('http://localhost:8070/customer/profile', config)
    .then((res) => {
      this.setState({
        userName: res.data.Cus.name,
        userEmail: res.data.Cus.email,
        userPhone: res.data.Cus.phone,
        address1: res.data.Cus.add1,
        address2: res.data.Cus.add2,
        city: res.data.Cus.city,
        province: res.data.Cus.area,
        country: res.data.Cus.country,
        postalCode: res.data.Cus.pscode
      })
    })
    .catch((err) => {
      console.log(err.message)
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

  async submitCheckout(e) {
    e.preventDefault()
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    const data = {
      cartItems: this.state.cartItems,
      totalPrice: this.state.totalPrice,
      description: this.state.description
    }
    await axios.post('http://localhost:8070/order/create', data, config)
    // .then((res) => {
    //   alert('success')
    //   window.location="/inventory"
    // })
    .catch((err) => {
      console.log(err)
    })
    swal({
      title: "Success",
      text: "Your order has been placed successfully!",
      icon: "success",
    }).then(function () {
      window.location = "/home1";
    });
  }


  render() {
    return (
      <div class="bod">
       <div className="container" >
        <div className="pt-5">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-2" style={{backgroundColor: "#272E48" }}>
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-center">
                  <h1 className="h3 text-color p-4">Please Check Details Before Purchase</h1>
                </div>
                <h3 className="text-color d-inline pl-5 font-weight-bold">Total Price - LKR {this.state.totalPrice}.00</h3>
                <h5 className="text-color pl-5">Number of Items - {this.state.cartItems.length}</h5>
                <form className="user pl-5 pr-5 pb-5" onSubmit={this.submitCheckout}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                    <label className="text-muted">Your name</label>
                      <input type="text" className="form-control form-control-user" value={this.state.userName}  required/>
                     
                    </div>
                    <div className="col-sm-6">
                    <label className="text-muted">please check your email</label>
                      <input type="text" className="form-control form-control-user" value={this.state.userEmail} required/>
                     
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                    <label className="text-muted">check your phone number</label>
                      <input type="text" className="form-control form-control-user" value={this.state.userPhone}  required/>
                      
                    </div>
                    <div className="col-sm-6">
                    <label className="text-muted">please check your postal code</label>
                      <input type="text" className="form-control form-control-user" value={this.state.postalCode} required
                      onChange={e => this.setState({postalCode: e.target.value})}/>
                     
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-4">
                    <label className="text-muted">address 1</label>
                      <input type="text" className="form-control form-control-user" value={this.state.address1} required
                      onChange={e => this.setState({address1: e.target.value})}/>
                     
                    </div>
                    <div className="col-sm-4">
                    <label className="text-muted">address 2</label>
                      <input type="text" className="form-control form-control-user" value={this.state.address2} required
                      onChange={e => this.setState({address2: e.target.value})}/>
                     
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                    <label className="text-muted">check your city</label>
                      <input type="text" className="form-control form-control-user" value={this.state.city}  required
                      onChange={e => this.setState({city: e.target.value})}/>
                     
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                    <label className="text-muted">check your province</label>
                      <input type="text" className="form-control form-control-user" value={this.state.province}  required
                      onChange={e => this.setState({province: e.target.value})}/>
                      
                    </div>
                    <div className="col-sm-6">
                       <label className="text-muted">please check your country</label>
                      <input type="text" className="form-control form-control-user" value={this.state.country} required/>
                     
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1" className="text-color">Add additional details if you want to</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    onChange={(e) => {this.setState({description: e.target.value})}}></textarea>
                  </div>
                  <Button variant="contained" className="w-10" style={{background: "#ff8c00", width: 50+"%" ,marginLeft:"20rem"}}
                  startIcon={<MenuBookIcon />} disableElevation type="submit">confirm checkout</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}