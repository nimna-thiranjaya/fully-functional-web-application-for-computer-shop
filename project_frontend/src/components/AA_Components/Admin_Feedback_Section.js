import React, {useState, useEffect, Component} from "react";
import AdminFeedbacks from "./All_Admin_Feedbacks"
import Navbar from '../Project_Layouts/Navbar/Navbar';


export default class Admin_Feedback_Section extends Component{


    render() {
        return (
          <div>
            <Navbar/>
            <br/>
        <div align="center">
        <div  align="center" className="mb-4">
          <b><h1 text-align="center">Feedbacks</h1></b>
        </div>

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="font-weight-bold text-primary">
                  Latest Customer Feedbacks
                  <br/>
                </h6>
                
                
              <div className="card-body">
              </div>
                <AdminFeedbacks/>
              </div>
            </div>
        </div>
        </div>
        </div>
        )}

}
