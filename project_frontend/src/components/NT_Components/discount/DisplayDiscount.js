import React, { Component } from "react";
import axios from 'axios';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveAs} from 'file-saver';
import moment from 'moment';
 
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
export default class DisplayDiscount extends Component{
    constructor(props){
        super(props);
 
        this.generateReport= this.generateReport.bind(this);
       
        this.state ={
            discount:[]
        };
    }
 
    componentDidMount(){
        this.displayDiscount();
    }
 
    displayDiscount(){
        axios.get("http://localhost:8070/discount/display").then(res =>{
            if(res.data.success){
                this.setState({
                    discount:res.data.existingdiscount
                });
 
                console.log(this.state.discount)
 
            }
   
        })
    }
 
    onDelete=(id)=>{
        if (window.confirm('Are you sure you wish to delete this item?')) {
        axios.delete(`http://localhost:8070/discount/delete/${id}`).then((res)=>{
                //alert("Delete successful");
                toast.warn('Delete successful',{position:toast.POSITION.TOP_CENTER});
                 this.displayDiscount();
        })
    }
    }
 
    filterData(discount,searchKey){
        const result = discount.filter((discount) =>
            discount.productName.toLowerCase().includes(searchKey)||
            discount.percentage.includes(searchKey)
        )
        this.setState({discount:result})
    }
 
 
    handleSearchArea = (e)=> {
       const searchKey = e.currentTarget.value;
 
       axios.get("http://localhost:8070/discount/display").then(res =>{
            if(res.data.success){
                   this.filterData(res.data.existingdiscount,searchKey)
                };
            }
        )
 
    }
 
    async generateReport() {
        const obj = { discount: this.state.discount }
        await axios.post('http://localhost:8070/generateDiscountReport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {
            alert('Report Generated')
            console.log(res)
            console.log(res.data)
            const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
            saveAs(pdfBlog, 'Discount.pdf');
            //window.open(res.data, '_blank');
        }).catch((err) => {
            console.log(err.message)
        })
        console.log(obj)
    }
 
    refreshPage(){
            window.location.reload();
    }
       
 
   
    render(){
        return(
                    <div className="pt-3">
                    <div className="shadow mb-4 w-55" id="cardcol">
                    <div className="card-header py-3">
                        <center><h4 className="m-0 font-weight-bold text-primary">
                        Added Discounts
                        </h4></center>
                            <div className="col-md-3 ms-auto">
                            <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            name="searchQuery"
 
                            onChange={this.handleSearchArea}>
                            </input>
                            </div>
                            <Button className="form-group" type="submit"  style={{background: "#B4CFEC", width: 15+"%", align:"right"}} startIcon={<RefreshIcon/>}  onClick={this.refreshPage}> Refresh Table</Button>&nbsp;&nbsp;&nbsp;      
                        <Button className="form-group" type="submit"style={{background: "#B4CFEC", width: 18+"%", align:"right"}} startIcon={<InsertDriveFileIcon/>} onClick={this.generateReport}> Generate Report</Button>  
                        </div>
                        <table className="table table-hover" style={{marginTop:'40px', background: "#F0FFFF" }} >
                            <thead>
                                <tr bgcolor="#D5D6EA">
                                <th scope="col">No</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Percentage</th>
                                <th scope="col">Market Price</th>
                                <th scope="col">Offer Price</th>
                                <th scope="col">Starting Date</th>
                                <th scope="col">Ending Date</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>  
                            <tbody>
                                {this.state.discount.map((discount,index)=>(
                                   <tr>
                                        <th scope = "row">{index +1}</th>
                                       
                                        <td>{discount.productName}</td>
 
 
                                        <td>{discount.percentage+"%"}</td>
                                        <td>{"Rs."+discount.marketPrice+".00"}</td>
                                        <td>{"Rs."+discount.ammount+".00"}</td>
                                        <td>{moment(discount.startingdate).format('LL')}</td>
                                        <td>{moment(discount.endingdate).format('LL')}</td>
                                        <td>
 
                                        <Button className ="form-group" type="submit"style={{background: "#C3FDB8", width: 10+"%", align:"center"}} startIcon={<EditSharpIcon/>} href={`/update/${discount._id}`}></Button>
               
                                        &nbsp;
 
                                        <Button className ="form-group" type="submit"style={{background: "#F75D59", width: 10+"%", align:"center"}} startIcon={<DeleteForeverSharpIcon/>} onClick={() =>this.onDelete(discount._id)}></Button>
                                        </td>
                                    </tr>
                                   
 
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
 
}