import React,{Component} from "react";
import axios from "axios";
import FileBase64 from 'react-file-base64';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import Navbar from '../Project_Layouts/Navbar/Navbar';
import NavBar from '../RS_Components/NavBar';



toast.configure()

export default class CreateAds extends Component{

  constructor(props){
    super(props);
    this.state ={
      title:"",
      publishdate:"",
      description:"",
      image:""

    }
  }


  handleInputChange=(e) =>{
    const{name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }



  onSubmit =(e)=>{

    e.preventDefault();
    const {title,publishdate,description,image}= this.state;

    const data={
      title:title,
      publishdate:publishdate,
      description:description,
      image:image
    }

    console.log(data)


     //________________validate inputs_____________________
     var numbers = /^[a-z A-Z 0-9.]+$/;
                      
     if(title == null || !title.match(numbers)){

           if(title == null){
             toast.error('Please Enter Valide TItle', {
               position: "bottom-right",
               autoClose: 6000,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               });

           }
           else if(!title.match(numbers)){
                 toast.error('Please Enter Valide Title', {
                   position: "bottom-right",
                   autoClose: 6000,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   }); 
             }

         
            
         }
      
     else{
      axios.post("http://localhost:8070/ads/adadd",data).then((res)=>{
        if(res.data.success){
  
          toast.success('Advertisement published Successfully',
          {position:toast.POSITION.TOP_CENTER});
  
          window.setTimeout(function() {
  
            window.location.href = '/advertisement';
  
          }, 2500);
  
          this.setState(
          
            {
              title:"",
              publishdate:"",
              description:"",
              image:""
            }
          )
        }
      })
         
   }

  }


 


  render(){
    return(

      <div>

      <Navbar/>
      <br/>
      <NavBar/>
      
      <div className="pt-3" align="center" background color="red">
      <br/>
      
      <div className="card shadow col-md-8 mt-8">
  
        <div className="card-header py-3">
        <h1 className="m-0 font-weight-bold text-dark" id="randy">Create New Advertisement</h1><br/>

        </div>

        <div className="card-body">
      <div className = "col-md-9 mt-4 mx-auto">
        
          <form className="needs-validation" noValidate>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Title</label>
              <input type="text"
              // pattern ="^[a-z A-Z 0-9]*$"
              className="form-control"
              name="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleInputChange} required/>
             </div> 



             <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Publishdate</label>
              <input type="date"
              className="form-control"
              name="publishdate"
              placeholder="Enter Publishdate"
              value={this.state.publishdate}
              onChange={this.handleInputChange} required/>
             </div> 

             


             <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Description</label>
              <textarea className="form-control"
              input type="text"
              name="description"
              placeholder="Enter Description"
              value={this.state.description}
              onChange={this.handleInputChange} maxlength="70"/ >
             </div> 

             

            <div>


             <FileBase64
                
                type="file" name="image" multiple={ false }   onDone={({ base64 }) => this.setState({ image: base64 })} required/>
            
    <br/><br/><br/>
    
          </div>
          <div className="form-group">
          
          <Button variant="contained" className="w-10" style={{background: "#F75D59", width: 80+"%"}} startIcon={<PublishIcon/>}  onClick={this.onSubmit}>    
          Publish Advertisement</Button>  
          </div><br/>
          </form>
      </div></div></div></div>
      <br/><br/>
</div>


     
    )
  }
}