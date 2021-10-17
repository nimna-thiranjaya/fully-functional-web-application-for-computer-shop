import React,{Component} from "react";
import axios from "axios";
import FileBase64 from 'react-file-base64';
import {toast} from 'react-toastify';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import Navbar from '../Project_Layouts/Navbar/Navbar';

toast.configure()


export default class EditAds extends Component{

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

  UpdatedataonSubmit =(e)=>{

    e.preventDefault();
    const adID=this.props.match.params.adID;

    const {title,publishdate,description,image}= this.state;

    const data={
      title:title,
      publishdate:publishdate,
      description:description,  	
      image:image
    }

   


    console.log(data)

    
    axios.put(`http://localhost:8070/ads/adupdate/${adID}`,data).then((res)=>{
      if(res.data.success){

        toast.success('Advertisement Updated Successfully',{position:toast.POSITION.TOP_CENTER})
        window.setTimeout(function() {

          window.location.href = '/advertisement';

        }, 2500);

       

        this.setState({
          
            title:"",
            publishdate:"",
            description:"",
            image:""
          }
        )
      }
    })
  }
  


  componentDidMount(){
    const adID=this.props.match.params.adID;

    axios.get(`http://localhost:8070/ads/${adID}`).then((res)=>{
      if (res.data.success){
        this.setState({
          title:res.data.ads.title,
          publishdate:res.data.ads.publishdate,
          description:res.data.ads.description,
          image:res.data.ads.image
        });
  
        console.log(this.state.ads);
      }
    });
  
  }

  render(){
    return(

      <div>

      <Navbar/>
      <br/>

      
      <div className="pt-3" align="center" background color="red">

      <div className="card shadow mb-8 w-50">

        <div className="card-header py-3">

       <h1 className="m-0 font-weight-bold text-dark" >Edit Advertisement</h1><br/>

        </div>

        <div className="card-body">

          
      <div className = "col-md-8 mt-4 mx-auto">
      
          <form className="needs-validation" noValidate>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Title</label>
              <input type="text"
              className="form-control"
              name="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleInputChange}/>
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
              onChange={this.handleInputChange} maxlength="70" required/>
             </div> 




             <div>

              <FileBase64

                type="file"

                name="image"

                multiple={ false }

                onDone={({ base64 }) => this.setState({ image: base64 })}

              />

</div>
<br/><br/>


    <Button className="form-group" type="submit"style={{background: "#F75D59", width: 100+"%"}} startIcon={< CheckCircleSharpIcon/>}  onClick={this.UpdatedataonSubmit}> 

    Update Advertisement</Button>  

          </form>
      </div>  </div>  </div>  </div>
      </div>
     
    );
  }}
