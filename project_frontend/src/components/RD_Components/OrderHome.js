import React, { Component } from "react";
import axios from 'axios';
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import { saveAs } from 'file-saver';

//import { confirmAlert } from 'react-confirm-alert'; 

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default class Home extends Component {
  constructor(props) {
    super(props);
  


    this.state = {
      orders: []

    };
  }

  refreshPage() {
    window.location.reload();

  }

  componentDidMount() {
    this.retrieveOrders();
  }

  //data retrive
  retrieveOrders() {
    axios.get("http://localhost:8070/HOrders/displayorder").then(res => {
      if (res.data.success) {

        this.setState({
          orders: res.data.existingOrder

        });

        console.log(this.state.orders);
      }
    });
  }

  
  render() {
    return (

      <div className="pt-3" align="center" background color="red" >
        <div className=" shadow mb-8 w-100" id="cardcol">
          <div className="card-header py-3" >
            <h1 align="center" id="randy"><b>&nbsp;&nbsp;&nbsp;INFACT SOLUTION ORDER DETAILS</b></h1><br />

            <div className="card-body" >
              <div className="col-md-8 mt-4 mx-auto"></div>

              
              
              <table className="table table-hover" style={{ marginTop: '40px', background: "#FFFFFF" }} >
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer Email</th>
                    <th scope="col">Customer Address</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Deliver Date</th>
                    <th scope="col">Handover Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orders.map((orders, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                       
                          {orders._id}
                       
                      </td>
                      <td>{orders.customerName}</td>
                      <td>{orders.customerEmail}</td>
                      <td>{orders.cutomerAddress}</td>
                      <td>{orders.totalPrice}</td>
                      <td>{orders.description}</td>
                      <td>{orders.deliveryDate}</td>
                      <td>{orders.handOverDate}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>

             
              </div> </div> </div> </div>

    )
  }
}