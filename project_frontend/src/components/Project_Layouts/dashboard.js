import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
 
export default class dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                       
                        <div class="shadow h-60" id="cardcol1">
                        <a href="/admin"><img
                            src="https://blog.identityautomation.com/hubfs/Stock%20images/businessman%20hand%20pointing%20to%20padlock%20on%20touch%20screen%20computer%20as%20Internet%20security%20online%20business%20concept.jpeg"
                            class="card-img-top"
                            width="25px"
                            height="190px"
                            alt="..."
                        /></a>
                        <div class="card-body">
                        <h5 class="card-title" id="dashh5">ADMIN</h5>
                        </div>
                        </div>
                       
                    </div>
                    <div class="col">
                        <div class="shadow h-60" id="cardcol1">
                        <a href="/inventory"><img
                            src="https://multichannelmerchant.com/wp-content/uploads/2017/09/inventory-management-clipboard-warehouse-guy-feature.jpg"
                            class="card-img-top"
                            alt="..."
                            width="25px"
                            height="190px"
                        /></a>
                        <div class="card-body">
                        <center><h5 class="card-title" id="dashh5">INVENTORY</h5></center>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="shadow h-60" id="cardcol1">
                        <a href="/discount"><img
                            src="https://thumbs.dreamstime.com/b/laptop-computer-displaying-commercial-sale-sign-internet-shopping-website-e-commerce-199953963.jpg"
                            class="card-img-top"
                            width="25px"
                            height="190px"
                            alt="..."
                        /></a>
                        <div class="card-body">
                        <h5 class="card-title" id="dashh5">DISCOUNT</h5>
                        </div>
                        </div>
                    </div>
                   
                    </div>
                    <center><div className="container">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="shadow h-60" id="cardcol1">
                    <a href="/delivery"><img
                            src="https://media.istockphoto.com/photos/close-up-of-hands-cargo-staff-are-delivering-cardboard-boxes-with-picture-id1134818195?k=20&m=1134818195&s=612x612&w=0&h=EJjVzKarVSXNfn5B1UMUKu8_N2YS8Ro3fk1ThKy1Zgo="
                            class="card-img-top"
                            alt="..."
                            width="25px"
                            height="190px"
                        /></a>
                        <div class="card-body">
                        <h5 class="card-title" id="dashh5">DELIVERY</h5>
   
                        </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="shadow h-60" id="cardcol1">
                    <a href="/advertisement"><img
                            src="https://media.istockphoto.com/photos/digital-marketing-concept-online-advertisement-picture-id1284549946?b=1&k=20&m=1284549946&s=170667a&w=0&h=DaMSS8u0nwYARehKE5DoEdjTPy96UQJ_B3LMRWnhBUY="
                            class="card-img-top"
                            alt="..."
                            width="25px"
                            height="190px"
                        /></a>
                        <div class="card-body">
                        <h5 class="card-title" id="dashh5">ADVERTISEMENTS</h5>
   
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="shadow h-60" id="cardcol1">
                        <a href="/request"><img
                            src="https://media.istockphoto.com/photos/computer-education-training-class-picture-id1210738055?b=1&k=20&m=1210738055&s=170667a&w=0&h=obsRXiCdlYUURz0l783K7VrSgK535j2vUkFfvQ1SIjE="
                            class="card-img-top"
                            alt="..."
                            width="25px"
                            height="190px"
                        /></a>
                        <div class="card-body" >
                        <h5 id="dashh5">REQUEST ITEM</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="shadow h-60" id="cardcol1">
                        <a href="/feedback"><img
                            src="https://www.getabstract.com/channel-img/1621-feedback-1548252815000.jpg"
                            class="card-img-top"
                            alt="..."
                            width="25px"
                            height="190px"
                        /></a>
                        <div class="card-body">
                        <h5 class="card-title" id="dashh5">FEEDBACK</h5>
                        </div>
                        </div>
                    </div>
               
                    </div>
                </div></center>
                </div>
             
            </div>
           
        )
    }
}