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
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { saveAs } from 'file-saver';

//import { confirmAlert } from 'react-confirm-alert'; 

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.generateReport = this.generateReport.bind(this);


    this.state = {
      deliverys: []

    };
  }

  refreshPage() {
    window.location.reload();

  }

  componentDidMount() {
    this.retrieveDeliverys();
  }

  //data retrive
  retrieveDeliverys() {
    axios.get("http://localhost:8070/deliverys/displaydeliverys").then(res => {
      if (res.data.success) {

        this.setState({
          deliverys: res.data.existingDeliverys

        });

        console.log(this.state.deliverys);
      }
    });
  }

  //delete data
  onDelete = (deliveryID) => {


    if (window.confirm('Are you sure you wish to delete this details?')) {
      axios.delete(`http://localhost:8070/deliverys/delete/${deliveryID}`).then((res) => {
        toast.warning('Details Deleted Successfully', { position: toast.POSITION.TOP_CENTER });

        //alert("Delete Successfully")
        this.retrieveDeliverys();

      })
    }
  }

  filterData(deliverys, searchKey) {

    const result = deliverys.filter((delivery) =>
      delivery.deliverdate.toLowerCase().includes(searchKey) ||
      delivery.useremail.toLowerCase().includes(searchKey) ||
      delivery.courierservice.toLowerCase().includes(searchKey) ||
      delivery.receiverdetails.toLowerCase().includes(searchKey) ||
      delivery.destination.toLowerCase().includes(searchKey)
    )
    this.setState({ deliverys: result })
  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8070/deliverys/displaydeliverys").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingDeliverys, searchKey)

      }

    });
  }
  async generateReport() {
    const obj = { deliverys: this.state.deliverys }
    await axios.post('http://localhost:8070/deliveryreport/generatedeliveryreport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {
      alert('Report Generated')
      console.log(res)
      console.log(res.data)
      const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlog, 'delivery.pdf');
      //window.open(res.data, '_blank');
    }).catch((err) => {
      console.log(err.message)
    })
    console.log(obj)
  }

  render() {
    return (

      <div className="pt-3" align="center" background color="red" >
        <div className=" shadow mb-8 w-100" id="cardcol">
          <div className="card-header py-3" >
            <h1 align="center"><b>&nbsp;&nbsp;&nbsp;INFACT SOLUTION DELIVERY DETAILS</b></h1><br />

            <div className="card-body" >
              <div className="col-md-8 mt-4 mx-auto"></div>

              <div className="col-lg-3 mt-2 mb-2">
                <input className="form-control" type="search"
                  placeholder="Serach" name="searchQuery" startIcon={< SearchSharpIcon />} onChange={this.handleSearchArea}>
                </input>


              </div>
              <div align="right">

                <form onSubmit={this.handleSearchArea}>
                
                <Button className="form-group" style={{ background: "#737CA1", width: 15 + "%", align: "left" }} startIcon={<KeyboardArrowDownRoundedIcon />} >
                Destination</Button>&nbsp;&nbsp;&nbsp;


                  <select onChange={this.handleSearchArea}>
                    <option value=""> </option>
                    <option value="badulla">Badulla</option>
                    <option value="colombo">Colombo</option>
                    <option value="anuradhapura">Anuradhapura</option>
                    <option value="mathara">Mathara</option>
                    <option value="jaffna">Jaffna</option>
                    <option value="ampara">Ampara</option>
                    <option value="kurunagala">Kurunagala</option>
                    <option value="galle">Galle</option>
                    <option value="kekirawa">Kekirawa</option>
                    <option value="kaluthara">Kaluthara</option>
                    <option value="gampaha">Gampaha</option>
                  </select>
                </form><br />
                <Button className="form-group" type="submit" style={{ background: "#737CA1", width: 15 + "%", align: "right" }} startIcon={<RefreshIcon />} onClick={this.refreshPage}>
                  Refresh Table</Button>&nbsp;&nbsp;&nbsp;

                <Button className="form-group" type="submit" style={{ background: "#737CA1", width: 21 + "%", align: "right" }} startIcon={<InsertDriveFileIcon />} onClick={this.generateReport}>
                  Generate Delivery Report</Button>
              </div>
              <table className="table table-hover" style={{ marginTop: '40px', background: "#FFFFFF" }} >
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Number Of Items</th>
                    <th scope="col">Deliver Date</th>
                    <th scope="col">Deliver Cost</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Courier Service</th>
                    <th scope="col">Receiver Details</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.deliverys.map((deliverys, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{deliverys.orderid}</td>
                      <td>{deliverys.numberofitems}</td>
                      <td>{deliverys.deliverdate}</td>
                      <td>{deliverys.delivercost}</td>
                      <td>{deliverys.phonenumber}</td>
                      <td>{deliverys.useremail}</td>
                      <td>{deliverys.courierservice}</td>
                      <td>
                        <a href={`/deliverys/${deliverys._id}`} style={{ textDecoration: 'none' }}>
                          {deliverys.receiverdetails}
                        </a>
                      </td>
                      <td>{deliverys.destination}</td>
                      <td>

                        <Button className="form-group" type="submit" style={{ background: "#C3FDB8", width: 10 + "%", align: "center" }} startIcon={<EditSharpIcon />} href={`/deliveryedit/${deliverys._id}`}>
                        </Button>

                        &nbsp;
                        <Button className="form-group" type="submit" style={{ background: "#F75D59", width: 10 + "%", align: "center" }} startIcon={<DeleteForeverSharpIcon />} onClick={() => this.onDelete(deliverys._id)}>
                        </Button>

                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="form-group">
                <a href="/deliveryadd">
                  <Button variant="contained" className="w-10" align="left" style={{ background: "#737CA1", width: +"%" }} startIcon={< AddCircleOutlinedIcon />}  >
                    Add Delivery Details</Button>
                </a>
              </div> </div> </div> </div></div>

    )
  }
}