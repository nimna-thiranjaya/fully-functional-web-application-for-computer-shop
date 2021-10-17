import React, {useState, useEffect, Component} from "react";

import DisplayProductRequest from "./adminDisplayRequest";
import Navbar from '../Project_Layouts/Navbar/Navbar';

export default class adminRequest extends Component{

 

    render(){
    return (
          <div>
            <Navbar/>

            <div className="pt-2">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="text-color mb-0" style={{paddingLeft:570}}>Customer Requests</h1>
        </div>
          <div style={{paddingLeft:300, paddingRight:300,paddingTop:50,paddingBottom:100}}>
          <div>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Customer Requests</h6>
              </div>
              <div className="card-body">
                <DisplayProductRequest/>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
    )
    }
}