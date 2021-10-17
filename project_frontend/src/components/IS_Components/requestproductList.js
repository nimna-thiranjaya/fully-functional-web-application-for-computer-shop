import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const Requestproduct = (props) => (
  <>
  
  <tr style={{color:"black"}}>

    <td>{props.item.itemname}</td>
    <td>{props.item.brand}</td>
    <td>{props.item.model}</td>
    <td>{props.item.version}</td>
    <td>{props.item.userID}</td>
    <td>{props.item.userEmail}</td>
    
    <td>
      <Link to={"/edit/" + props.item._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteRequestproduct(props.item._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
  </>
);

export default class RequestproductList extends Component {

 
  constructor(props) {
    super(props);

    this.deleteRequestproduct = this.deleteRequestproduct.bind(this)

    this.state = {requestproduct: []};
  }

  componentDidMount() {
    axios
      .get("http://localhost:8070/requests/all")
      .then(response => {
        this.setState({ requestproduct: response.data })
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteRequestproduct(id) {
    axios.delete("http://localhost:8070/requests/delete" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      requestproduct: this.state.requestproduct.filter((el) => el._id !== id),
    });
  }

  RequestproductList() {
    return this.state.requestproduct.map((currentrequestproduct) => {
      return (
        <Requestproduct
          item={currentrequestproduct}
          deleteRequestproduct={this.deleteRequestproduct}
          key={currentrequestproduct._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
      <h3>List</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Item name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Version</th>
            <th>User ID</th>
            <th>User email</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody style={{ color:"black"}}>{this.RequestproductList()}</tbody>
      </table>
    </div>


    )
  }
}