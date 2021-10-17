import React, { Component } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
toast.configure()
 
export default class AddDiscount extends Component{
    constructor(props){
        super(props);
 
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeMarketPrice = this.onChangeMarketPrice.bind(this);
        this.onChangePercentage = this.onChangePercentage.bind(this);
        this.onChangeAmmount = this.onChangeAmmount.bind(this);
 
        this.state ={
            productName : "",
            percentage : "",
            marketPrice: "",
            ammount: 0,
            startingdate: "",
            endingdate : "",
            itemNames: [],
            itemId: "",
            discounts: [],
        };
    }
 
    async componentDidMount() {
        await axios.get('http://localhost:8070/discount/getallproductname')
        .then((res) => {
          this.setState({itemNames: res.data.items});
        })
        .catch((err) => {
          alert(err.message)
        })
      }
 
    handleInputChange = (e) =>{
        const {name,value} = e.target;
 
        this.setState({
            ...this.state,
            [name]: value
        })
    }
 
    onChangeProductName(e) {
        let itemId = e.target.options[e.target.selectedIndex].id
        this.setState({
          productName: e.target.value,
          itemId: itemId
         })
      }
 
      onChangeMarketPrice(e) {
        this.setState({
          marketPrice: e.target.value,
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
 
      onChangeAmmount(e) {
        this.setState({
          ammount: e.target.value,
        });
      }
   
 
    onSubmit =(e) =>{
        e.preventDefault();
 
        const {itemId,productName, percentage, marketPrice , ammount , startingdate , endingdate} = this.state;
 
        const data = {
            itemId:itemId,
            productName : productName,
            percentage : percentage,
            marketPrice : marketPrice,
            ammount : ammount,
            startingdate : startingdate,
            endingdate : endingdate
        }
        console.log(data);
 
 
 
 
        axios.post("http://localhost:8070/discount/add",data).then((res)=>{
            if(res.data.success){
              toast.success('discount added successfully',{position:toast.POSITION.TOP_CENTER});
                this.setState({
                    productName : "",
                    percentage : "",
                    marketPrice : "",
                    ammount : "",
                    startingdate : "",
                    endingdate : "",
                })
            }else{
                toast.success('Error in discount adding',{position:toast.POSITION.TOP_CENTER});
            }
        })
 
        axios.post("http://localhost:8070/discount/addOffers",data).then((res)=>{
        })
    }
 
    render(){
        return(
            <div className="pt-3" align="center" >
 
            <div className="shadow mb-50 w-50" id="cardcol" >
              <div className="card-header py-3">
              <center><h4 className="m-0 font-weight-bold text-primary">
                        Add Discounts
                        </h4></center>
              </div>
              <div className="card-body">
            <div className = "col-md-8 mt-4 mx-auto">
            <form onSubmit={this.onSubmit}>
       
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <select required className="form-control" onChange={this.onChangeProductName}>
                    <option value=""> Please Choose Product</option>
                    {this.state.itemNames.map((item) => (
                    <option key={item._id} id={item._id}>
                      {item.productName}
                    </option>
                  ))}
                    </select>  
                    </div>
 
                    <div className="mb-3">
                        <label className="form-label">Market Price</label>
                        <input type="text" className="form-control" id="realprice" onChange={this.onChangeMarketPrice} name="realprice" value={this.state.marketPrice}/>
                    </div>
 
                    <div className="mb-3">
                        <label className="form-label">Percentage</label>
                        <input type="text" className="form-control" id="percentage" onChange={this.onChangePercentage} name="percentage" value={this.state.percentage}/>
                    </div>
 
                    <div className="mb-3">
                        <label className="form-label">Offer Price</label>
                        <input type="text" className="form-control" id="newprice" onChange={this.onChangeAmmount} name="newprice" value={this.state.ammount} />
                    </div>
 
                    <div className="mb-3">
                        <label className="form-label">Starting Date</label>
                        <input type="date" className="form-control" id="startingdate"onChange={this.handleInputChange} name="startingdate" value={this.state.startingdate}/>
                    </div>
 
                    <div className="mb-3">
                        <label className="form-label">Ending Date</label>
                        <input type="date" className="form-control" id="endingdate"onChange={this.handleInputChange} name="endingdate" value={this.state.endingdate}/>
                    </div>
 
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
        </div>
        </div>
        </div>
 
        )
    }
 
}