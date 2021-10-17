import React, { Component } from "react";
import axios from 'axios';
 
export default class DisplayOneDiscount extends Component{
    constructor(props){
        super(props);
 
        this.state ={
          discount:{}
        };
    }
 
    componentDidMount(){
        const id = this.props.match.params.id;
 
        axios.get(`http://localhost:8070/discount/display/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    discount:res.data.discount
                });
                console.log(this.state.discount)
            }
        });
       
 
    }
 
    render(){
        const {productName,percentage,realprice,newprice,startingdate,endingdate} = this.state.discount;
        return(
            <div className="container" style ={{marginTop:'20px'}}>
 
                <dl className="row">
                    <dt className="col-sm-3">Product Name :</dt>
                    <dd className="col-sm-9">{productName}</dd>
 
                    <dt className="col-sm-3">Percentage :</dt>
                    <dd className="col-sm-9">{percentage}</dd>
 
                    <dt className="col-sm-3">Real Price :</dt>
                    <dd className="col-sm-9">{realprice}</dd>
 
                    <dt className="col-sm-3">New Price :</dt>
                    <dd className="col-sm-9">{newprice}</dd>
 
                    <dt className="col-sm-3">Starting Date :</dt>
                    <dd className="col-sm-9">{startingdate}</dd>
 
                    <dt className="col-sm-3">Ending Date :</dt>
                    <dd className="col-sm-9">{endingdate}</dd>
                </dl>
            </div>
        )
    }
 
}