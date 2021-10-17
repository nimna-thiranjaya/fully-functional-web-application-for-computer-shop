import React, {Component} from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RefreshIcon from '@material-ui/icons/Refresh';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Button from '@material-ui/core/Button';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import Navbar from '../Project_Layouts/Navbar/Navbar'
import NavBar from './NavBar'
import {saveAs} from 'file-saver';




toast.configure()


export default class Home extends Component{
  constructor(props){

    super(props);
    this.generateReport = this.generateReport.bind(this);
    

    this.state={
     ads:[]
    };

  }




  refreshPage(){

    window.location.reload();
 
    
 }
 

componentDidMount(){
  this.retrieveAds();
}


  retrieveAds(){
    axios.get("http://localhost:8070/ads/displayAds").then(res=>{

     if(res.data.success){
       this.setState({
         ads:res.data.existingAds
         
       });

       console.log(this.state.ads);
     }
    });
  }


 
  onDelete=(id)=>{

    if (window.confirm('Are you sure you wish to delete this item?')) {

      axios.delete(`http://localhost:8070/ads/delete/${id}`).then((res)=>{

        toast.success('Advertisement Deleted Successfully',{position:toast.POSITION.TOP_CENTER});

        this.retrieveAds();

    })

}


}


  filterData(ads,searchKey){

    const result= ads.filter((ads)=>
    ads.title.toLowerCase().includes(searchKey)
    )
    this.setState({ads:result})
  }

  handleSearchArea=(e)=>{
    const searchKey=e.currentTarget.value;

    axios.get("http://localhost:8070/ads/displayAds").then(res=>{
  
       if(res.data.success){
        
    this.filterData(res.data.existingAds,searchKey)

       }

      });
      
  }

  async generateReport() {

    const obj = { ads: this.state.ads }

    await axios.post('http://localhost:8070/generateadsreport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {

        alert('Report Generated')
        console.log(res)
        console.log(res.data)
        const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlog, 'Advertisements.pdf');

        //window.open(res.data, '_blank');



    }).catch((err) => {

        console.log(err.message)

    })

    console.log(obj)

}





  render(){


      return(
  
        <div>
  
        <Navbar/>
        <br/>
        <NavBar/>
        <br/><br/>
  
          <div className="pt-0" align="center" background color="red">
            <div className="shadow col-md-11 mt-8 mx-auto" id="cardcol">
              
              <div className="card-header py-3">
              <h1 className="m-0 font-weight-bold text-dark" id="rs"> Existing Advertisements </h1><br/>
  
    </div>
        
        
      <div className="container-sm">
       
  
        <div className="row">
          <div className="col-md-8 mt-4 mx-auto">
  
          </div>
          <div className="card-body">
        <div className = "col-md-8 mt-4 mx-auto"></div>
  
          <div className="col-md- ms-auto">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
  
            onChange={this.handleSearchArea}>
  
            </input>
          </div>
        </div>
       
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Button className="mt-4 mx-auto" type="submit" style={{background: "#B4CFEC", width: 15+"%", align:"right"}} startIcon={<RefreshIcon/>}  onClick={this.refreshPage}> 
        Refresh</Button>    
  
        <Button className="col-md-8 mt-4 mx-right" type="submit"style={{background: "#B4CFEC", width: 25+"%", align:"right"}} startIcon={<InsertDriveFileIcon/>}  onClick={this.generateReport}> 
        Generate Report</Button>&nbsp; &nbsp;
      
        <table className="table table-hover" style={{marginTop:'40px', background: "#F0FFFF" }} >
        <thead>
          <tr bgcolor="#D5D6EA">
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">PublishDate</th>
            <th scope="col">Description</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.ads.map((ads,index)=>(
              <tr>
  
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/ads/${ads._id}`} style={{textDecoration:'none'}}>
                    {ads.title}
                    </a>
                    </td>
  
                <td>{ads.publishdate}</td>
                <td>{ads.description}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
                
                
                <td>
                <Button className ="form-group" type="submit"style={{background: "#C3FDB8", width: 7+"%", align:"center"}} startIcon={<EditSharpIcon/>} href={`/adupdate/${ads._id}`}>
                  </Button>
  
                  &nbsp;
                  <Button className ="form-group" type="submit"style={{background: "#F75D59", width: 7+"%", align:"center"}} startIcon={<DeleteForeverSharpIcon/>} onClick={() =>this.onDelete(ads._id)}> </Button>
                </td>
              </tr>
             
  
          ))}
          
        </tbody>
        
   </table>
   
   </div>
   <br/><br/>
  </div></div></div><br/><br/><br/><br/>
  </div>
  
  
     
      )}


   
    
}