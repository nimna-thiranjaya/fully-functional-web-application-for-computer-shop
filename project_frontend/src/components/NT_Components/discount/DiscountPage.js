import React, { Component } from 'react'
import DisplayDiscount from './DisplayDiscount'
import AddDiscount  from './AddDiscount'
import Navbar from '../../Project_Layouts/Navbar/Navbar'

export default class DiscountPage extends Component {
  
    render() {
        return (
          
            <div>
              <Navbar/>
              <br/><br/>
              <div className="container">
              <div>
                <AddDiscount/>
              </div>
              <br/>
              <div>
                <DisplayDiscount/>
              </div> 
              </div>
          </div>
        )
    }
}
