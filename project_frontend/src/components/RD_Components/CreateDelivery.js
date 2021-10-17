import axios from 'axios';
import React, { Component, useState } from 'react'
import Button from "@material-ui/core/Button";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './style.css';
import Navbar from '../Project_Layouts/Navbar/Navbar';
import Ordertable from './OrderHome';



toast.configure()  

export default function CreateDelivery() {
  

  const [orderid, setorderid] = useState("");;
  const [numberofitems, setnumberofitems] = useState("");
  const [deliverdate, setdeliverdate] = useState("");
  const [delivercost, setdelivercost] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [useremail, setuseremail] = useState("");
  const [courierservice, setcourierservice] = useState("");
  const [receiverdetails, setreceiverdetails] = useState("");
  const [destination, setdestination] = useState("");

  const sendData = async (e)=>{
    e.preventDefault();

    let data = {
      orderid:orderid,
      numberofitems: numberofitems,
      deliverdate: deliverdate,
      delivercost: delivercost,
      phonenumber: phonenumber,
      useremail: useremail,
      courierservice: courierservice,
      receiverdetails: receiverdetails,
      destination: destination
  
    };
    
  
    axios.post("http://localhost:8070/deliverys/deliveryadd",data)
    .then(()=>{
      toast.success('Delivery Added Successfully',{position:toast.POSITION.TOP_CENTER})
      window.setTimeout(function() {
        window.location.href = '/delivery';
    }, 2000);
    }).catch((err)=>{
      console.log(data)
      toast.warning('Registration Error Recheck All Data',{position:toast.POSITION.TOP_CENTER});
    })
  
      
      setnumberofitems("");
      setdeliverdate("");
      setdelivercost("");
      setphonenumber("");
      setuseremail("");
      setcourierservice("");
      setreceiverdetails("");
      setdestination("");
    
  }
   
       return (
        <div>
        <Navbar/>
        <br/><br/><br/>
         <Ordertable />
        <br/><br/><br/> 
         <div className="pt-3" align="center" >
         <div className="card shadow mb-8 w-50">
           <div className="card-header py-3">
        
           <h1 className="m-0 font-weight-bold text-dark" id="randy">Create New Delivery</h1><br/>
           </div>
           <div className="card-body">
           <div className = "col-md-8 mt-4 mx-auto">

           <form className="needs-validation" onSubmit={sendData}>

           <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}> Order ID </label>
                <input type="text"
                  className="form-control"
                  // pattern="[a-z,A-Z,][0,9]"
                  title="Please Enter Valid Order ID"
                  name="orderid"
                   id="orderid"
                   placeholder="Enter Order ID"
                   onChange={(e) => {
                    setorderid(e.target.value)
                   }}
                  required />
              </div>

              <div className="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> Number Of Items </label>
                 <input type="number"
                  className="form-control"
                  pattern="[0-9]"
                  title="Please Enter Only Numbers"
                   name="numberofitems"
                   id="numberofitems"
                    placeholder="Enter Number Of Items"
                onChange={(e)=>{
                  setnumberofitems(e.target.value)}}
                 required/>
              </div>



              <div className ="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}>Deliver Date</label>
                 <input 
                  type="date" 
                  className="form-control"
                  name="deliverdate" 
                  id="deliverdate" 
                  title="Please Enter Valid Date"
                  placeholder="Enter Deliver Date"
                  onChange={(e)=>{
                  setdeliverdate(e.target.value)}}
                />
              </div>

              
              <div className ="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}>Deliver Cost</label>
                 <input 
                  type="text"
                  className="form-control" 
                  name="delivercost"
                  id="delivercost" 
                  title="Please Enter Valid Cost"
                  placeholder="Enter Deliver Cost" 
                  onChange={(e)=>{
                  setdelivercost(e.target.value)}}
                required/>
              </div>

             
              <div className ="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}>Phone Number</label>
                 <input 
                  type="text" 
                  className="form-control"
                  name="phonenumber"
                  id="phonenumber"
                  maxLength="10"
                  pattern ="\d{10}"
                  title="Please Enter Valid Phone Number"
                  placeholder="Enter Phone Number"
                  onChange={(e)=>{
                  setphonenumber(e.target.value)}}
                required/>
              </div>

            
              <div className ="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}>User Email</label>
                 <input 
                  type="email"
                   className="form-control"
                   name="useremail" 
                   id="useremail" 
                   placeholder="Enter User Email"
                   pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                   title="Please Enter Valid Email" 
                   onChange={(e)=>{
                   setuseremail(e.target.value)}}
                required/>
              </div>

             
              <div className ="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}>Courier Service</label>
                 <input 
                  type="text"
                  className="form-control"
                  name="courierservice"
                  id="courierservice"
                  pattern="[A-Za-z]{3-20}"
                  title="Please Enter Valid Courier Service"
                  placeholder="Enter Courier Service" 
                  onChange={(e)=>{
                  setcourierservice(e.target.value)}}
                required/>
              </div>

              
              <div className ="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}>Receiver Details</label>
                 <input 
                 type="text" 
                 className="form-control" 
                 name="receiverdetails"
                 id="receiverdetails"
                 pattern="[A-Za-z]{3-20}"
                   title="Please Enter Valid Receiver Details" 
                 placeholder="Enter Receiver Details" 
                
                onChange={(e)=>{
                  setreceiverdetails(e.target.value)}}
                required/>
              </div>

              
              <div className ="form-group" style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}>Destination</label>
                 <input 
                 type="text"
                  className="form-control" 
                  name="destination" 
                  id="destination" 
                  pattern="[A-Za-z]{3-20}"
                   title="Please Enter Valid Destination"
                  placeholder="Enter Destination" 
               
                onChange={(e)=>{
                  setdestination(e.target.value)}}
                required/>
              </div>
         

              <div className="form-group">
                <Button className="form-group" type="submit" style={{ marginTop: '5px', background: "#F75D59", width: 100 + "%" }} startIcon={<LocalShippingIcon />}>

                  &nbsp; Add Delivery
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
 </div>
  )

}