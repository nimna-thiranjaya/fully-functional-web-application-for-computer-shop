import React, { Component } from 'react'
import CreateProducts from "../SS_Components/CreateProducts";
import Home from "../SS_Components/Home";
import Navbar from "../../components/Project_Layouts/Navbar/Navbar";

export default class InventoryPage extends Component {
    render() {
        return (
            <>
<Navbar/>         
<br/>
<br/>
              <div>
                   <CreateProducts/>
              </div>
        
                 <div >   
                 <Home/>
</div> 
</>

       
        )
    }
}
