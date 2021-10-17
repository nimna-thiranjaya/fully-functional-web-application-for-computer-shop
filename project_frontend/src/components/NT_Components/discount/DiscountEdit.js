
import React, { Component } from "react";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar  from '../../Project_Layouts/Navbar/Navbar';
 
 
export default class DiscountEdit extends Component{
    constructor(props){
        super(props);
        this.onChangePercentage = this.onChangePercentage.bind(this);
        this.onChangeAmmount = this.onChangeAmmount.bind(this);
 
        this.state ={
            productName : "",
            percentage : "",
            marketPrice : "",
            ammount : "",
            startingdate : "",
            endingdate : ""
        };
    }
 
    handleInputChange = (e) =>{
        const {name,value} = e.target;
 
        this.setState({
            ...this.state,
            [name]: value
        })
    }
 
    onChangeAmmount(e) {
        this.setState({
          ammount: e.target.value,
        });
      }
 
    async onChangePercentage(e) {
        await this.setState({
          percentage: e.target.value,
        });
        console.log(this.state.percentage)
        await this.setState({
          ammount: (this.state.marketPrice * (100 - this.state.percentage)) / 100
        })
      }
 
    onSubmit =(e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
 
        const {productName, percentage, marketPrice ,ammount , startingdate , endingdate} = this.state;
 
        const data = {
            productName : productName,
            percentage : percentage,
            marketPrice : marketPrice,
            ammount : ammount,
            startingdate : startingdate,
            endingdate : endingdate
        }
        console.log(data);
 
 
        axios.put(`http://localhost:8070/discount/update/${id}`,data).then((res)=>{
            if(res.data.success){
                //alert("discount update successfully");
                toast.success('Discount Update Successfully',{position:toast.POSITION.TOP_CENTER});
                window.setTimeout(function() {
                    window.location.href = '/discount';
                  }, 2500);
                this.setState({
                    productName : "",
                    percentage : "",
                    marketPrice : "",
                    ammount : "",
                    startingdate : "",
                    endingdate : "",
                })
            }
 
        })
    };
 
        componentDidMount(){
            const id = this.props.match.params.id;
   
            axios.get(`http://localhost:8070/discount/display/${id}`).then((res) => {
                if(res.data.success){
                    this.setState({
                        productName :res.data.discount.productName,
                        percentage : res.data.discount.percentage,
                        marketPrice : res.data.discount.marketPrice,
                        ammount : res.data.discount.ammount,
                        startingdate : res.data.discount.startingdate,
                        endingdate : res.data.discount.endingdate,
                    });
                    console.log(this.state.discount)
                }
            });
 
   
 
    }
 
    render(){
        return(
 
        <div>
            <Navbar/>
           
            <div className="pt-3" align="center" background color="red">
            <div className="card shadow mb-8 w-50">
              <div className="card-header py-3">
             <h1 className="m-0 font-weight-bold text-dark" id="randy">Update Discount Details</h1><br/>
              </div>
              <div className="card-body">
              <div className = "col-md-8 mt-4 mx-auto">
             <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Product Name</label>
                        <input type="text" className="form-control" id="productName" onChange={this.handleInputChange} name="productName" value={this.state.productName} readonly="true"/>
                    </div>
 
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Percentage</label>
                        <input type="text" className="form-control" id="percentage" onChange={this.onChangePercentage} name="percentage" value={this.state.percentage}/>
                    </div>
 
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>market Price</label>
                        <input type="text" className="form-control" id="realprice" onChange={this.handleInputChange} name="realprice" value={this.state.marketPrice}/>
                    </div>
 
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Offer Ammount</label>
                        <input type="text" className="form-control" id="newprice" onChange={this.onChangeAmmount} name="newprice" value={this.state.ammount}/>
                    </div>
 
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Starting Date</label>
                        <input type="date" className="form-control" id="startingdate"onChange={this.handleInputChange} name="startingdate" value={this.state.startingdate}/>
                    </div>
 
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Ending Date</label>
                        <input type="date" className="form-control" id="endingdate"onChange={this.handleInputChange} name="endingdate" value={this.state.endingdate}/>
                    </div>
                    <br/>
 
                    <div>
                    <Button className="form-group" type="submit"style={{background: "#F75D59", width: 100+"%"}} startIcon={< CheckCircleSharpIcon/>}  onClick={this.onSubmit}>
                Update Discount</Button>  
                    </div>
                </form>    
                <br/>
            </div>
            </div>
            </div></div></div>        
        )
    }
 
}