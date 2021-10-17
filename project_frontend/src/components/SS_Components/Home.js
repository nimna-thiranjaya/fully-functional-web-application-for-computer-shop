import React, {Component} from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Button from '@material-ui/core/Button';


toast.configure()

export default class Home extends Component{
  constructor(props){
    super(props);
    this.generateReport = this.generateReport.bind(this);
     this.state ={
      products:[]
    
    };
}
refreshPage(){
 window.location.reload();   

}
generatepdf(){
   window.location.reload();
}

//Retrieve Product
componentDidMount(){
  this.retrieveProducts();
}
  retrieveProducts(){
    axios.get("http://localhost:8070/products/displayProducts").then(res=>{
    if(res.data.success){
        this.setState({
          products:res.data.existingProducts
        });
        console.log(this.state.products);
    }
  });
}

//Delete Button Link
onDelete = (productID)=>{
  if (window.confirm('Are you sure you wish to delete this item?')) {
  axios.delete(`http://localhost:8070/products/delete/${productID}`).then((res)=>{
     //alert("Delete Successfully");
     toast.warning('Items Deleted Successfully',{position:toast.POSITION.TOP_CENTER});
     this.retrieveProducts();
  })
}}

//Search 
filterData(products,searchKey){
  const result = products.filter((products)=>
  products.productName.toLowerCase().includes(searchKey)||
  products.originalTitle.toLowerCase().includes(searchKey)||
  products.brandName.toLowerCase().includes(searchKey) ||  products.availability.toLowerCase().includes(searchKey) 
  )

   this.setState({products:result})
}

handleSearchArea = (e)=>{
  const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8070/products/displayProducts").then(res=>{
      if(res.data.success){
      this.filterData(res.data.existingProducts,searchKey)
    }
  });
}

//generate report
async generateReport() {
  const obj = {products: this.state.products }
  await axios.post('http://localhost:8070/generateproductreport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {
  alert('Report Generated')
  
  console.log(res)
  console.log(res.data)
  
  const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
  saveAs(pdfBlog, 'Products.pdf');
  
  //window.open(res.data, '_blank');  
    }).catch((err) => {
      console.log(err.message) 
    })  
    console.log(obj) 
  }
  

  render(){
    return(

    <div className="card-header py-2">
    <div >
    <div className="row" style={{background: "#368BC1"}}><h3 align="center"><br/>All Products Details</h3> 
    <div className="col-lg-9 mt-2">      
    </div>           
     
    <div className="col-lg-3 mt-2 mb-2"> 
    <input className="form-control" startIcon={<InsertDriveFileIcon/>}  
    type="search" placeholder="Serach" name="searchQuery" onChange={this.handleSearchArea}/> 
    <br/>     
  
 
    <form onSubmit={this.handleSearchArea}>
    <label style={{fontSize:'20px', color:'white', fontWeight:700}}>Availibility :</label>
    <select className="dropDown" onChange={this.handleSearchArea}>
    <option value="" >..</option>
    <option value="yes" >In Stock</option>
    <option value="no" >Out of Stock</option>
    </select>
    </form>
   
 <br/>
    <Button className="form-group" type="submit" style={{background: "#E3E4FA", width: 50+"%"}} 
    startIcon={<InsertDriveFileIcon/>}  onClick={this.generateReport}>Report</Button> &nbsp; &nbsp;

    <Button style={{background: "#E3E4FA"}}  aria-label="add" size="medium" onClick={this.refreshPage} ><RefreshIcon/></Button>          
    &nbsp;&nbsp;
     </div></div>  
                            
    <table className = "table table-hover" style={{marginTop:'30px',background: "#FFFFFF"}} >
    <thead>
      <tr bgcolor="#A0CFEC">
           <th scope = "col" >ID</th>
           <th scope = "col" >ProductName</th>
           <th scope = "col" >Availability</th>
           <th scope = "col" >Quantity</th> 
           <th scope = "col" >OriginalTitle</th>
           <th scope = "col" >ProductPrice</th>  
           <th scope = "col" >MarketPrice</th>
           <th scope = "col" >BrandName</th>
           <th scope = "col" >WarrantYear</th>
           <th scope = "col" >Version</th>   
           <th scope = "col" >Description</th>
           <th scope = "col" >Action</th>
           
      </tr>
      </thead>
          <tbody>
            {this.state.products.map((products,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>             
                <td><a href={`/products/${products._id}`} style ={{textDecoration:'none'}}> {products.productName}</a></td>
                <td>{products.availability}</td>
                <td>{products.quantity}</td>
                <td>{products.originalTitle}</td>
                <td>{products.productPrice}</td>   
                <td>{products.marketPrice}</td>
                <td>{products.brandName}</td>
                <td>{products.warrantYear}</td>
                <td>{products.version}</td>
                <td>{products.description}</td>
                
                <td>
                <IconButton aria-label="edit" color="primary" href={`/edit/${products._id}`}>
                <EditIcon fontSize="medium" />
                </IconButton>
           
                <IconButton aria-label="delete"  color="secondary" onClick={()=>this.onDelete(products._id)}>
                <DeleteIcon fontSize="medium" />
                </IconButton>
              
              </td>
            </tr>
        )
       )}
      </tbody>     
    </table>
    </div></div>
    )
  }
}
