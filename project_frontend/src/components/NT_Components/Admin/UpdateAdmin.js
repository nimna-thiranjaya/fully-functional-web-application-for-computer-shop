import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import FileBase64 from 'react-file-base64';
 
const UpdateProfile  = ({
  upfname,
  uplname,
  upemail,
  upnic,
  upusername,
  updescription,
  upprofileImage,
  show,
  onHide
 
}) => {
 
   const [fname, setFname] = useState(upfname)
   const [lname, setLname] = useState(uplname)
   const [email, setEmail] = useState(upemail)
   const [username, setUsername] = useState(upusername)
   const [nic, setNic] = useState(upnic)
   const [description , setDescription] = useState(updescription)
   const [profileImage , setProfileImage] = useState(upprofileImage)
 
    const updateAdminProfile = async (e) => {
      e.preventDefault()
 
      const config = {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      };
 
      const updateObject = {
        fname:fname,
        lname:lname ,
        email :email,
        nic :nic,
        username :username,
        description : description,
        profileImage: profileImage
      }
      await axios.put('http://localhost:8070/admin/update', updateObject, config)
      .then((res) => {
        alert(res.data.status)
        window.location = "/admin"
      })
      .catch((err) => {
        console.log(err)
        alert(err.message)
      })
    }
 
    return (
        <div>
           <Modal show={show} onHide={onHide} animation={true} size="lg"
        aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="text-color">Update {upfname+" "+uplname} Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={updateAdminProfile} className="text-color">
           
            <label> First Name</label>
                 
                  <input type="text" className="form-control form-control-user" value={fname}
                  onChange={(e) => setFname(e.target.value)} required/>
           
            <label>Last Name</label>
 
                  <input type="text" className="form-control form-control-user" value={lname}
                  onChange={(e) => setLname(e.target.value)} required/>
           
            <label>Email</label>
 
                  <input type="email" required className="form-control" value={email}
                  onChange={(e) => setEmail(e.target.value)} required/>
 
            <label>User Name</label>
 
                  <input type="text" className="form-control form-control-user" value={username}
                  onChange={(e) => setUsername(e.target.value)} required/>
 
 
            <label>NIC</label>
 
                  <input type="text" className="form-control form-control-user" value={nic}
                  onChange={(e) => setNic(e.target.value)} required />
           
            <label>Description</label>
 
                  <textarea className="form-control form-control-user" value={description}
                  onChange={(e) => setDescription(e.target.value)} required/>
                 <br/>
            <label>Image</label><br/>
            <FileBase64 type="file" name="profileImage" multiple={ false } onDone={({base64}) => setProfileImage(base64)}/>
            <br/><br/>
              <button type="submit">update my details</button>
            </form>
            </Modal.Body>
        </Modal>
        </div>
    );
};
 
export default UpdateProfile;