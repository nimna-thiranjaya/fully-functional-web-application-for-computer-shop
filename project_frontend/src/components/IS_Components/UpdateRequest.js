import React, {useState} from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import UpdateIcon from '@material-ui/icons/Update';
import { Modal } from "react-bootstrap";


const UpdateRequestProducts = ({show, onHide, itemId, itemname, brand, model, version}) => {

  const [updateItemname, setUpdateItemname] = useState(itemname)
  const [updateBrand, setUpdateBrand] = useState(brand)
  const [updateModel, setModel] = useState(model)
  const [updateVersion, setVersion] = useState(version)

  const sendUpdateRequest = async (e) => {
    e.preventDefault()
    const updateRequest = {
      itemname: updateItemname,
      brand: updateBrand,
      model: updateModel,
      version: updateVersion
    }
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization")
     },
    }
    await axios.post(`http://localhost:8070/requests/update/${itemId}`, updateRequest, config)
    .then((res) => {
      alert(res.data.status)
      window.location = "/profile"
    })
    .catch((err) => {
      alert(err.message)
      console.log(err)
    })
  }

  return (
    <div>
      <Modal show={show} onHide={onHide} animation={true} size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered>
        <div  style={{background: "#272E48"}}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"white"}}>Update Request Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={sendUpdateRequest} className="text-color">
            <div className="form-group">
              <label style={{color:"#bcd0f7"}}>Item Name</label>
              <input type="text" required className="form-control"  value={updateItemname}
              onChange={(e) => setUpdateItemname(e.target.value)} />
            </div><br/>
            <div className="form-group">
              <label style={{color:"#bcd0f7"}}>Brand</label>
              <input type="text" required className="form-control" value={updateBrand}
              onChange={(e) => setUpdateBrand(e.target.value)} />
            </div><br/>
            <div className="form-group">
              <label style={{color:"#bcd0f7"}}>Model</label>
              <input type="text" required className="form-control" value={updateModel}
              onChange={(e) => setModel(e.target.value)} />
            </div><br/>
            <div className="form-group">
              <label style={{color:"#bcd0f7"}}>Version</label>
              <input type="text" required className="form-control" value={updateVersion}
              onChange={(e) => setVersion(e.target.value)} />
            </div><br/><br/>
            <center><Button variant="contained" className="w-10" style={{background: "#0f57fff1", width: 80+"%",color:"white"}}
            startIcon={<UpdateIcon />} disableElevation type="submit">update the request</Button></center>
          </form>
        </Modal.Body>  
        </div>
      </Modal>
    </div>
  )
}

export default UpdateRequestProducts