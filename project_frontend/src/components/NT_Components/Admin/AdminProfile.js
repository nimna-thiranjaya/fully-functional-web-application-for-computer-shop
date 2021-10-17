import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UpdateProfile from '../Admin/UpdateAdmin'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Profile = () => {
   const [fname, setFname] = useState(null)
   const [lname, setLname] = useState(null)
   const [email, setEmail] = useState(null)
   const [username, setUsername] = useState(null)
   const [password, setPassword] = useState(null)
   const [nic, setNic] = useState(null)
   const [description , setDescription] = useState(null)
   const [profileImage , setprofileImage] = useState(null)
   const [show, setShow] = useState(false)
 
 
 
   useEffect(() => {
      const getUserData = async () => {
         try {
            const config = {
               headers: {
                  Authorization: localStorage.getItem("Authorization")
               },
            }
            await axios.get("http://localhost:8070/admin/profile", config)
              .then((res) => {
                setFname(res.data.admin1.fname)
                setLname(res.data.admin1.lname)
                setEmail(res.data.admin1.email)
                setUsername(res.data.admin1.username)
                setPassword(res.data.admin1.password)
                setNic(res.data.admin1.nic)
                setprofileImage(res.data.admin1.profileImage)
                setDescription(res.data.admin1.description)
               
 
              }).catch((error) => {
                console.log(error.message)
              })
         } catch (error) {
            console.log(error.message)
         }
      }
      getUserData()
   }, [])
 
   const updateAdminProfile = () => {
      setShow(true)
    }
 
    const deleteAdmin = async () => {
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };
      if (window.confirm('Are you sure you wish to delete this Account?')) {
        await axios.delete('http://localhost:8070/admin/delete', config)
        .then((res) => {
          toast.success('Your account deleted successfuly',{position:toast.POSITION.TOP_CENTER});
          localStorage.removeItem('Authorization')
          window.location="/"
        })
        .catch((err) => {
          console.log(err.message)
        })
      }
     }
 
     const adminLogout = () => {
      if (window.confirm('Are you sure you wish to logout from this Account?')) {
      localStorage.removeItem('Authorization')
      toast.success('Log out successfuly',{position:toast.POSITION.TOP_CENTER});
      window.location = "/"
      }
    }
 
 
   return (
    <div>
     
 
   
      <div class="container">
      <div class="main-body">
      <ul class="nav">
          <li><a href="/admin">Admin Profile</a></li>
          <li><a href="/add">Admin Registration</a></li>
        </ul>
            <div class="row gutters-sm">
              <div class="col-md-4 mb-4">
                <div class="shadow" id="cardcol">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img src={profileImage} class="rounded-circle" width="170" height="170" id="profileimg"/>
                      <div class="mt-3">
                        <h4>{fname+" "+lname}</h4>
                        <button class="btn btn-primary" onClick={adminLogout}>Log Out</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="shadow mb-3" id="cardcol">
                  <div class="card-body">
                  <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0 ">User Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary" >
                        {username}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">First Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {fname}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Last Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {lname}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {email}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">NIC</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {nic}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Description</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {description}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-12">
                      <center><button onClick={updateAdminProfile} class="btn btn-primary">Edit Profile Details</button></center>
                      </div>
                      <br/><br/>
                      <div class="col-sm-12">
                        <center><button onClick={deleteAdmin} class="btn btn-primary">Delete Account</button></center>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
               
         <UpdateProfile
          show={show}
          onHide={() => setShow(false)}
          upfname ={fname}
          uplname ={lname}
          upemail ={email}
          upnic = {nic}
          upusername = {username}
          updescription ={description}
          upprofileImage = {profileImage}
         
        />
      </div>
   )
}
 
export default Profile

