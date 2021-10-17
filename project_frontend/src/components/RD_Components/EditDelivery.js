import React, { Component } from 'react'
import axios from 'axios';
import Button from "@material-ui/core/Button";
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
//import { Modal } from "react-bootstrap";
import Navbar from '../Project_Layouts/Navbar/Navbar';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default class EditDelivery extends Component {

  constructor(props){
    super(props);
    this.state={
         orderid:"",
         numberofitems:"",
         deliverdate:"",
         delivercost:"",
         phonenumber:"",
         useremail:"",
         courierservice:"",
         receiverdetails:"",
         destination:""

    }
}

handleInputChange = (e) =>{
    const{name,value} = e.target;

    this.setState({
       ...this.state,
       [name]:value

    })
}

onSubmit = (e) =>{
  

 e.preventDefault();
 const deliveryID = this.props.match.params.deliveryID;

 const {orderid,numberofitems,deliverdate,delivercost,phonenumber,useremail,courierservice,receiverdetails,destination} = this.state;
 const data ={
       orderid:orderid,
       numberofitems:numberofitems,
       deliverdate:deliverdate,
       delivercost:delivercost,
       phonenumber:phonenumber,
       useremail:useremail,
       courierservice:courierservice,
       receiverdetails:receiverdetails,
       destination:destination

 }

console.log(data)

axios.put(`http://localhost:8070/deliverys/update/${deliveryID}`,data).then((res) =>{
if(res.data.success){
  if (window.confirm('Are you sure you wish to update this details?')) {
  toast.success('Delivery Updated Successfully',{position:toast.POSITION.TOP_CENTER});
  window.setTimeout(function() {
    window.location.href = '/delivery';
  }, 2000);

  this.setState(
  /*alert("Delivery Updated Successfully")
this.setState(*/
  {
   orderid:"",
   numberofitems:"",
   deliverdate:"",
   delivercost:"",
   phonenumber:"",
   useremail:"",
   courierservice:"",
   receiverdetails:"",
   destination:""

     }
    
     
    )
  }
}
}
)
}

  componentDidMount(){
    const deliveryID = this.props.match.params.deliveryID;

    axios.get(`http://localhost:8070/deliverys/${deliveryID}`).then((res)=>{
    if (res.data.success){
    this.setState({
       orderid:res.data.deliverys.orderid,
       numberofitems:res.data.deliverys.numberofitems,
       deliverdate: res.data.deliverys.deliverdate,
       delivercost:res.data.deliverys.delivercost,
       phonenumber:res.data.deliverys.phonenumber,
       useremail:res.data.deliverys.useremail,
       courierservice:res.data.deliverys.courierservice,
       receiverdetails:res.data.deliverys.receiverdetails,
       destination:res.data.deliverys.destination
    });
    console.log(this.state.deliverys);
}
});

}

  render() {
      return (
        <div>
          <Navbar/>
        <div className="pt-3" align="center" >
         <div className="card shadow mb-8 w-50">
           <div className="card-header py-3">
          <h1 className="m-0 font-weight-bold text-dark" id="randy">Update Delivery Details</h1><br/>
          </div>
           <div className="card-body">
           <div className = "col-md-8 mt-4 mx-auto">
          <form className="needs-validation" noValidate>
  
          <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}> Order ID </label>
                <input type="text" className="form-control" name="orderid" placeholder="Enter Order ID" value={this.state.orderid}
                onChange={this.handleInputChange} readOnly/>
             </div>
  
             <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}> Number Of Items </label>
                <input type="number" className="form-control" name="numberofitems" placeholder="Enter Number Of Items" value={this.state.numberofitems}
                onChange={this.handleInputChange} readonly/>
             </div>
  
  
  
             <div className ="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Deliver Date</label>
                <input type="date" className="form-control" name="deliverdate" placeholder="Enter Deliver Date" Calander value={this.state.deliverdate}
               onChange={this.handleInputChange}/>
             </div>
  
             
             <div className ="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Deliver Cost</label>
                <input type="text" className="form-control" name="delivercost" placeholder="Enter Deliver Cost" value={this.state.delivercost}
               onChange={this.handleInputChange}/>
             </div>
  
            
             <div className ="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Phone Number</label>
                <input type="text" className="form-control" name="phonenumber" placeholder="Enter Phone Number" value={this.state.phonenumber}
               onChange={this.handleInputChange}/>
             </div>
  
           
             <div className ="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>User Email</label>
                <input type="text" className="form-control" name="useremail" placeholder="Enter User Email" value={this.state.useremail}
               onChange={this.handleInputChange}/>
             </div>
  
            
             <div className ="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Courier Service</label>
                <input type="text" className="form-control" name="courierservice" placeholder="Enter Courier Service" value={this.state.courierservice}
               onChange={this.handleInputChange}/>
             </div>
  
             
             <div className ="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Receiver Details</label>
                <input type="text" className="form-control" name="receiverdetails" placeholder="Enter Receiver Details" value={this.state.receiverdetails}
               onChange={this.handleInputChange}/>
             </div>
  
             
             <div className ="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Destination</label>
                <input type="text" className="form-control" name="destination" placeholder="Enter Destination" value={this.state.destination}
               onChange={this.handleInputChange}/>
             </div>
  <div>
        <Button className="form-group" type="submit"style={{background: "#F75D59", width: 100+"%"}} startIcon={< CheckCircleSharpIcon/>}  onClick={this.onSubmit}> 
        Update Delivery</Button>   
    </div>

           
          </form>          
          </div>
       </div>
       </div>
       </div>
       </div>
       
  
      )
  
  }
  
  }