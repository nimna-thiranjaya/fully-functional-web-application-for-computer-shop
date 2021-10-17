import React,{Component} from "react";

export default class NavBar extends Component{

  render(){
    return(
      
      

        <div className="container-sm" style={{backgroundColor:'#060b26'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <a className="navbar-brand"  href="/adadd" style={{color: "white"}}><b>Create Advertisement</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

        <a className="navbar-brand" href="/advertisement" style={{color: "white"}}><b>Existing Advertisements</b></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>

        </button>

             <div className="collapse navbar-collapse" id="navbarNav">

             <ul className="navbar-nav">


    
      </ul>

    </div>

  </div>


     
    )
  }
}