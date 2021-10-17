import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar'
import "./reqstyles.css"
import MainHome from "../SS_Components/MainHome";
import Footer from "../Project_Layouts/footer"

export default class CreateRequestproduct extends Component {

//implementing constructor


  constructor(props) {
    super(props);
    //implementing binding
    this.onChangeItemname = this.onChangeItemname.bind(this);
    this.onChangeBrand = this.onChangeBrand .bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeVersion = this.onChangeVersion.bind(this); 
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      itemname: "",
      brand: "",
      model: "",
      version: "",
      userID: "",
      userEmail: "",
      open: false

    }
  }

  handleClose(reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false})
  };

  onChangeItemname(e) {
    this.setState({
      itemname: e.target.value
    })
  }

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    })
  }

  onChangeModel(e) {
    this.setState({
      model: e.target.value
    })
  }

  onChangeVersion(e) {
    this.setState({
      version: e.target.value
    })
  }
  onChangeUserId(e) {
    this.setState({
      userID: e.target.value
    })
  }

  onChangeUserEmail(e) {
    this.setState({
      userEmail: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const requestproduct = {
      itemname: this.state.itemname,
      brand: this.state.brand,
      model: this.state.model,
      version: this.state. version,
      userEmail: this.state.userEmail
    }

    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };

    axios
    .post('http://localhost:8070/requests/add', requestproduct, config)
    .then((res) => {
      console.log(res.data)
      alert('Request Added Successfully')
      window.location = '/profile'
    }).catch((err) => {
      console.log(err)
      //alert("Please Login to the Applicaion")
      //window.location = '/login'
      this.setState({open: true})
    })
  }

  render() {
    return (
      <div class="bod">
        <MainHome/>
      <div className="container pt-5">
      <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}>
        <div className="alert alert-danger">
            Plase login to the Application
        </div>
      </Snackbar>

        <div className="card o-hidden border-1 shadow-lg my-2" style={{background:"#272E48"}}>
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-7 d-none d-lg-block bg-request-book"></div>
                <div className="col-lg-5">
                  <div className="col-md-9 mt-4 mx-auto">
                    <div className="text-center text-color pt-2">
                      <h1 className="text-gray-900 mb-4">Request Item</h1>
                    </div>
                    <form onSubmit={this.onSubmit} className="text-color">
                      <div className="form-group"> 
                        <label>Item Name</label>
                        <input type="userInput" required className="form-control" placeholder="Enter Item Name" value={this.state.itemname}
                        onChange={this.onChangeItemname}/>
                      </div><br/>
                      <div className="form-group"> 
                        <label>Brand</label>
                        <input  type="text" required className="form-control" placeholder="Enter the Brand Name" value={this.state.brand}
                        onChange={this.onChangeBrand} />
                         </div><br/>
                      <div className="form-group">
                        <label>Model</label>
                        <input type="text" required className="form-control" placeholder="Enter the model" value={this.state.model}
                        onChange={this.onChangeModel}/>
                      </div><br/>
                      <div className="form-group">
                        <label>Version</label>
                        <input type="text" required className="form-control" placeholder="Enter the version" value={this.state.version}
                        onChange={this.onChangeVersion}/>
                      </div><br/>
                      <div className="form-group">
                        <label>User Email</label>
                        <input pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}" required className="form-control" placeholder="Enter the Email" value={this.state.userEmail}
                        onChange={this.onChangeUserEmail}/>
                      </div><br/><br/>
                      <center><Button variant="contained" className="w-10" style={{background: "#0f57fff1", width: 80+"%",color:"white"}}
                      startIcon={<SendIcon />} disableElevation type="submit">request this item</Button></center><br/><br/>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    )
  }
}