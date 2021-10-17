import React,{Component} from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Project_Layouts/Navbar/Navbar';

toast.configure()

export default class EditProduct extends Component{
   
   constructor(props){
      super(props);
      this.state={
         productName:"",
         quantity:"",  
         originalTitle:"",
         productPrice:"",         
         marketPrice:"",
         brandName:"",
         warrantYear:"",
         version:"",
         description:"",
         coverImage:"",
         availability:"",
      }
   } 

   handleInputChange = (e)=>{
      const{name,value} = e.target;
      this.setState({
         ...this.state,
         [name]:value
      })
   }
   
   onSubmit = (e)=>{

      e.preventDefault();
      const productID = this.props.match.params.productID;
    
      const{productName, quantity,coverImage,originalTitle,productPrice,description,marketPrice,brandName,warrantYear,version,availability} = this.state;
      const data = {
         productName:productName,
         quantity:quantity,   
         originalTitle:originalTitle,
         productPrice:productPrice,    
         marketPrice:marketPrice,
         brandName:brandName,
         warrantYear:warrantYear,
         version:version,
         description:description,
         coverImage:coverImage,
         availability:availability,
         
      }
     
      console.log(data)
      axios.put(`http://localhost:8070/products/update/${productID}`,data).then((res)=>{
         toast.success('Item Updated Successfully',{position:toast.POSITION.TOP_CENTER});
         
         if(res.data.success){      
            window.setTimeout(function() {
               window.location.href = '/inventory';
         
           }, 2000);     
            this.setState({
               productName:"",
               quantity:"",             
               originalTitle:"",
               productPrice:"",
               marketPrice:"",
               brandName:"",
               warrantYear:"",
               version:"",
               description:"",
               coverImage:"",
               availability:"",
           })
        }
      })
   }
  
   componentDidMount(){
      const productID = this.props.match.params.productID;
      axios.get(`http://localhost:8070/products/${productID}`).then((res)=>{
         if(res.data.success){
           this.setState({
            productName:res.data.products.productName,
            quantity:res.data.products.quantity,          
            originalTitle:res.data.products.originalTitle,
            productPrice:res.data.products.productPrice,           
            marketPrice:res.data.products.marketPrice,
            brandName:res.data.products.brandName,
            warrantYear:res.data.products.warrantYear,
            version:res.data.products.version,
            description:res.data.products.description,
            coverImage:res.data.products.coverImage,
            availability:res.data.products.availability,
         });
         
         console.log(this.state.products);
        }
      });
   }
     
   render(){
     return(
        <div>
      <Navbar/>
         <div align="center"><br/>
         <div className="card shadow mb-8 w-50" style={{background: "#F0F8FF"}}>
         <div className="card-header py-3">
          <div class="card-header" style={{background: "#E3E4FA"}}><h2>Update Product Details</h2></div>
          <br/>
   
          <form className="row g-3"  noValidate>
        
         <div  className="col-md-6" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}> Product Name </label>
            <input type="text" className="form-control" name="productName" placeholder="Enter Product Name"
             value={this.state.productName}
             onChange={this.handleInputChange}  Required = "required"/>
         </div>

         <div  className="col-md-6" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Quantity</label>
            <input type="number" className="form-control" name="quantity" placeholder="Enter Product Name" value={this.state.quantity}
           onChange={this.handleInputChange}  Required = "required"/>
         </div>


         <div  className="col-md-6" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Original Title</label>
            <input type="text" className="form-control" name="originalTitle" placeholder="Enter Original Title" value={this.state.originalTitle}
           onChange={this.handleInputChange}/>
         </div>
    
         <div  className="col-md-6" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Product Price</label>
            <input type="number" className="form-control" name="productPrice" placeholder="Enter Product Price" value={this.state.productPrice}
           onChange={this.handleInputChange}  Required = "required"/>
         </div>
    
    
         <div  className="col-md-6" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Market Price</label>
            <input type="number" className="form-control" name="marketPrice" placeholder="Enter Market Price" value={this.state.marketPrice}
           onChange={this.handleInputChange}  Required = "required"/>
         </div>
    
         <div  className="col-md-6" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}> Brand Name</label>
            <input type="text" className="form-control" name="brandName" placeholder="Enter Brand Name" value={this.state.brandName}
           onChange={this.handleInputChange}  Required = "required"/>
         </div>
    
         <div  className="col-md-6" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Warrant Year</label>
            <select className="form-control" name="warrantYear" placeholder="Enter Warrant Year" value={this.state.warrantYear}
           onChange={this.handleInputChange} required>
                 <option value="">Enter Warrant Year</option>
                 <option value="No Warranty">No Warranty</option>
                 <option value="6 Month">6 Month</option>
                 <option value="8 Month">8 Month</option>
                 <option value="1 Year">1 Year</option>
                 <option value="2 Year">2 Year</option>
                 <option value="3 Year">3 Year</option>
                 <option value="4 Year">4 Year</option>
          </select>
         </div>
   
         <div  className="col-md-6" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Version</label>
            <input type="text" className="form-control" name="version" placeholder="Enter version" value={this.state.version}
           onChange={this.handleInputChange}/>
         </div>
   
         <div class="mb-3">
            <label style={{marginBottom:'5px'}}>Description</label>
            <textarea type="text" className="form-control" name="description" placeholder="Enter Description" value={this.state.description}
           onChange={this.handleInputChange} maxLength ="1000"/>
         </div>

         <div class="mb-3">
            <label style={{marginBottom:'5px'}} className="form-label">Availability</label>
           <select className="form-control" name="availability" placeholder="Enter Description" value={this.state.availability}
              onChange={this.handleInputChange} required>
                  <option value="">Enter Availability</option>
                 <option value="yes">In Stock</option>
                 <option value="no">Out Of Stock</option>
          </select>
          </div>

         <div>          
          <FileBase64 type="file" name="coverImage" multiple={ false } 
             onDone={({ base64 }) => this.setState({ coverImage: base64 })} value={this.state.coverImage}
             onChange={this.handleInputChange}/>
         </div>

    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>            
    &nbsp;Update
    </button>
 
 </form>          
</div>
</div>
</div>
</div>
     );
    }
}