import React,{useState} from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileBase64 from 'react-file-base64';
import Navbar from '../../Project_Layouts/Navbar/Navbar'
 
function AddAdmin(){
 
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [username, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);
 
  function sendData(e){
    e.preventDefault();
 
    const newadmin = {
      fname,
      lname,
      email,
      nic,
      username,
      password,
      description,
      profileImage
    }
    console.log(newadmin)
    if(password === cpassword){
    axios.post("http://localhost:8070/admin/add",newadmin).then(()=>{
      toast.success('Admin Register Succesfull',{position:toast.POSITION.TOP_CENTER});
      window.setTimeout(function() {
        window.location.href = '/admin';
      }, 3100);
    }).catch((err)=>{
      toast.warn('Admin Account Already Exsist Check Email or Username again',{position:toast.POSITION.TOP_CENTER});
    })}else{
      toast.warn('Password Mismatch',{position:toast.POSITION.TOP_CENTER});
    }
  }
 
    return(
      <div>
        <Navbar/>
      <div><br/>
      <div className="pt-3" align="center" background color="red">
            <div className="shadow mb-8 w-50" id="cardcol">
              <div className="card-header py-3">
             <h3 className="m-0 font-weight-bold text-dark">Admin Registration</h3><br/>
              </div>
              <div className="card-body">
              <div className = "col-md-8 mt-4 mx-auto">
      <form onSubmit={sendData}>
      <div class="row">
        <div class="col" style={{marginBottom:'15px'}}>
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" id="fname" placeholder="Enter First Name" required
          onChange={(e)=>{
            setFname(e.target.value);
          }}/>
        </div>
        <div class="col" style={{marginBottom:'15px'}}>
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lname" placeholder="Enter Last Name"  required
          onChange={(e)=>{
            setLname(e.target.value);
          }}/>
          </div>
      </div>
        <div className="mb-3 ml-5" style={{marginBottom:'15px'}}>
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" data-toggle="tooltip" data-placement="center" title="Sample Email - sample@gmail.com" required="true"
          pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
          inputMode="email" placeholder="Enter Your Email"
          onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        </div>
        <div className="mb-3" style={{marginBottom:'15px'}}>
          <label className="form-label">NIC</label>
          <input type="text" className="form-control" id="nic" placeholder="Enter NIC number" required="true"
          pattern ="[0-9]{12}||[0-9]{9}[v||V]"
          onChange={(e)=>{
            setNic(e.target.value);
          }}/>
        </div>
        <div className="mb-3" style={{marginBottom:'15px'}}>
          <label className="form-label">User Name</label>
          <input type="text" className="form-control" id="username" placeholder="Enter User Name" required="true" minLength="6" data-toggle="tooltip" data-placement="center" title="Username must be more than 6 characters"
          onChange={(e)=>{
            setUname(e.target.value);
          }}/>
        </div>
        <div className="mb-3" style={{marginBottom:'15px'}}>
          <label className="form-label">Discription</label>
          <textarea className="form-control" id="description" placeholder="Enter Your Description" maxLength="2000"
          onChange={(e)=>{
            setDescription(e.target.value);
          }}/>
          <br/>
        </div>
        <div class="row">
        <div class="col" style={{marginBottom:'15px'}}>
          <label className="form-label">Password</label>
          <input type="password"  className="form-control" id="password" placeholder="Enter Password" data-toggle="tooltip" data-placement="center" title="Password must contain at least 6 characters, including UPPER/lowercase and numbers Sample = 'Sample@523'"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$"  required="true"
          onChange={(e)=>{
            setPassword(e.target.value);
          }}/>
        </div>
        <div class="col" style={{marginBottom:'15px'}}>
          <label className="form-label">Confirm Password</label>
          <input type="password"  class="form-control" id="cpassword" placeholder="Re-Eneter password" data-toggle="tooltip" data-placement="center" title="Password must contain at least 6 characters, including UPPER/lowercase and numbers. Sample Password= 'Sample@523'"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$"  required="true"
          onChange={(e)=>{
            setCpassword(e.target.value);
          }}/>
        </div>
        </div>
        <div className="mb-3" style={{marginBottom:'15px'}}>
          <label className="form-label">Upload Image</label> &nbsp; &nbsp;
          <FileBase64 type="file" name="profileImage" multiple={ false } onDone={({base64}) => setProfileImage(base64)}/>
        </div>
        <a href="/admin"><button className="btn btn-primary" type="button">Back</button></a> <button type="submit" className="btn btn-primary">Submit</button>
      </form>
     
      </div>
      </div>
      </div></div> </div></div>
     
    )
 
}
 
export default AddAdmin;

