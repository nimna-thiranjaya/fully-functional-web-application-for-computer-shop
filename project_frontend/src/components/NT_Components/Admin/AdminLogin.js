import React,{Component} from "react";
import axios from 'axios';
//import admin from "../../../admin_backend/models/admin";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class AdminLogin extends Component {
    constructor(props) {
      super(props);
      this.userLoginSubmit = this.userLoginSubmit.bind(this)
      this.handleClose = this.handleClose.bind(this)
  
      this.state = {
        username: "",
        password: "",
        token: "",
        open: false
      }
    }


    async userLoginSubmit(e) {
      e.preventDefault()
      const userData = {
        username: this.state.username,
        password: this.state.password
      }

      
  
      await axios.post("http://localhost:8070/admin/login",userData)
      .then((res) => {
        this.setState({
          token: res.data.token
        })
        localStorage.setItem("Authorization", res.data.token)
        window.location = "/dashBoard";
        
      })
      .catch((err) => {
        console.log(err)
        this.setState({open: true})
        alert("loging error");
      })
    }
  
    handleClose(reason) {
      if (reason === 'clickaway') {
       return;
      }
      this.setState({open: false})
   };

   

    render() {
      return (

    <div style={{paddingTop:100}} >
      
        <div  class="loginbox" >
           
              <form onSubmit={this.userLoginSubmit}>
              <h4>Login As Admin</h4>
                  <div className="mb-3">
                      <label className="form-label">UserName</label>
                      <input type="text" id="username" placeholder="Enter Your UserName"
                      onChange={e => this.setState({ username: e.target.value })} required/>
                  </div>

              
                  <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" id="password" placeholder="Enter Your Password"
                      onChange={e => this.setState({ password: e.target.value })} required/>
                  </div>
                  <a href="#">Forget Password</a>
                  <br/><br/>
                  <input type="submit"></input>
                </form>
                </div>
  
                </div>
      )
    }
  }