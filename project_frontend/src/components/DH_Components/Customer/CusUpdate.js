import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import {toast} from 'react-toastify';
import FileBase64 from 'react-file-base64';

const UpdateProfile = ({
    upname,
    upadd1,
    upadd2,
    upcity,
    uparea,
    uppscode,
    upcountry,
    upphone,
    upemail,
    upimageUrl,
    show, 
    onHide
}) => {
    const [name, setName] = useState(upname)
    const [add1, setAddress1] = useState(upadd1)
    const [add2, setAddress2] = useState(upadd2)
    const [city, setCity] = useState(upcity)
    const [area, setArea] = useState(uparea)
    const [pscode, setPostalCode] = useState(uppscode)
    const [country, setCountry] = useState(upcountry)
    const [phone, setPhone] = useState(upphone)
    const [email, setEmail] = useState(upemail)
    const [imageUrl, setImageUrl] = useState(upimageUrl)

    const updateUserProfile = async (e) => {
      e.preventDefault()
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };

      const updateObject = {
        name: name,
        add1: add1,
        add2: add2,
        city: city,
        area: area,
        pscode: pscode,
        country: country,
        phone: phone,
        email: email,
        imageUrl: imageUrl
      }

      await axios.put('http://localhost:8070/customer/update', updateObject, config)
      .then((res) => {
        toast.success('Your details updated successfully',{position:toast.POSITION.TOP_CENTER});
        window.setTimeout(function() {
          window.location = "/profile"
      }, 2000);
        
      })
      .catch((err) => {
        console.log(err)
        alert(err.message)
      })
    }

    return (
      <div >
      <Modal  show={show} onHide={onHide} animation={true} size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered>
          <div style={{background: "#272E48"}}>
        <Modal.Header closeButton> 
          <Modal.Title style={{color: "white"}} id="contained-modal-title-vcenter" className="text-color" >Update My Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={updateUserProfile} className="text-color" >  
            <div className="form-group row mb-3">

              <div className="col-sm-6">
                <small className="text-muted">Your Name</small>
                <input type="text" className="form-control form-control-user" Value={name}
                onChange={(e) => setName(e.target.value)} required/>
              </div>

              <div className="col-sm-6">
                <small className="text-muted">Change Phone Number</small>
                <input type="text" className="form-control form-control-user" Value={phone}
                onChange={(e) => setPhone(e.target.value)} required/>
              </div>
            </div>    


           <div className="form-group">
              <small className="text-muted">Chnage Your Email</small>
              <input type="email" required className="form-control" Value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </div>


            <div className="form-group row mb-3">
              <div className="col-sm-4">
                <small className="text-muted">Address line 1</small>
                <input type="text" className="form-control form-control-user" Value={add1}
                onChange={(e) => setAddress1(e.target.value)} required/>
              </div>


              <div className="col-sm-4">
                <small className="text-muted">Address line 2</small>
                <input type="text" className="form-control form-control-user" Value={add2}
                onChange={(e) => setAddress2(e.target.value)} required/>
              </div>


              <div className="col-sm-4">
                <small className="text-muted">Postal code</small>
                <input type="text" className="form-control form-control-user" Value={pscode}
                onChange={(e) => setPostalCode(e.target.value)} required/>
              </div>
            </div>     


            <div className="form-group row mb-3"> 
              <div className="col-sm-4">
              <small className="text-muted">Chnage your city</small>
                <input type="text" className="form-control form-control-user" Value={city}
                onChange={(e) => setCity(e.target.value)} required/>
              </div>

              <div className="col-sm-4">
                <small className="text-muted">Your province</small>
                <input type="text" className="form-control form-control-user" Value={area}
                onChange={(e) => setArea(e.target.value)} required/>
              </div>

              <div className="col-sm-4">
                <small className="text-muted">Update your country</small>
                <input type="text" className="form-control form-control-user" Value={country}
                onChange={(e) => setCountry(e.target.value)} required/>
              </div>

            </div >
            <div>
            <small className="text-muted">Update your profile picture</small> <br/>
            <div class="upload-btn-wrapper">
            <button class="btnppp">Select a profile image</button>
            <FileBase64
                                    type="file"
                                    name="imageUrl"
                                    multiple={ false }
                                    onDone={({ base64 }) => setImageUrl(base64)}
                                />
            </div>
            </div>

            <br/> <br/>
 
            <center><Button variant="contained" style={{background: "#749ee3",color:"white", width: 50+"%"}} className="w-10" 
            startIcon={<SendIcon />} disableElevation type="submit">Update my details</Button></center>
          </form>
        </Modal.Body>
        </div>
      </Modal>
      </div>
    );
};

export default UpdateProfile;