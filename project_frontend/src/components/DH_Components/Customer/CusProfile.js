import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProfile from './CusUpdate.js'
import DisplayWishlist from '../Wishlist/DisplayWishlist'
import CircularProgress from '@material-ui/core/CircularProgress';
import DisplayRequestProduct from '../../IS_Components/DisplayRequestUser'
import Purchasehistory from '../purchasehistory';
import MainHome from "../../SS_Components/MainHome";
import Footer from "../../Project_Layouts/footer"

toast.configure()

const Profile = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [phone, setPhone] = useState("")
   const [DOB, setDob] = useState("")
   const [add1, setAddress1] = useState("")
   const [add2, setAddress2] = useState("")
   const [city, setCity] = useState("")
   const [pscode, setPostalCode] = useState("")
   const [area, setarea] = useState("")
   const [country, setCountry] = useState("")
   const [imageUrl, setImage] = useState("")
   const [pwd, setPwd] = useState("")
   const [show, setShow] = useState(false)
   const [loading, setLoading] = useState(true)


   useEffect(() => {
    setLoading(true)
      const getUserData = async () => {
         try {
            const config = {
               headers: {
                  Authorization: localStorage.getItem("Authorization")
               },
            }
            await axios.get("http://localhost:8070/customer/profile", config)
              .then((res) => {
                setName(res.data.Cus.name)
                setEmail(res.data.Cus.email)
                setPhone(res.data.Cus.phone)
                setDob(res.data.Cus.DOB)
                setAddress1(res.data.Cus.add1)
                setAddress2(res.data.Cus.add2)
                setCity(res.data.Cus.city)
                setarea(res.data.Cus.area)
                setPostalCode(res.data.Cus.pscode)
                setCountry(res.data.Cus.country)
                setImage(res.data.Cus.imageUrl)
                setPwd(res.data.Cus.pwd)
                setLoading(false)
              }).catch((error) => {
                console.log(error.message)
              })
         } catch (error) {
            console.log(error.message)
         }
      }
      getUserData()
   }, [])


   const updateUserProfile = () => {
      setShow(true)
    }




    const deleteAccount = async () => {
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };
      if (window.confirm('Are you sure you wish to delete this Account?')) {
        await axios.delete('http://localhost:8070/customer/delete', config)
        .then((res) => {
         toast.success('Your account deleted successfuly',{position:toast.POSITION.TOP_CENTER});
          localStorage.removeItem('role')
          localStorage.removeItem('Authorization')
          window.location="/signup"
        })
        .catch((err) => {
          console.log(err.message)
        })
      }
     }




      const customerLogout = () => {
        if (window.confirm('Are you sure you wish to logout from this Account?')) {
      toast.success('Log out successfuly',{position:toast.POSITION.TOP_CENTER});
      localStorage.removeItem('role')
      localStorage.removeItem('Authorization')
      window.location = "/login"
        }
    }
  
    if (loading) {
      return <div className="d-flex justify-content-center" style={{ paddingTop: 400 }}>
         <CircularProgress hidden={false} />
      </div>
   }




   return (
      <div class="bod">
        <MainHome/>
      <div class="container">
      <div class="main-bod">
      
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="cardd">
                  <div class="cardd-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img src={imageUrl} alt="Admin" id = "profileimg" class="rounded-circle" width="170" height="170"/>
                      <div class="mt-3">
                        <h4>{name}</h4>
                      </div>
                      <div class="col-sm-12">
                        <center><button onClick={customerLogout} class="btn btn-info " target="__blank">    Log Out    </button></center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="cardd mb-3">
                  <div class="cardd-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                      {name}
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
                        <h6 class="mb-0">Phone</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                      {phone}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Date Of Birth</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                      {DOB}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Address</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        Country: {country} <br/>
                        Postal Code: {pscode} <br/>
                        Province: {area} <br/>
                        City: {city} <br/>
                        Home Address: {add1},{add2}
                      </div>
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-12">
                      <center><button onClick={updateUserProfile} class="btn btn-info " target="__blank">Edit Profile Details</button></center>
                      </div>
                      <br/><br/>
                      <div class="col-sm-12">
                        <center><button onClick={deleteAccount} class="btn btn-info " target="__blank">    Delete Account    </button></center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><br/><br/>
            <hr/>
            <DisplayWishlist/><br/><hr/><br/><br/><br/>
            <hr/>
            <DisplayRequestProduct/>
            <hr/>
            <br></br>
            <hr/>
            <Purchasehistory/><br/><br/><br/><br/>
          </div>
          
      <UpdateProfile
          upname={name}
          upadd1={add1}
          upadd2={add2} 
          upcity={city}
          uparea={area}
          uppscode={pscode}
          upcountry={country}
          upphone={phone}
          upemail={email}
          upimageUrl={imageUrl}
          uppwd={pwd}
          show={show}
          onHide={() => setShow(false)}
          />
      </div>
      
      <Footer/>
    </div>
   )
}

export default Profile