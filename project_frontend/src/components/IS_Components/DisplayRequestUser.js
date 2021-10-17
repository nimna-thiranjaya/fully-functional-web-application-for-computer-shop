import React, { Component } from 'react';
import axios from 'axios';
import SingleProductRequest from './SingleRequest'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Button from '@material-ui/core/Button'

export default class DisplayRequestProduct extends Component {
  constructor(props) {
    super();
    this.generateReport = this.generateReport.bind(this)
    this.state = {
      requests: []
    }
  }

  async componentDidMount() {
    const config = {
      headers: {
        Authorization: localStorage.getItem("Authorization")
     },
    }
    await axios.get('http://localhost:8070/requests/myrequests', config)
    .then((res) => {
      this.setState({ requests: res.data.requests })
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  async generateReport() {

    const obj = { request: this.state.requests }
    await axios.post('http://localhost:8070/generateRequestReport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, })
    .then((res) => {
      alert('Report Generated')

        console.log(res)
        console.log(res.data)

        const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlog, 'MyRequest.pdf');

        //window.open(res.data, '_blank');

    }).catch((err) => {
        console.log(err.message)
    })
    console.log(obj)
  }

  render() {
    return (
      <div className="container" style={{paddingTop:0}}>
        <h2 className="text-color">My Requests</h2>
        {console.log(this.state.requests)}
        <Button className="w-25" variant="contained" style={{background: "#93a9f8",fontFamily: 'Arial Black'}} startIcon={<InsertDriveFileIcon/>}  onClick={this.generateReport} disableElevation>
          Download my requests
        </Button>
        <div  style={{paddingTop:30,paddingBottom:30,paddingRight:30,paddingLeft:30}}>
        <div className="pt-2">
          <div className="row">
            {this.state.requests.map((item) => (
              <div key={item._id} className="col-lg-4 col-sm-12">
              <SingleProductRequest
                itemname={item.itemname}
                brand={item.brand}
                model={item.model}
                version={item.version}
                itemId={item._id}
              />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    )
  }
}