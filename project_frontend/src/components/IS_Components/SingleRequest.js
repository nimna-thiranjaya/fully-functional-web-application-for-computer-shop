import React, {useState} from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import UpdateRequestProduct from './UpdateRequest'

const SingleProductRequest = ({itemname, brand, model, version, itemId}) => {
  const [show, setShow] = useState(false)

  const updateRequest = () => {
    setShow(true)
  }

  const deleteRequest = async () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization")
     },
    }
    await axios.delete(`http://localhost:8070/requests/delete/${itemId}`, config)
    .then((res) => {
      alert(res.data.status)
      window.location = "/profile"
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className="pb-2">
      <Paper variant="outlined" elevation={0} className="p-2" style={{backgroundColor: " #272E48"}}>
        <h5 style={{fontFamily: 'Arial Black',color:"white"}}>{itemname}</h5>
        <div className="text-color-white">Brand - {brand}</div>
        <div className="text-color-white">Model - {model}</div>
        <div className="text-color-white">Version - {version}</div>

        <div className="d-flex justify-content-end">
          <IconButton aria-label="edit" style={{background: "#619dff", marginRight: 8}}
          onClick={updateRequest}>
            <EditIcon/>
          </IconButton>
          <IconButton aria-label="edit" style={{background: "#0448b8"}}
          onClick={deleteRequest}>
            <DeleteIcon/>
          </IconButton>
        </div>
      </Paper>

      <UpdateRequestProduct
        show={show}
        onHide={() => setShow(false)}
        itemId={itemId}
        itemname={itemname}
        brand={brand}
        model={model}
        version={version}
      />
    </div>
  )
}

export default SingleProductRequest