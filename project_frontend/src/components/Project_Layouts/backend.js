import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import DiscountPage from '../NT_Components/discount/DiscountPage'
import Adminpage from '../NT_Components/Admin/Adminpage'
import InventoryPage from '../SS_Components/InventoryPage';
import Home from '../RS_Components/AdsHome'
import adminRequest from '../IS_Components/adminRequest'
import Admin_Feedback_Section from '../AA_Components/Admin_Feedback_Section';
import dashboard from './dashboard'
import DeliveryPage from '../RD_Components/DeliveryPage'
export default class backend extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                    <Router>
                            <Route path="/discount" exact component={DiscountPage}/>
                            <Route path="/admin" exact component={Adminpage}/>
                            <Route path="/inventory" exact component={InventoryPage}/>
                            <Route path ="/advertisement" exact component={Home}/>
                            <Route path="/delivery" exact component={DeliveryPage}/>
                            <Route path="/requests" exact componenet ={adminRequest}/>
                            <Route path="/feedback" exact component={Admin_Feedback_Section}/>
                            <Route path="/dashBoard" exact component={dashboard}/>
                    </Router>                
            </div>
        )
   
    }
}
 

