import React, { Component } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar'
import Typography from '@material-ui/core/Typography'
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {saveAs} from 'file-saver';

export default class DisplayWishlist extends Component {
  constructor(props) {
    super();
    this.generateReport= this.generateReport.bind(this);
    this.displayWishListItems = this.displayWishListItems.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      wishlist: [],
      open: false
    }
  }

  async componentDidMount() {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };

    await axios.get('http://localhost:8070/wishlist/display', config)
    .then((res) => {
      this.setState({wishlist: res.data.wishlist})
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  handleClose(reason){
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false})
  };

  async deleteItem(id) {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
    await axios.delete(`http://localhost:8070/wishlist/delete/${id}`, config)
    .then((res) => {
      this.setState({open: true})
    })
    .catch((err) => {
      alert(err.message)
      console.log(err)
    })
    this.setState({
      wishlist: this.state.wishlist.filter((element) => element._id !== id)
    })
  }


  displayWishListItems() {
    return (
  
      <div class="wrapper">
     <div className="row" style={{ paddingTop: 15 }}>
        {this.state.wishlist.map((item) => (
          <div key={item._id} className="col-lg-3 col-md-6 col-sm-2">
            <div style={{width: 230, paddingBottom: 15}}>
            <div class="cardwl">
              <div>
                <img src={item.coverImage}  class="card__image"/>
              </div>
              <br/><br/>
              <center>
              <div class="content text-color p-2">
                <p class="header text-color " style={{fontSize: 19,fontFamily: 'Arial Black'}}>
                {item.productName.length > 13 ? <div>{item.productName.substr(0, 14)}...</div> : item.productName}
                </p>
                <Typography component={'span'} variant={'body2'}>
                  <div className="text-color" style={{fontSize: 16, paddingBottom: 8}}>LKR {item.productPrice}.00</div>
                </Typography>
              </div>
              </center>
              <br/>
              <Button variant="contained" className="w-10 mb-2 ml-2 mr-2" style={{background: "#619dff", width: 92+"%"}}
                startIcon={<ShoppingCart />} disableElevation type="submit">add to cart</Button>
              <Button variant="contained" className="w-10 mb-2 ml-2 mr-2" style={{background: "#0448b8", width: 92+"%"}}
                startIcon={<DeleteIcon />} disableElevation type="submit" onClick={() => {this.deleteItem(item._id);}}>remove</Button>
              <div class="extra content"></div>
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
    )
  }

  async generateReport() {
    const obj = { wishlist: this.state.wishlist }
    await axios.post('http://localhost:8070/generateWishlistReport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {
        alert('Report Generated')
        console.log(res)
        console.log(res.data)
        const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlog, 'Wishlist.pdf');
        //window.open(res.data, '_blank');
    }).catch((err) => {
        console.log(err.message)
    })
    console.log(obj)
}


filterData(wishlist,searchKey){

  const result = wishlist.filter((wishlist) =>
      wishlist.productName.toLowerCase().includes(searchKey)

  )
  this.setState({wishlist:result})
}




handleSearchArea = (e)=> {

 const searchKey = e.currentTarget.value;

 axios.get("http://localhost:8070/wishlist/display").then(res =>{

      if(res.data.success){
             this.filterData(res.data.existingwishlist,searchKey)
          };
      }
  )

}


  render() {
    return (
      <div>
        <h2 style={{fontFamily: 'Arial Black',color:"white"}}>My Wishlist</h2>

        <Snackbar open={this.state.open} autoHideDuration={2000} onClose={this.handleClose} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}>
          <div className="alert alert-danger">
            Item Deleted
          </div>
        </Snackbar>
        

        <div className="card-header py-3">
        <Button className="w-25" id="aax" variant="contained" startIcon={<InsertDriveFileIcon/>} onClick={this.generateReport} disableElevation >
          Get my wishlist items
        </Button>
              <div className="col-md-3 ms-auto">
                <input
                    
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    name="searchQuery"
                    onChange={this.handleSearchArea}>
                </input>
              </div>
          </div>

        {this.displayWishListItems()}
      </div>
    )
  }
}
