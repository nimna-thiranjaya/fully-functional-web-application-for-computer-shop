import React, {Component} from "react";
import DeliveryHome from '../RD_Components/DeliveryHome';
import EmailDelivery from '../RD_Components/EmailDelivery';
import Navbar from "../../components/Project_Layouts/Navbar/Navbar";


export default class DeliveryPage extends Component {   
       render() {     
              return (          
                  <><Navbar/>       
                  <br/><br/>          
                    <div>              
                         <DeliveryHome/>       
                           </div>          
                                    <div >  
                                           <EmailDelivery/> 
                            
                          </div> </>
                               
                                                  
                          
          )  
  }}

