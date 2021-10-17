import React, { Component } from 'react'
import axios from 'axios';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import Button from '@material-ui/core/Button';
//import img1 from '../images/Lap.jpg';
//import Avatar from '@material-ui/core/Avatar';

//import { makeStyles } from '@material-ui/core/styles';
//import { colors, decomposeColor } from '@material-ui/core';


export default class DeliveryDetails extends Component {
    constructor(props){
        super(props);
       
        this.state={
            deliverys:{}
        };
    }


    componentDidMount(){
        const deliveryID = this.props.match.params.deliveryID;

        axios.get(`http://localhost:8070/deliverys/${deliveryID}`).then((res)=>{
        if (res.data.success){
        this.setState({
            deliverys:res.data.deliverys

        });
        console.log(this.state.deliverys);
    }  
    });

}



   render() {

    const {orderid,numberofitems, deliverdate,delivercost,phonenumber,useremail,courierservice,receiverdetails,destination} = this.state.deliverys;

  

    return (
     

        <div align="center" style= {{marginTop:'20px'}}>
            <h4>{receiverdetails}</h4>
            <h4>{useremail}</h4>
            <hr/>
         

    
        <dl className="row">
    <div className="pt-3" align="center" background color="red">
      <div className="card shadow mb-8 w-50">
        <div className="card-header py-3">
        
             <dt className="col-sm-3">Order ID</dt>
              <dd className="col-sm-9">{orderid}</dd>
         
             <dt className="col-sm-3">Number Of Items</dt>
              <dd className="col-sm-9">{numberofitems}</dd>

              <dt className="col-sm-3">Deliver Date</dt>
              <dd className="col-sm-9">{deliverdate}</dd>

              <dt className="col-sm-3">Deliver Cost</dt>
             <dd className="col-sm-9">{delivercost}</dd>

             <dt className="col-sm-3">Phone Number</dt>
              <dd className="col-sm-9">{phonenumber}</dd>

              <dt className="col-sm-3">Courier Service</dt>
              <dd className="col-sm-9">{courierservice}</dd>

              <dt className="col-sm-3">Destination</dt>
              <dd className="col-sm-9">{destination}</dd>

              </div>  
           </div> 
           </div> 
           <div>
           <br/>
           <a href="/">
        <Button className="form-group" type="submit"style={{background: "#C48189", width: 10+"%"}} startIcon={<FastForwardRoundedIcon/>}  onClick={this.onSubmit}> 
        Continoue</Button>
        </a>   
    </div>
  </dl>
     </div>
     
        
    )

}
}
  
